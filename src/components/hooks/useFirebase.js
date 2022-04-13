import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebase.init";

const useFirebase = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            }
        });

    }, []);

    const singnInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user);
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
        setUser({})
    }

    return { handleSignOut, singnInWithGoogle, user }
}
export default useFirebase;
