import Head from 'next/head'
import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '@/models/Fox';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import useAlert from '@/hooks/useAlert';
import Alert from '@/components/Alert';
import { FaPaperPlane } from 'react-icons/fa';


interface ContactProps {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, setFormState] = useState<ContactProps>({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const handleFocus = () => setCurrentAnimation('walk');
    const handleBlur = () => setCurrentAnimation('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        if (formRef.current) {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            ).then(() => {
                setIsLoading(false);
                showAlert({ text: 'Message sent successfully!', type: 'success' });

                setTimeout(() => {
                    setFormState({ name: '', email: '', message: '' });
                    setCurrentAnimation('idle');
                }, 3000);
            }).catch((error) => {
                setIsLoading(false);
                setCurrentAnimation('idle');
                console.log(error);
                showAlert({ text: 'An error occurred, please try again later.', type: 'danger' });
            });
        }
    };

    return (
        <>
            <Head>
                <title>Nagi's Portfolio - Contact</title>
                <meta name="description" content="Welcome to Nagi Williams' personal portfolio showcasing my projects and skills." />
            </Head>
            <main className="bg-slate-300/20 h-full">
                <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
                    <Navbar />
                    {alert.show && <Alert {...alert} />}
                    {/* <Alert type='danger' text='test' /> */}
                    <div className='flex-1 min-w-[50%] flex flex-col'>
                        <h1 className='head-text'>Get in Touch</h1>

                        <form
                            ref={formRef}
                            className='w-full flex flex-col gap-7 mt-14'
                            onSubmit={handleSubmit}
                        >
                            <label className='text-black-500 font-semibold'>
                                Name
                                <input
                                    type='text'
                                    name='name'
                                    className='input'
                                    placeholder='Your Name'
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                            <label className='text-black-500 font-semibold'>
                                Email
                                <input
                                    type='email'
                                    name='email'
                                    className='input'
                                    placeholder='example@email.com'
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                            <label className='text-black-500 font-semibold'>
                                Message
                                <textarea
                                    name='message'
                                    rows={4}
                                    className='textarea'
                                    placeholder='Create a message here'
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                            <button
                                type="submit"
                                className={`btn relative overflow-hidden text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${isLoading ? 'cursor-not-allowed opacity-50' : 'hover:scale-105 hover:shadow-lg'
                                    }`}
                                disabled={isLoading}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="relative flex items-center justify-center space-x-2">
                                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                                    {!isLoading && <FaPaperPlane className="ml-2" />}
                                </div>
                            </button>
                        </form>
                    </div>

                    <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'
                    >
                        <Canvas
                            camera={{
                                position: [0, 0, 5],
                                fov: 75,
                                near: 0.1,
                                far: 1000
                            }}
                        >
                            <directionalLight intensity={2.5} position={[0, 0, 1]} />
                            <ambientLight intensity={0.5} />
                            <Suspense fallback={<Loader />}>
                                <Fox
                                    currentAnimation={currentAnimation}
                                    position={[0.5, 0.35, 0]}
                                    rotation={[12.6, -0.6, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contact