// Componente "tonto": solo pinta el input y avisa hacia arriba cuando cambia
export default function FilterSearch({searchTerm, setSearchTerm}){
    return(
    <div className="filter-search">
        <input type="text" value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}/> 
    </div>
    )
}