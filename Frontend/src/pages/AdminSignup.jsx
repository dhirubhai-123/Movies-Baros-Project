import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react'; // Using Lucide icons
import toast from 'react-hot-toast';
import { useAuthStore } from '../Store/useAuthStore.js';
import { useNavigate } from 'react-router-dom';

const AdminSignup = () => {

    const { adminSignup } = useAuthStore();
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName || !email || !password) {
            return toast.error("All fields are required !!")
        }

        // Handle the signup logic here (e.g., send data to backend)

        if (email && password) {
            if (password.trim().length !== 8) return toast.error("password must 8 chars long!!")
        }

        const func = async () => {
            await adminSignup({ email, password, fullName }, navigate);
            console.log({ email, password, fullName });
        }
        func();

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <div className='min-h-full w-full text-center border my-2 text-4xl md:text-5xl lg:6xl border-black'>
                    <span className='text-black font-semibold'>
                        Movies
                    </span>
                    <span className='text-red-500 font-semibold'>
                        Baros
                    </span>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>


                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <div className="flex items-center border-2 rounded-md mt-1">
                            <User className="ml-2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full px-4 py-2 border-none outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="flex items-center border-2 rounded-md mt-1">
                            <Mail className="ml-2 text-gray-500" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border-none outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="flex items-center border-2 rounded-md mt-1">
                            <Lock className="ml-2 text-gray-500" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border-none outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <a href="/admin/admin-login" className="text-indigo-600 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AdminSignup;
