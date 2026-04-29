import React from 'react'
import{useState , useEffect} from 'react'

const Ap1 = () => {
    const [data , setData] = useState([]);

    const getData = async()=>{
        try{
            const a = await fetch("https://dummyjson.com/recipes");
            const b = await a.json();
            console.log(b.recipes);
            setData(b.recipes);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div>

        {data.map((each)=>(
        <div key={each.id}>
            <ol>
                {each.instructions.map((item)=>
                <li>{item}</li>)}
            </ol>
            <ul>
                {each.ingredients.map((item)=>
                <li>{item}</li>)}
            </ul>
            <img src= {each.image} height="150"/>
            {/* <h3>{each.map((item)=>
            <ul>{each.ingredients}</ul>
            )}</h3> */}
            </div>
        ))}
        {/* {}  When we deal with Variable we use this curly braces in react and when we want to write some logic in jsx then also we use this curly braces in react. */}
    </div>
  )
}

export default Ap1