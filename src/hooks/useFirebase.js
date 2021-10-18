import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState()


    const auth = getAuth();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const handleFacebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
        });

    }, [])


    const signInWithEmailPassword = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)



    }

    const registerWithEmailPassword = (email, password) => {


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)

            })
            .catch((error) => {
                setError(error.message
                )
            });
    }


    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        })
    }
    return {
        error, user, logOut, handleGoogleSignIn, signInWithEmailPassword, registerWithEmailPassword, handleFacebookSignIn
    }
};

export default useFirebase;