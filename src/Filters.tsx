import FilterSearch from "./FilterSearch"
import FilterRange from "./FilterRange"

interface Props {
  searchTerm: string
  setSearchTerm: (value: string) => void
  maxPrice : number
  setMaxPrice : (value: number) => void
}


// Componente contenedor: agrupa todos los filtros (búsqueda, precio, etc.)
// onChange llama a setSearchTerm de App, no modifica nada local
export default function Filters({ searchTerm, setSearchTerm, maxPrice, setMaxPrice }: Props) {
  return (
    <section className='filters'>
      <FilterSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterRange maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
    </section>
  )
}