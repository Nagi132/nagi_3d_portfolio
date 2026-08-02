import Head from 'next/head'
import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '@/models/Fox';
import Navbar from '@/components/Navbar';
import useAlert from '@/hooks/useAlert';
import Alert from '@/components/Alert';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';


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
                <title>Nagi&apos;s Portfolio - Contact</title>
                <meta name="description" content="Send Nagi Williams a message about projects, opportunities, or collaboration." />
            </Head>
            <main className="min-h-screen overflow-x-hidden bg-slate-300/20">
                <Navbar />
                {alert.show && <Alert {...alert} />}

                <section className="mx-auto grid min-h-screen w-full max-w-5xl gap-6 px-4 pb-12 pt-32 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-16">
                    <div className="contents lg:block lg:min-w-0">
                        <div className="order-1">
                            <h1 className="font-poppins text-4xl font-semibold text-[#111816] sm:text-5xl">
                                Get in Touch
                            </h1>
                            <p className="mt-3 text-base font-medium text-[#52605b] sm:text-lg">
                                Feel free to send me a message.
                            </p>
                        </div>

                        <div className="order-2 border-l-2 border-emerald-400 bg-white/55 px-5 py-5 shadow-[0_22px_60px_-42px_rgba(17,24,22,0.55)] backdrop-blur-md sm:px-6 lg:mt-8">
                            <form
                                ref={formRef}
                                className="flex w-full flex-col gap-5"
                                onSubmit={handleSubmit}
                            >
                                <label className="text-sm font-semibold text-[#111816]">
                                    Name
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        className="mt-2 block w-full rounded-md border border-slate-200 bg-white/85 px-3 py-2.5 text-sm font-normal text-[#111816] shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15"
                                        placeholder="Your name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </label>
                                <label className="text-sm font-semibold text-[#111816]">
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className="mt-2 block w-full rounded-md border border-slate-200 bg-white/85 px-3 py-2.5 text-sm font-normal text-[#111816] shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15"
                                        placeholder="you@example.com"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </label>
                                <label className="text-sm font-semibold text-[#111816]">
                                    Message
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="mt-2 block w-full resize-y rounded-md border border-slate-200 bg-white/85 px-3 py-2.5 text-sm font-normal text-[#111816] shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15"
                                        placeholder="What would you like to talk about?"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#111816] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 ${isLoading ? 'cursor-not-allowed opacity-50' : 'hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md'}`}
                                    disabled={isLoading}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                >
                                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                                    {!isLoading && <FaPaperPlane className="h-3.5 w-3.5" aria-hidden="true" />}
                                </button>
                            </form>
                        </div>

                        <div className="order-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-[#52605b] lg:mt-4">
                            <span>Find me elsewhere:</span>
                            <a href="https://www.linkedin.com/in/nagi1/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#111816] transition-colors hover:text-emerald-600">
                                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                                LinkedIn
                            </a>
                            <a href="https://github.com/Nagi132" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#111816] transition-colors hover:text-emerald-600">
                                <FaGithub className="h-4 w-4" aria-hidden="true" />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="relative order-3 mx-auto h-[170px] w-full max-w-xs min-w-0 lg:order-none lg:h-[440px] lg:max-w-md" aria-hidden="true">
                        <div className="absolute bottom-12 left-1/2 h-8 w-52 -translate-x-1/2 rounded-[100%] bg-emerald-950/10 blur-xl" />
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
                            <Suspense fallback={null}>
                                <Fox
                                    currentAnimation={currentAnimation}
                                    position={[0.15, 0.15, 0]}
                                    rotation={[12.6, -0.6, 0]}
                                    scale={[0.62, 0.62, 0.62]}
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
