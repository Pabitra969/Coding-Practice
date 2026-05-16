import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white fixed bottom-0 w-full z-20">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <a href="#" className="text-xl font-bold">
                        Blog Website
                    </a>
                    <div className="mt-4 flex flex-wrap justify-center sm:mt-0">
                        <a href="#" className="px-4 py-1 text-sm text-gray-300 hover:text-white">About</a>
                        <a href="#" className="px-4 py-1 text-sm text-gray-300 hover:text-white">Contact</a>
                        <a href="#" className="px-4 py-1 text-sm text-gray-300 hover:text-white">Privacy Policy</a>
                    </div>
                </div>
                <hr className="my-3 border-gray-600" />
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-xs text-gray-400">
                        &copy; {currentYear} Blog Website. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;