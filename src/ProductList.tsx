import styles from "./ProductList.module.scss"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface Props {
  products: Product[]
  isLoading: boolean
}

// Recibe los productos ya filtrados, no sabe nada del filtro ni del fetch
// Si products está vacío, es porque el filtro no encontró coincidencias
export default function ProductList({ products, isLoading }: Props) {
  if (isLoading) return <p>Cargando...</p>

  return (
    <div>
      <ul className={styles.productList}>
        {products.map(producto => (
          <li key={producto.id} className={styles.productCard}>
            <img src={producto.image} alt={producto.description} />
            <h2 className={styles.productTitle}><strong>{producto.title}</strong></h2>
            <span className={styles.productPrice}>{producto.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}