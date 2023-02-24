import React from 'react'
import { useCart } from 'react-use-cart';

export default function ItemCard({ el, price, title, img }) {
    const { addItem } = useCart()

    return (
        <div className="card-container ">
            <div className="card-row">
                <div className='card'>
                    <img className='card-images' src={img} alt="" />
                    <div className="card-txt">
                        <p className='price'>
                            {price}$
                        </p>
                        <span>
                            {title}
                        </span>

                        <button onClick={() => addItem(el)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
