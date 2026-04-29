import React from 'react'
import{useState , useEffect} from 'react'

const Ap = () => {
    const [data , setData] = useState([]);

    const getData = async()=>{
        try{
            const a = await fetch("https://dummyjson.com/posts");
            const b = await a.json();
            console.log(b.posts);
            setData(b.posts);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>

        {data.map((each)=>(
        <div key={each.id}>
            <h1>{each.title}</h1>
            <h2>{each.id}</h2>
            <h3>{each.tags.map((item)=>
            <h5>{item}</h5>
            )}</h3>
            <p>{each.body}</p>
            </div>
        ))}
        {/* {}  When we deal with Variable we use this curly braces in react and when we want to write some logic in jsx then also we use this curly braces in react. */}
    </div>
  )
}

export default Ap