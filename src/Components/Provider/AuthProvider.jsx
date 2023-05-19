import  { createContext, useEffect, useState } from 'react';
import { getItems } from '../Tools/Tools';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';



export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart,setCart] = useState([])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    
    const cartProductsLoader = async () => {
        // if cart data is in database, you have to use async await
        const storedCart = getItems();
        const ids = Object.keys(storedCart);
        
        const loadedProducts = await fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        });
    
        const products = await loadedProducts.json();
    
       
    
        const savedCart = [];
    
        for (const id in storedCart) {
            
            const addedProduct = products.find(pd => pd._id === id);
        
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
    
        
    
        return savedCart
    }
    
    const authInfo = {
        cartProductsLoader,
        createUser,
        signIn,
        logOut,
        loading,
        user,
        auth,
        cart,
        setCart
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;