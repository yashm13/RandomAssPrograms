import { useState } from "react"

function App() {
  const  [Joke,setJoke] = useState(null)
  
  async function fetchJoke()  {
      try{
          const res = await fetch("https://v2.jokeapi.dev/joke/Any") 
          const data = await res.json()
          if(data.type === 'single'){
            setJoke(data.single)
          }else{
            setJoke(data.setup + data.delivery)  
          }          

      }catch(e){
        console.log(e)
      }
  }

  return (
    <div>
  <div>
    <h1> Jokes Generator </h1>
    <button onClick={fetchJoke}> Click Here to Generate a Joke </button>
  </div>

   <div>
    {Joke} 
  </div>
</div>
  )
}

export default App
