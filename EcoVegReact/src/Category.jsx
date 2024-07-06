import React from "react";
import './Category.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Category = () => {
    const[Category,SetCategory]=useState([]);
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/categories/')
      .then(response => {
        SetCategory(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
    },[])

    return (
        <>
            <div className="carousel-container">
                <div className="carousel">
                {Category.map((e=>
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src={e.Image} alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>{e.Category}</p>
                        </div>
                    </div>
                    ))}                  


                </div>
            </div>
        </>
    )
}
export default Category