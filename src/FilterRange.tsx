export default function FilterRange({maxPrice, setMaxPrice}){
    return(
    <div>
        <label htmlFor='price'>Price</label>
        <input type='range' id='price'
         min={0} max={1000} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}/>
    </div>
    )
}