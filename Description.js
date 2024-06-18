import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function () {
    const [data,setData] = useState({});
    const {id} = useParams();
    console.log(id);
    const fetchData = async() =>{
        const response = await fetch(`http://localhost:5000/api/description/${id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        let result = await response.json();
        console.log(result);
        setData(result);
    }
    useEffect(()=>{
    fetchData();
    },[])
  return (
    <div>
        <div>
            <h1>{data.title}</h1>
            <h4>{data.description}</h4>
        </div>
    </div>
)
}
