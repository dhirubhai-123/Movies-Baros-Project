import React, { useEffect } from 'react';
import { LogOut } from "lucide-react"
import { useAuthStore } from '../Store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

    const { adminLogout, isAdminAuthenticated, authAdmin } = useAuthStore();
    const navigate = useNavigate();

    const handleAdminLogout = () => {
        const func = async () => {
            await adminLogout()
        }
        func();
    }

    useEffect(() => {
        if (!authAdmin) {
            navigate("/admin/admin-login");
        }
    }, [authAdmin])

    return (
        <div className='w-full h-screen'>
            <div className='flex justify-between items-center m-2 mx-4 text-xl'>

                <div className='text-center text-4xl md:text-5xl lg:6xl'>
                    <span className='text-black font-semibold'>
                        Movies
                    </span>
                    <span className='text-red-500 font-semibold'>
                        Baros
                    </span>
                </div>

                <button onClick={handleAdminLogout} className='text-blue-300' >
                    <LogOut />
                </button>
            </div>

            <div>
                <h1 className='text-center'>Admin-Panel Comming soon !!</h1>
            </div>
        </div>
    )
}

export default AdminPanel