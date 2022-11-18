import React, { useState } from 'react'
import Footer from './Footer';
import Heading from './Heading';
import Home from './Home';


//   This Component is storing our states which we can use in other components with the help of useContext hook.

export const context = React.createContext();
function Context() {
    const [cartNumber, setCartNumber] = useState(0);
    const [id, setId] = useState({});
    const [carts, setCarts] = useState([]);
    return (
        <div>
            <context.Provider
                value={{ id, setId, carts, setCarts, cartNumber, setCartNumber }}>
            
                <Heading />
                <Home />
                <Footer />

            </context.Provider>
        </div>
    )
}

export default Context;