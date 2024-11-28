import { auth, db } from '../../firebase'; 
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
    signInStart,
    signInSuccess,
    signInFailure,
    signOutSuccess,
} from '../../Service/Actions/authActionType'; 

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => async (dispatch) => {
    dispatch({ type: signInStart });
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        });

        dispatch({ type: signInSuccess, payload: user });
    } catch (error) {
        dispatch({ type: signInFailure, payload: error.message });
    }
};

export const logout = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch({ type: signOutSuccess });
    } catch (error) {
        console.error('Error during sign out: ', error);
        // dispatch({ type: signOutFailure, payload: error.message });
    }
};
