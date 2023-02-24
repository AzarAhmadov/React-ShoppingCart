import React from 'react'
import ItemCard from './ItemCard'
import { data } from '../data/data';

export default function Home() {
    return (
        <div className="itemCards">
            {
                data.productData.map((el, idx) => {
                    return (
                        <ItemCard
                            key={idx}
                            el={el}
                            img={el.img}
                            price={el.price}
                            title={el.title}
                            decs={el.decs} />
                    )
                })
            }
        </div>
    )
}
