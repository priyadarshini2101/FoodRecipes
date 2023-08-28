import React from "react";
import { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";

function Gal1(){

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const [search,setsearch] = useState("")
const [data,setData] = useState([]);
const handlechange = e=>{
    setsearch(e.target.value)
}  

const handlesubmit = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        setData(response.data.photos.photo)
      })
    
 
    console.log(search)
}
    return(
        <div>
            <h2>Gallery SnapShot</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" value={search} onChange={handlechange}/><br/><br/>
                <input type="submit" name="Search"/>
            </form>
            {data.length>1 ? <Gallery datak={data}/> :<h4>No Data found</h4>}
        </div>
    )
}

export default Gal1;