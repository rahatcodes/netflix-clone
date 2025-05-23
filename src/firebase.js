import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { 
    addDoc, 
    collection,
    getFirestore 
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDOxIGX99hUCCxxWDuIiAAzC2sr8_6qyhI",
  authDomain: "netflix-clone-rahatdev.firebaseapp.com",
  projectId: "netflix-clone-rahatdev",
  storageBucket: "netflix-clone-rahatdev.firebasestorage.app",
  messagingSenderId: "344538143530",
  appId: "1:344538143530:web:5e023ed8589c17deb0dc53",
  measurementId: "G-JP5MYPFKSS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error.message);
        toast.error(error.code.split("/")[1].replace(/-/g, " "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        
        console.log(error.message);
        toast.error(error.code.split("/")[1].replace(/-/g, " "));

    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };