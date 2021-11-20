import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();



const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)

<<<<<<< HEAD
=======
    console.log(user)


>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a

    const auth = getAuth();

    const handleGoogleSignIn = () => {
<<<<<<< HEAD
        return signInWithPopup(auth, googleProvider)
=======

        return signInWithPopup(auth, googleProvider)

>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
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

<<<<<<< HEAD



    const signInWithEmailPassword = (email, password, history, url) => {
=======
    // const history = useHistory()
    // const location = useLocation()
    // const url = location?.state?.from

    const signInWithEmailPassword = (email, password) => {
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a

        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                setError("")
<<<<<<< HEAD

                history?.push(url)
=======
                window.location.reload();
                // history?.push(url)
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a


            })
            .catch((error) => {
                setError("Enter your valid email password")
            })
            .finally(() => {
                setIsLoading(false)
            });
<<<<<<< HEAD
    }


    const registerWithEmailPassword = (email, password, name, history, url) => {
=======



    }


    const registerWithEmailPassword = (email, password, name) => {
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
        setIsLoading(true)
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

<<<<<<< HEAD
                history?.push(url)

=======
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
                sendEmailVerification(auth.currentUser)
                    .then(() => {

                    });
                updateUserName(name)
                alert("please verify your email")
<<<<<<< HEAD
                // window.location.reload();

=======
                window.location.reload();
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a


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

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
<<<<<<< HEAD
            const newUser = { ...user, displayName: name }
            setUser(newUser)
=======

>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
        }).catch((error) => {
            setError(error)
        });
    }
    return {
        error, user, logOut, handleGoogleSignIn, signInWithEmailPassword, registerWithEmailPassword, handleFacebookSignIn, isLoading, resetPassword
    }
};

export default useFirebase;