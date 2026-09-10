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
  const [maxPrice, setMaxPrice] = useState(1000)

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
  const filteredProductsSearch = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) //El titulo coincide con lo escrito
    && product.price <= maxPrice //El precio es menor o igual que el seleccionado
  )


  return (
    <div>
      <Filters searchTerm={searchTerm}
       setSearchTerm={setSearchTerm} 
       maxPrice={maxPrice}
       setMaxPrice={setMaxPrice}
       />
      <ProductList products={filteredProductsSearch} isLoading={isLoading} />
    </div>
  )
}

export default App