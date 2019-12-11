import React, {useState, useEffect} from 'react'
import axios from "axios"
import MainImgHolder from "./MainImgHolder"


export default function ImageData() {
    const[images,setImages] = useState([])

    useEffect(() =>{
        axios.get(``)
    })

    return (
        <div>
            
        </div>
    )
}
