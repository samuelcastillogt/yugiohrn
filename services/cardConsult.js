import axios from "axios"
const getData = async(id)=>{
    try{
       const response = await axios.get("http://192.168.0.14:5000/card/" + id)
        return response.data  
    }catch(err){console.log(err)}
   
}
export default getData