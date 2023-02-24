import React from 'react'
import { useCart } from 'react-use-cart';

export default function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()

    if (isEmpty) return <h1 className='empty'> Your cart is empty </h1>

    return (
        <div>
            <div className='container'>
                <div className="cart-top">
                    <h5>
                        Cart ({totalUniqueItems})
                        total Items: ({totalItems})
                    </h5>
                </div>
                <div className="card-area">
                    {
                        items.map((el, idx) => {
                            return (
                                <div className='card-content' key={idx}>
                                    <img src={el.img} alt="" />
                                    <span>{el.title}</span>
                                    <span>{el.price}$</span>
                                    <span>Quantity ({el.quantity})</span>
                                    <div className='btns'>
                                        <button onClick={() => updateItemQuantity(el.id, el.quantity - 1)} className='minus'><i className="fa-solid fa-minus"></i></button>
                                        <button onClick={() => updateItemQuantity(el.id, el.quantity + 1)} className='plus'><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    <div>
                                        <button onClick={() => removeItem(el.id)} className='remove'>Remove Item</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bottom">
                <p className="total">
                    Total Price: {cartTotal}$
                </p>
                <div className="btn-bottom">
                    <button className='clear' onClick={() => emptyCart()}>
                        Clear Cart
                    </button>
                    <button className='buy'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
