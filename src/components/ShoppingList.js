import React, { useState, useEffect, useContext } from 'react'
import { context } from './Context';
import axios from 'axios'
import { Link } from "react-router-dom";
import './style.css'

//    This Component is displaying all the items by fetching the Api.
function ShoppingList() {
    const { id, setId } = useContext(context);
    const [lists, setLists] = useState([]);

    //   With help of Axios Library , data is geting fetched inside the useEffect hook.
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {

                setLists(res.data);
            })
    }, [])
    //   This function is setting the params for single item routers.
    const openPage = (list) => {
        setId(list)
    }
    return (
        <div className='products'>
            {
                //  With this I am displaying all the items in Home Page.
                lists.map((list) => (
                    <div key={list.id} className='product'>
                        <img className='images' src={`${list.image}`} />
                        <div>{list.title}</div>
                        <div>{list.price}</div>
                        <div>Rating:- {list.rating.rate}</div>
                        <Link to={`/${list.id}`}><button className='detail' onClick={() => openPage(list)}>Detail</button></Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ShoppingList