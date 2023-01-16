import axios from 'axios';
import React , {useState,useEffect} from 'react'
import "./App.css";


const App = () => {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [data,setData] = useState({})
const [inputCity,setInputCity] = useState("")

    const getWhetherDetails = (cityName) =>{
      if (!cityName) return
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" + apiKey
      axios.get(apiUrl).then((res) =>{
        console.log("response",res.data)
        setData(res.data)
      }).catch((err) =>{
        console.log("err",err)
      })
    }


const handleClick = () =>{
  getWhetherDetails(inputCity)
}

const handlechangeInput= (e) =>{
setInputCity(e.target.value)
}


  return (
    <div className='col-md-12'>
      <div className='wether-bg'>
        <h1 className='heading'>Whether App</h1>

        <div className='d-grid gap-3 col-4 mt-4'>
        <input  type="text" className='form-control'
        value = {inputCity} onChange={handlechangeInput}/>
        <button className='btn btn-primary' type='button' onClick={handleClick} >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
      <div className='col-md-12 text-center mt-5'>
        <div className='shadow rounded wetherresultbox'>
          <img className='icon' src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' alt="img" />
          <h5 className='whethercity'>{data?.name}</h5>
          <h6 className='temp'>{((data?.main?.temp) - 273.15).toFixed(2)} °C </h6>
        </div>
      </div>
}
    </div>
  )
}

export default App
