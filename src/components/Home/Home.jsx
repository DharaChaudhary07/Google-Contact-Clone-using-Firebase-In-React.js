import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContactData } from '../../Service/Actions/contactAction ';
import { useNavigate } from 'react-router-dom';
import { GoPencil , GoPersonFill , GoTrash } from "react-icons/go";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { contacts, loading } = useSelector((state) => state.contactReducer);
    const contactsArray = Array.isArray(contacts) ? contacts : [];

    useEffect(() => {

        dispatch(fetchContacts());
    }, [dispatch]);

    const handleEditContact = (contact) => {

        navigate(`/edit/${contact.id}`, { state: { contact } });
    };

    const handleRemoveContact = (id) => {

        dispatch(removeContactData(id));
    };

    const handleViewProfile = (id) => {

        navigate(`/profile/${id}`);


    };

    return (
        
        <div className="p-4 w-full   bg-white shadow-lg rounded-3xl mt-5">
            <h1 className="text-2xl font-medium mb-4 text-gray-600">Contacts</h1>
            {loading ? (
                <div className="flex justify-center items-center h-24">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : contactsArray.length === 0 ? (
                <p className="text-center text-gray-700">No contacts available.</p>
            ) : (
                <table className="w-full bg-white  border-gray-300">
                    <thead>
                        <tr className="">
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Phone</th>
                            <th className="py-2 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactsArray.map((contact) => (
                            <tr key={contact.id} className="hover:bg-gray-50 transition">
                                <td className="py-2 px-4 border-b text-black ">{`${contact.fname} ${contact.lname}`}</td>
                                <td className="py-2 px-4 border-b text-gray-700">{contact.email}</td>
                                <td className="py-2 px-4 border-b text-gray-700">{contact.phone}</td>
                                <td className="py-2 px-4 border-b ">
                                    <button
                                        onClick={() => handleViewProfile(contact.id)}
                                        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition mr-1"
                                    >
                                        <GoPersonFill size={22}/>
                                    </button>
                                    <button
                                        onClick={() => handleEditContact(contact)}
                                        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition mr-1"
                                    >
                                        <GoPencil size={22}/>
                                    </button>
                                    <button
                                        onClick={() => handleRemoveContact(contact.id)}
                                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
                                    >
                                        <GoTrash size={22}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;
