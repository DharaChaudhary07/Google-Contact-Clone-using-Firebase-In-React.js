import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { FiAlignJustify } from "react-icons/fi";
import { GoTrash , GoDownload} from "react-icons/go";
import { LuTimerReset , LuArchiveRestore } from "react-icons/lu";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { GoPersonFill } from "react-icons/go";


const Sidebar = () => {
    return (

        <div className="fixed top-0 left-0 h-full w-64 text-black p-5 z-50" style={{ background: '#F8FAFD' }}>
             <div className="flex items-center">
                    <FiAlignJustify className="text-gray-600" size={21} />
                    <img
                        src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
                        alt="Contacts Icon"
                        className="w-10 h-10 ml-2"
                    />
                    <span className="ml-2 font-medium text-gray-500 text-xl ">Contacts</span>
                </div>
            <ul>
                <li className="py-2 pt-4">
                    <Link
                        to="/create"
                        className="flex items-center bg-blue-100 hover:bg-blue-200 p-3 rounded-xl text-black"
                    >
                        <HiPlus  size={22}/>
                        <span className="ml-2">Create Contact</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="/"
                        className="flex items-center hover:bg-blue-100 p-2 rounded-full transition duration-200"
                    >
                        <GoPersonFill size={22}/>
                        <span className="ml-2">Contacts</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded-full transition duration-200"
                    >
                        <LuTimerReset size={24} />
                        <span className="ml-2">Frequent</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded-full transition duration-200"
                    >
                        <LuArchiveRestore size={24}/>
                        <span className="ml-2">Other Contacts</span>
                    </Link>
                </li>
                <li className="mt-6 mb-2 text-sm font-bold text-gray-500">Fix and Manage</li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded-full transition duration-200"
                    >
                        <HiMiniWrenchScrewdriver size={24} />
                        <span className="ml-2">Merge and Fix</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded-full transition duration-200"
                    >
                        <GoDownload size={24}/>
                        <span className="ml-2">Import</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded-full transition duration-200"
                    >
                        <GoTrash size={24}/>
                        <span className="ml-2">Bin</span>
                    </Link>
                </li>
                <li className='flex justify-between mt-3'>
                    <span>
                        Labels 
                    </span>
                    <span>
                        <HiPlus size={22}/>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;