import  { createContext } from 'react';
import { getItems } from '../Tools/Tools';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    
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
        cartProductsLoader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;