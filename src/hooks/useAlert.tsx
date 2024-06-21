import { useState } from 'react';

interface AlertState {
    show: boolean;
    text: string;
    type: 'danger' | 'success';
}

const useAlert = () => {
    const [alert, setAlert] = useState<AlertState>({ show: false, text: "", type: 'danger' });

    const showAlert = ({ text, type }: { text: string; type: 'danger' | 'success' }) => {
        setAlert({ show: true, text, type });
        setTimeout(() => {
            setAlert({ show: false, text: "", type: 'danger' });
        }, 3000);
    };

    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    return { alert, showAlert, hideAlert };
};

export default useAlert;
