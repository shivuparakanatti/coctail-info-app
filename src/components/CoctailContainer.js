import CoctailItem from "./CoctailItem"
import react from'react'
import { Link } from "react-router-dom"

const CoctailContainer =(props)=>{
    return (
        <div>
    
        <div className="ItemContainer">
                <input type={'search'} placeholder='Search for your coctail' />
                <h1>Coctails</h1>
                <CoctailItem/>
            </div>
        </div>
    )
}

export default CoctailContainer