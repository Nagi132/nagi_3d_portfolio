import React from 'react';
import { FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi';

interface AlertProps {
    type: 'danger' | 'success';
    text: string;
    show: boolean;
    onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, text, show, onClose }) => {
    const isSuccess = type === 'success';
    const Icon = isSuccess ? FiCheckCircle : FiAlertCircle;

    return (
        <div
            className={[
                'fixed inset-x-0 top-24 z-[70] flex justify-center px-4 transition duration-300',
                show ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
            ].join(' ')}
            role="alert"
            aria-live="polite"
        >
            <div className="flex w-full max-w-md items-start gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 text-[#111816] shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                <span
                    className={[
                        'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                        isSuccess
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-rose-100 text-rose-700',
                    ].join(' ')}
                >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                    <p className="font-poppins text-sm font-semibold">
                        {isSuccess ? 'Message sent' : 'Message not sent'}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{text}</p>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#111816]"
                    aria-label="Dismiss notification"
                >
                    <FiX className="h-4 w-4" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export default Alert;
