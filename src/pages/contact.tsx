import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '@/models/Fox';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';

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
                // TODO: Show success message
                // TODO: Hide an alert

                setTimeout(() => {
                    setFormState({ name: '', email: '', message: '' });
                    setCurrentAnimation('idle');
                }, 3000);
            }).catch((error) => {
                setIsLoading(false);
                setCurrentAnimation('idle');
                console.log(error);
                // TODO: Show error message
            });
        }
    };

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <Navbar />
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
                        className='btn'
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? ('Sending...') : ('Send Message')}
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
    )
}

export default Contact