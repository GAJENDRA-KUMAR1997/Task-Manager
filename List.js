import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function List() {
    const [data,setData] = useState([]);
    const fetchData = async() =>{
        const response = await fetch("http://localhost:5000/api/getList",{
            method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
        })
        let result = await response.json();
        console.log(result);
        setData(result);
    }
    const onClickHandler = async(e) =>{
      let id = e.target.value;
      e.preventDefault();
      console.log(id);
      const response = await fetch(`http://localhost:5000/api/delete/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
      }
      });
      const data1 = await response.json();
      console.log(data1);
    }
    useEffect(()=>{
        fetchData()
    },[])
    const Style={
      background: "rgb(238,174,202)",
      background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(33,115,213,1) 100%)",
      height:"100vh"
    }
  return (
    <div style={Style}>
        <div>
            <h1 style={{textAlign:"center"}}>My Complete Task List</h1>
    <div style={{marginTop:"50px",marginLeft:"20px",marginRight:"10px"}}>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
      <th scope="col">CreatedAt</th>
      <th scope="col" >Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(item=>(
            <tr>
      <th scope="row">1</th>
      <td><Link to={`/description/${item._id}`}>{item.title}</Link></td>
      <td>{item.status}</td>
      <td>{item.createdAt}</td>
      <td><Link to={`/updateList/${item._id}`} value={item._id}><button >Update</button></Link></td>
      <td><button value={item._id} onClick={onClickHandler}>Delete</button></td>
    </tr>
        ))
    }
  </tbody>
</table>
    </div>
    </div>
    <button style={{width:"200px",height:"50px",marginLeft:"40%",backgroundColor:"green"}}><Link to="/addList" style={{color:"white",textDecoration:"none"}}>Add New Task</Link></button>
    </div>
  )
}
