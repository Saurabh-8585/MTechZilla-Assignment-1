import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button/Button';
import { AiOutlineLogin } from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci'
const Navbar = () => {

    const isLoggedIn = sessionStorage.getItem('user')
    const navigate = useNavigate()

    const handleSignOut = async () => {
        sessionStorage.removeItem('user')
        navigate('/login')

    }
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 z-50 fixed top-0 w-full bg-white border">
            <div className="relative flex items-center justify-between mx-3">
                <Link
                    to='/'
                    className="inline-flex items-center"
                >
                    <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                    >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Timely
                    </span>
                </Link>
                <ul className="flex items-center  space-x-8 lg:flex">
                    <li>
                        {isLoggedIn ?
                            <Button btnText='Sign Out' btnIcon={<CiLogout className='font-semibold text-xl' />} handleOnClick={handleSignOut} />
                            :
                            <Button btnText='Sign In' btnIcon={<AiOutlineLogin className='font-semibold text-xl' />} handleOnClick={() => navigate('/login')} />
                        }
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Navbar