import FilterSearch from "./FilterSearch"

interface Props {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

// Componente contenedor: agrupa todos los filtros (búsqueda, precio, etc.)
// onChange llama a setSearchTerm de App, no modifica nada local
export default function Filters({ searchTerm, setSearchTerm }: Props) {
  return (
    <div>
      <FilterSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  )
}