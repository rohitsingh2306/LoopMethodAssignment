import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { context } from './Context';
import { Link } from "react-router-dom";
import './style.css'

//   This Component will display the Details of the single item selected.
const Product = () => {
    const { productId } = useParams()
    const { id, carts, setCarts, cartNumber, setCartNumber } = useContext(context)

    //    This function  will add the items in the Cart and also increase the Count of the Cart items.
    const setans = (id) => {
        setCarts([...carts, id])
        setCartNumber(carts.length + 1)
    }

    return (
        <div className='singleProduct'>
            <img className='singleImage' src={`${id.image}`} />
            <div className='title'>{id.title}</div>
            <div><span className='bold'>Description:-</span> {id.description}</div>
            <div><span className='bold'>Price:-</span> {id.price} $</div>
            <div><span className='bold'>Rating:-</span> {id.rating.rate}</div>
           <Link to="/"> <button className='addToCart' onClick={() => setans(id)}>Add to Cart</button></Link>
        </div>
    )
}

export default Product