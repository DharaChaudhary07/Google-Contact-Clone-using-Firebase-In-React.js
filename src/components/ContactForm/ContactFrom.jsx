import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addContactData } from '../../Service/Actions/contactAction ';
import { useDispatch } from 'react-redux';
import { HiPlus } from "react-icons/hi";
import { VscLocation , VscArrowSmallLeft} from "react-icons/vsc";


const CreateContact = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        company: '',
        jobtitle: '',
        email: '',
        phone: '',
        bday: '',
        bmonth: '',
        byear: '',
        notes: '',
    });

    const handleForm = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value });
    };

    const handleSave = (e) => {

        e.preventDefault();

        dispatch(addContactData(formData));
        navigate('/');

        setFormData({
            fname: '',
            lname: '',
            company: '',
            jobtitle: '',
            email: '',
            phone: '',
            bday: '',
            bmonth: '',
            byear: '',
            notes: '',
        });
    };

    return (
        
        <div className="p-4 max-w-2xl">
            <button 
                onClick={() => navigate("/")} 
                className="text-black-500 mb-4 flex items-center">
                <VscArrowSmallLeft size={30}/>
            </button>
            <div className='mx-auto w-40 h-40 rounded-full overflow-hidden'>
                <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" alt="" />
            </div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSave}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="fname"
                        value={formData.fname}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="First Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lname"
                        value={formData.lname}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Last Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Company"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
                        Job Title
                    </label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobtitle"
                        value={formData.jobtitle}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Job Title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                    />
                </div>
                <button type="button" className='bg-blue-100 text-blue-800 p-3 mb-7 mt-5 rounded-full transition w-full hover:bg-blue-200 shadow-md'>
                   <HiPlus size={19} className=' items-center inline' /> <span className="ml-2 font-medium">Add email</span>
                </button>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Phone"
                    />
                </div>
                <button type="button" className='bg-blue-100 text-blue-800 p-3 mb-7 mt-5 rounded-full transition w-full hover:bg-blue-200 shadow-md'>
                   <HiPlus size={19} className=' items-center inline' /> <span className="ml-2 font-medium">Add phone</span>
                </button>
                <button type="button" className='bg-blue-100 text-blue-800 p-3 mb-7 mt-5 rounded-full transition w-full hover:bg-blue-200 shadow-md'>
                   <VscLocation size={19} className=' items-center inline' /> <span className="ml-2 font-medium">Add address</span>
                </button>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday">
                        Birthday
                    </label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            placeholder="Day"
                            name="bday"
                            value={formData.bday}
                            onChange={handleForm}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1" max="31"
                        />
                        <input
                            type="number"
                            placeholder="Month"
                            name="bmonth"
                            value={formData.bmonth}
                            onChange={handleForm}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1" max="12"
                        />
                        <input
                            type="number"
                            placeholder="YYYY"
                            name="Year"
                            value={formData.byear}
                            onChange={handleForm}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1900" max={new Date().getFullYear()}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                        Notes
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleForm}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Additional notes..."
                        rows="4"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-gray-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow focus:outline-none focus:shadow-outline"
                        type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateContact;
