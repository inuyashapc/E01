// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router-dom';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Firebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBLVvrvZ9MqlHQ4k0yZNtGd9jmvDvycXpw",
        authDomain: "levion-duyanh.firebaseapp.com",
        projectId: "levion-duyanh",
        storageBucket: "levion-duyanh.appspot.com",
        messagingSenderId: "247446670734",
        appId: "1:247446670734:web:7588e54c53acfb1ab9e8df",
        measurementId: "G-679GQ423Q8"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    // signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         console.log("🚀 ========= credential:", credential)
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         // IdP data available using getAdditionalUserInfo(result)
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     });
    const signinwithredirect = () => {
        signInWithRedirect(auth, provider);
    }
    function Redirect() {
        window.location = "/home";
    }
    let ketqua = null;
    const resultOfRedirect = async () => {
        return await (
            getRedirectResult(auth)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    console.log("🚀 ========= credential:", credential)
                    const token = credential.accessToken;
                    console.log("🚀 ========= token:", token)
                    // The signed-in user info.
                    const user = result.user;
                    ketqua = result.user
                    Redirect()
                    console.log("🚀 ========= user:", user)
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                    sessionStorage.setItem('user', JSON.stringify(result.user));

                    return user
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    // const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                })
        )
    }
    sessionStorage.setItem("data", resultOfRedirect());
    const [user, setUser] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await resultOfRedirect();
                setUser(result);
            } catch (error) {
                // Xử lý lỗi tại đây
            }
        };

        fetchData();
    }, []);
    const logOut = () => {
        
        // signOut(auth).then(() => {
        //     // Sign-out successful.
        // }).catch((error) => {
        //     // An error happened.
        // });
    }

    return {
        signinwithredirect,
        resultOfRedirect,
        user,
        logOut
    }
}
export default Firebase