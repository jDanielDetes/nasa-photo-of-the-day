import React, {useState, useEffect} from 'react'
import axios from "axios"
import MainImgHolder from "./MainImgHolder"


export default function ImageData() {
    const[images,setImages] = useState([])

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=aVbY5Nw2H3iukqybnnYA8ejf8ut7h6XwUr3Tfn0i`)
    
    .then(response =>{
        console.log(response)
        setImages(response.data)
    })
    .catch(error => {
        console.log("the data was not returned", error)
    })
},[])

    return (
        <div>
            
           

                    <MainImgHolder
                    title={images.title}
                    date={images.date}
                    url={images.url}
                    explanation={images.explanation}
                    />
                
            
        </div>
    )
            
}

