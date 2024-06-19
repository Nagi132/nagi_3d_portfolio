import Navbar from '@/components/Navbar';
import React from 'react';

const Home: React.FC = () => {
    return (
        <main className="bg-slate-300/20">
            <Navbar />
            <h1>Hello, World!</h1>
        </main>
    );
};

export default Home;