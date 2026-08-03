import Head from 'next/head';
import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas, useThree } from '@react-three/fiber';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Alert from '@/components/Alert';
import Navbar from '@/components/Navbar';
import useAlert from '@/hooks/useAlert';
import Fox from '@/models/Fox';

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

const ContactFox = ({ currentAnimation }: { currentAnimation: string }) => {
  const canvasHeight = useThree((state) => state.size.height);
  const isDesktopCanvas = canvasHeight > 300;
  const position: [number, number, number] = isDesktopCanvas
    ? [0.25, -0.05, 0]
    : [0.05, -0.15, 0];
  const scale: [number, number, number] = isDesktopCanvas
    ? [0.62, 0.62, 0.62]
    : [0.72, 0.72, 0.72];

  return (
    <Fox
      currentAnimation={currentAnimation}
      position={position}
      rotation={[12.6, -0.6, 0]}
      scale={scale}
    />
  );
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<ContactProps>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ text: 'Message sent successfully!', type: 'success' });

        setTimeout(() => {
          setFormState({ name: '', email: '', message: '' });
          setCurrentAnimation('idle');
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.error(error);
        showAlert({ text: 'An error occurred, please try again later.', type: 'danger' });
      });
  };

  const foxStatus = isLoading
    ? 'sending'
    : currentAnimation === 'walk'
      ? 'listening'
      : 'idle';

  const fieldClassName =
    'mt-2 block w-full bg-transparent px-0 py-1.5 text-base font-normal leading-7 text-slate-950 outline-none placeholder:text-slate-400';

  return (
    <>
      <Head>
        <title>Nagi&apos;s Portfolio - Contact</title>
        <meta
          name="description"
          content="Send Nagi Williams a message about projects, opportunities, or collaboration."
        />
      </Head>

      <main className="relative min-h-screen overflow-x-hidden bg-slate-300/20">
        <Navbar />
        {alert.show && <Alert {...alert} onClose={hideAlert} />}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8rem] top-32 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl"
        />

        <section className="max-container relative z-10">
          <header className="max-w-4xl">
            <p className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky-700">
              <span aria-hidden="true" className="h-px w-8 bg-sky-500" />
              Contact / Message
            </p>
            <h1 className="head-text mt-5">
              Get in <span className="blue-gradient_text font-semibold drop-shadow">touch</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Questions, opportunities, or ideas are welcome.
            </p>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-stretch lg:gap-10">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="border-y border-slate-300/80">
                <label className="group block border-b border-slate-300/70 px-1 py-4 transition-colors focus-within:border-sky-500 sm:px-3">
                  <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-500 group-focus-within:text-sky-700">
                    01 / Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className={fieldClassName}
                    placeholder="Your name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>

                <label className="group block border-b border-slate-300/70 px-1 py-4 transition-colors focus-within:border-sky-500 sm:px-3">
                  <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-500 group-focus-within:text-sky-700">
                    02 / Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className={fieldClassName}
                    placeholder="you@example.com"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>

                <label className="group block px-1 py-4 transition-colors focus-within:border-sky-500 sm:px-3">
                  <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-500 group-focus-within:text-sky-700">
                    03 / Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className={`${fieldClassName} min-h-[132px] resize-y`}
                    placeholder="What would you like to talk about?"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>
              </div>

              <button
                type="submit"
                className={[
                  'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500',
                  isLoading
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:-translate-y-0.5 hover:bg-sky-700',
                ].join(' ')}
                disabled={isLoading}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <span>{isLoading ? 'Sending...' : 'Send message'}</span>
                {!isLoading && <FaPaperPlane className="h-3.5 w-3.5" aria-hidden="true" />}
              </button>
            </form>

            <aside
              className="relative h-[260px] overflow-hidden rounded-2xl border border-slate-300/80 bg-white/25 lg:h-auto lg:min-h-[440px]"
              aria-hidden="true"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-35"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.16) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <p className="absolute left-4 top-4 z-10 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-slate-500">
                Fox / {foxStatus}
              </p>
              <div className="absolute bottom-9 left-1/2 h-8 w-52 -translate-x-1/2 rounded-[100%] bg-emerald-950/10 blur-xl lg:bottom-12" />
              <Canvas
                camera={{
                  position: [0, 0, 5],
                  fov: 75,
                  near: 0.1,
                  far: 1000,
                }}
              >
                <directionalLight intensity={2.5} position={[0, 0, 1]} />
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <ContactFox currentAnimation={currentAnimation} />
                </Suspense>
              </Canvas>
            </aside>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-300/80 pt-5 text-sm sm:flex-row sm:items-center">
            <p className="text-slate-600">Find me elsewhere</p>
            <div className="flex items-center gap-5 font-semibold text-slate-900">
              <a
                href="https://www.linkedin.com/in/nagi1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Nagi132"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
