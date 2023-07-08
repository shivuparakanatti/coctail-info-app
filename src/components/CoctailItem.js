import React ,{useState,useEffect} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const CoctailItem =()=>{

    const [allCoctails,setAllCoctails] = useState([])
   //const allCoctails = []

   useEffect(()=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(res=>{
       // console.log(res.data)
      // allCoctails.push(res.data.drinks)
       
   setAllCoctails(res.data.drinks)
      
   })
    .catch(err=>{
        alert(err)
    })

   },[])

   const handleDetails=(id)=>{
    console.log(id)
   }

  
 
    return (
        <div className="allItems">
          
            
                {
                    allCoctails.map(ele=>{
                   return (
                        <div className="singleItem">
                            <img src={ele.strDrinkThumb}/>
                            <h2>{ele.strDrink}</h2>
                            <h3>{ele.strAlcoholic}</h3>
                            <button onClick={()=>{handleDetails(ele.idDrink)}}><Link to={`/${ele.idDrink}`}>Details</Link></button>
                             </div>
                        )
                    })
                    
                }
           
        </div>
    )
}

export default CoctailItem