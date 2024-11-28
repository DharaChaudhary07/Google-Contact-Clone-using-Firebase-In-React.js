import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editContactData } from '../../Service/Actions/contactAction '; 

const Edit = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { contact } = location.state || {};

    const [formData, setFormData] = useState(contact || {
        fname: '',
        lname: '',
        company: '',
        jobtitle: '',
        email: '',
        phone: '',
        bdayMonth: '',
        bdayDay: '',
        bdayYear: '',
        notes: '',
    });

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        }
    }, [contact]);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(formData);
        
        dispatch(editContactData(contact.id, formData));
        
        navigate('/');
    };

    if (!contact) {
        return <div>No contact information found.</div>; 
    }

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Contact</h2> 
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleUpdate}>
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
                        placeholder="John"
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
                        placeholder="Doe"
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
                        placeholder="Company Inc."
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
                        placeholder="Software Engineer"
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
                        placeholder="john.doe@example.com"
                    />
                </div>
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
                        placeholder="(123) 456-7890"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday">
                        Birthday
                    </label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            placeholder="MM"
                            name="bdayMonth"
                            value={formData.bdayMonth}
                            onChange={handleForm}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1" max="12"
                        />
                        <input
                            type="number"
                            placeholder="DD"
                            name="bdayDay"
                            value={formData.bdayDay}
                            onChange={handleForm}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1" max="31"
                        />
                        <input
                            type="number"
                            placeholder="YYYY"
                            name="bdayYear"
                            value={formData.bdayYear}
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
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:shadow-outline"
                        type="submit">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
