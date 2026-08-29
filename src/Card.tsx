import { useState } from "react";
import styles from "./Card.module.scss"

type CardProps = {
    imgSrc : string
    productName : string
    price : number
}

export default function Card({imgSrc, productName, price}: CardProps){
    const [comprado, setComprado] = useState(false)

    const text = comprado ? 'Adquirido' : 'Añadir al carrito'

    const handleClick = () => {
        setComprado(!comprado)
    }

    return(
        <article className={styles.container}>
            <img src={imgSrc} alt={productName} className={styles.productImage}/>
            <h2 className={styles.productTitle}>{productName}</h2>
            <span className="product-price">{price}€</span>
            <button className={styles.productButton} onClick={handleClick}>{text}</button>
        </article>
    )
}