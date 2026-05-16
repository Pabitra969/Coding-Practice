import React, { useState } from 'react';


const Registration = ({ setView }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            // In a real app, show a proper message instead of an alert
            console.error("Passwords don't match!");
            return;
        }
        // Add registration logic here
    };

    return (
        <div className='flex justify-center items-center h-160'>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
                    <p className="mt-2 text-sm text-gray-600">Join us and start your journey</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        {/* Full Name Input */}
                        <div>
                            <label htmlFor="full-name" className="sr-only">Full Name</label>
                            <input id="full-name" name="fullName" type="text" autoComplete="name" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Full Name" />
                        </div>
                        {/* Email Input */}
                        <div>
                            <label htmlFor="register-email-address" className="sr-only">Email address</label>
                            <input id="register-email-address" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        {/* Password Input */}
                        <div>
                            <label htmlFor="register-password" className="sr-only">Password</label>
                            <input id="register-password" name="password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                        {/* Confirm Password Input */}
                        <div>
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input id="confirm-password" name="confirmPassword" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;