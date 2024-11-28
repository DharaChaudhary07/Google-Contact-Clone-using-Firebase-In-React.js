import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; 

const View = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const docRef = doc(db, "Contact", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setContact(docSnap.data());
                } else {
                    setError("No such contact found!");
                }
            } catch (error) {
                setError("Error fetching contact.");
                console.error("Error fetching contact:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContact();
        
    }, [id]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="p-6 w-full bg-white shadow-lg rounded-lg mt-5">
            {contact && (
                <>
                    <h2 className="text-2xl font-bold text-center mb-4">{`${contact.fname || ''} ${contact.lname || ''}`}</h2>
                    <div className="text-center mb-2">
                        <strong>Email:</strong> {contact.email || "Not available"}
                    </div>
                    <div className="text-center mb-2">
                        <strong>Phone:</strong> {contact.phone || "Not available"}
                    </div>
                    {contact.bday && contact.bmonth && contact.byear && (
                        <div className="text-center mb-2">
                            <strong>Birthday:</strong> {`${contact.bmonth}/${contact.bday}/${contact.byear}`}
                        </div>
                    )}
                    <div className="text-center mb-2">
                        <strong>Schedule:</strong> {contact.schedule || "Not available"}
                    </div>
                    <div className="text-center mb-2">
                        <strong>Chat:</strong> {contact.chat || "Not available"}
                    </div>
                    <div className="text-center mb-2">
                        <strong>Video:</strong> {contact.video || "Not available"}
                    </div>
                </>
            )}
        </div>
    );
};

export default View;
