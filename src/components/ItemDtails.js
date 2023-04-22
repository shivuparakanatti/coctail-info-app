import React ,{useState,useEffect}from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemDetails = (props)=>{
    const {id} =useParams()

    const [singleItem, setSingleItem] =useState([])

    const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

    useEffect(()=>{
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>{
            console.log(res.data.drinks)
          // allCoctails.push(res.data.drinks)
           setSingleItem(res.data.drinks)
        })
        .catch(err=>{
            alert(err)
        })
    
       },[])

      

       

       
    return (

   <div>

       {singleItem.map(ele=>{
       // console.log(ele.isDrink)
        return (
            <div className="singleDrinkContainer">
                <h1>{ele.strDrink}</h1>
                <div className="singleDrinkDetails">
                <img src={ele.strDrinkThumb}/>
                <div>

                <h2>TYPE : {ele.strAlcoholic}</h2>
                <h2>{ele.strGlass}</h2>
                <p>Ingradiants : {ele.strIngredient1},{ele.strIngredient2}</p>
                <p>Instructions : {ele.strInstructions} </p>
                </div>

                </div>
            </div>

        )
       })}
   </div>
        
    
    )
    

}

export default ItemDetails