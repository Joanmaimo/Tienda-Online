import { useEffect, useState } from "react";
import styles from "./ProductList.module.scss" //Importamos los estilos del archivo scss


interface Product {
    id : number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
} //Se puede usar type o interface indistintamente

export default function ProductList(){ //Exportamos la funcion para que otro componente pueda utilizarla
    //Obtenemos los datos de la api
    const [data, setData] = useState<Product[]>([]); //Array de depenciencia vacío en los que los datos tienen que ser de tipo Producto
    const [isLoading, setIsLoading] = useState(true); //Inicialicamos el estado de carga

    useEffect (()=>{
        async function fetchData() { //Creamos una función asincrona para que el codigo se ejecute sin bloquear el hilo principal(devuelve siempre una promesa)
            try {
                const response = await fetch('https://fakestoreapi.com/products'); //Obtenemos la respuesta
                const result = await response.json(); //Guardamos el resultado de la respuesta en un json
                setData(result); //Introducimos los productos dentro del array vacio
            } catch (error) {
                console.log('Error: ', error)
            } finally{
                setIsLoading(false);
            }
        }

        fetchData();
        console.log(isLoading)
    }, [] ) //

    return(
    <div>
        <ul className={styles.productList}>
            {data.slice(0,5).map(producto => (
                <li key={producto.id} className={styles.productCard}>
                    <img src={producto.image} alt={producto.description}/>
                    <h2 className={styles.productTitle}><strong>{producto.title}</strong></h2>
                    <span className={styles.productPrice}>{producto.price}</span>
                </li>
                ))}
        </ul>
    </div>
    )
}