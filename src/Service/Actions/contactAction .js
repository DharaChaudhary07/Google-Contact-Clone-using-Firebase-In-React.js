import { setDoc, deleteDoc, getDocs, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Loading } from "../../Service/Actions/authActionType";

const generateNumericId = () => {
    return Math.floor(Math.random() * 10000);
};

const addContactDatasuc = (contact) => ({
    type: 'addContact',
    payload: contact,
});

const editContactDatasuc = (contact) => ({
    type: 'editContact',
    payload: contact,
});

const removeContactDatasuc = (id) => ({
    type: 'removeContact',
    payload: id,
});

const setLoading = (isLoading) => ({
    type: "set_Loading",
    payload: isLoading,
});

export const addContactData = (contact) => async (dispatch) => {
    try {
        const id = generateNumericId();
        await setDoc(doc(db, "Contact", id.toString()), { ...contact, id });
        dispatch(addContactDatasuc({ ...contact, id }));
    } catch (error) {
        console.error("Error adding contact:", error.message);
    }
};

export const editContactData = (id, contact) => async (dispatch) => {
    try {
        await setDoc(doc(db, "Contact", id.toString()), { ...contact, id });
        dispatch(editContactDatasuc({ ...contact, id }));
    } catch (error) {
        console.error("Error editing contact:", error.message);
    }
};

export const removeContactData = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "Contact", id.toString()));
        dispatch(removeContactDatasuc(id));
    } catch (error) {
        console.error("Error removing contact:", error.message);
    }
};

export const fetchContacts = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const querySnapshot = await getDocs(collection(db, "Contact"));
        const contacts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch({ type: "fetchContacts", payload: contacts });
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
    } finally {
        dispatch(setLoading(false));
    }
};
