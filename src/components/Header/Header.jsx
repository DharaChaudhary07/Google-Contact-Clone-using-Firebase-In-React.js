import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { signInWithGoogle, logout } from '../../Service/Actions/contactAction '; 
import { auth } from '../../firebaseConfig';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { GoGear } from "react-icons/go";
import { VscQuestion } from "react-icons/vsc";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { LuGrip } from "react-icons/lu";




const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { user } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((currentUser) => {

            if (currentUser) {
                dispatch({ type: 'SIGN_IN_SUCCESS', payload: currentUser });
            } else {

                dispatch({ type: 'SIGN_OUT_SUCCESS' });
            }
        });

        return () => unsubscribe();

    }, [dispatch]);

    const handleSignIn = () => {

        dispatch(signInWithGoogle());

    };

    const handleSignOut = () => {

        dispatch(logout());
    };

    return (

        <header className=" shadow-md" style={{ background: '#F8FAFD' }}>
            <div className="flex items-start justify-between p-4 max-w-7xl mx-auto">
                <div className="flex items-center bg-gray-100 p-2 rounded-lg w-1/2">
                    <HiMagnifyingGlass className="text-gray-600" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 text-gray-700 p-1 ml-2 outline-none placeholder-gray-400 w-full"
                        aria-label="Search"
                    />
                </div>

                <div className="relative flex items-center align-center">
                    <div className="text-gray-600 flex space-x-3">
                        <VscQuestion size={24} className='mr-2'/>
                        <GoGear size={24} className='mr-4'/>
                        <LuGrip size={23} className='mr-3'/>
                        <button onClick={toggleDropdown} className="relative focus:outline-none">
                            <img
                                src={user ? user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                            <div className="p-4 border-b">
                                <div className="flex items-center">
                                    <img
                                        src={user ? user.photoURL : "https://via.placeholder.com/150"}
                                        alt="User Avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="ml-3">
                                        {user ? (
                                            <>
                                                <p className="text-gray-800 font-semibold">{user.displayName}</p>
                                                <p className="text-gray-600 text-sm">{user.email}</p>
                                            </>
                                        ) : (
                                            <p className="text-gray-600">Not signed in</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                {user ? (
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left text-red-600 hover:text-red-700"
                                    >
                                        Sign out
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSignIn}
                                        className="w-full text-left text-blue-600 hover:text-blue-700"
                                    >
                                        Sign in with Google
                                    </button>
                                )}
                            </div>
                            <div className="p-4 border-t text-sm text-gray-500">
                                <a
                                    href="https://myaccount.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600"
                                >
                                    Manage your Google Account
                                </a>
                                <p className="mt-2">Privacy Policy • Terms of Service</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
