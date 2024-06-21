import React from 'react';

interface AlertProps {
    type: 'danger' | 'success';
    text: string;
    show: boolean;
}

const Alert: React.FC<AlertProps> = ({ type, text, show }) => {
    return (
        <div className={`fixed top-0 left-0 right-0 flex justify-center items-center transition-transform transform ${show ? 'translate-y-10' : '-translate-y-full'} ease-in-out duration-500`}>
            <div
                className={`relative p-4 ${type === "danger" ? "bg-red-800" : "bg-blue-800"
                    } items-center text-indigo-100 leading-none rounded-lg flex shadow-xl border-2 border-solid border-white`}
                role='alert'
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 rounded-lg animate-pulse"></div>
                <p className={`relative z-10 flex rounded-full ${type === "danger" ? "bg-red-500" : "bg-blue-500"
                    } uppercase px-2 py-1 text-xs font-semibold mr-3 shadow-inner`}
                >
                    {type === "danger" ? "Failed" : "Success"}
                </p>
                <p className='relative z-10 mr-2 text-left'>{text}</p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Alert;
