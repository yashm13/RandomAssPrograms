  import { useState } from "react"



  function App() {
    const [formdata,setFormData] = useState({
      name: '',
      contact: '',
      email: '',
      address: '',
    })
    
    function handleChange(e){
       const {name,value} = e.target;
       setFormData({...formdata ,[name]:value })
    }

    function handleSubmit(e){
      e.preventDefault() ;
      if(formdata.name === '' || formdata.address === '' || formdata.email === '' | formdata.contact === '' ){
        
        return
      }else{
        alert( 'Form Sumbitted ')
      }

      
    }

  
    return (
      <div>
          <form onSubmit={handleSubmit} >
            <div>
              <label> Name* </label>
              <input name='name' value={formdata.name} onChange={handleChange} />
              <hr></hr>
            </div>
            
            <div>
              <label> Email* </label>
              <input name='email' value={formdata.email} onChange={handleChange} />
              <hr></hr>
            </div>

            <div>
              <label> Contact* </label>
              <input name='contact' value={formdata.contact} onChange={handleChange} />
              <hr></hr>
            </div>

            <div>
              <label> Address*</label>
              <input name='address' value={formdata.addresss} onChange={handleChange} />
              <hr></hr>
            </div>
            
            <div>
              <button type='submit'> Submit </button>
            </div>
          </form>
      </div>
    )
  }

  export default App
