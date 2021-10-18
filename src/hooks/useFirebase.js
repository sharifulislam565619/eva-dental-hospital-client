import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)


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
            setIsLoading(false)
        });

    }, [])


    const signInWithEmailPassword = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                setError("")
            })
            .catch((error) => {
                setError("Enter your valid email password")
            })
            .finally(() => {
                setIsLoading(false)
            });



    }

    const registerWithEmailPassword = (email, password) => {

        if (!/[A-Z]/.test(password)) {
            setError("you should have at least one character uppercase password")
            return
        }
        if (!/[0-9]/.test(password)) {
            setError("you should have at least one Number password")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                setError("")

                sendEmailVerification(auth.currentUser)
                    .then(() => {

                    });
                alert("please verify your email")

            })
            .catch((error) => {
                setError(error.message
                )
            })
            .finally(() => {
                setIsLoading(false)
            });

    }


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }
    return {
        error, user, logOut, handleGoogleSignIn, signInWithEmailPassword, registerWithEmailPassword, handleFacebookSignIn, isLoading, resetPassword
    }
};

export default useFirebase;