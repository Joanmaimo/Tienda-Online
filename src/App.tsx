import { useState, useEffect } from "react"
import Filters from "./Filters"
import ProductList from "./ProductList"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

// Estado centralizado aquí porque tanto Filters como ProductList lo necesitan
function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // El fetch está en App (no en ProductList) para poder filtrar antes de renderizar
  useEffect(() => {
    async function fetchData() { 
      try {
        const response = await fetch('https://fakestoreapi.com/products') //Obtenemos una respuesta que devuelve una promsa
        const result = await response.json()
        setProducts(result)
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

//Filtrado de productos, se recalcula automáticamente cada vez que cambia searchTerm o products
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={filteredProducts} isLoading={isLoading} />
    </div>
  )
}

export default App