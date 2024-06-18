import React,{useState} from 'react';
import {Link} from "react-router-dom";
export default function GetData() {
    const [data,setData] = useState({
        title:"",
        description:"",
        status:"",
    })
    const onSubmitHandler = async(e) =>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/createList",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({
          title:data.title,
          description:data.description,
          status:data.status
        })
    })
    const data1 = await response.json();
    console.log(data1);
    if (!data1.success) {
      alert("Data is Incorrect");
    }
    }
    const onChangeHandler = (e) =>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const myStyle = {
      display:"flex",
      justifyContent:"center",
      paddingTop:"8%",
    }
    const myStyle1 = {
      height:"100vh",
      backgroundImage:"url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
  return (
    <div style={myStyle1}>
    <div style={myStyle}>
    <div style={{height:"500px",width:"600px",display:"flex",flexDirection:'column',border:"1px solid black",alignItems:"center",background: "rgb(238,174,202)",
      background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(33,115,213,1) 100%)"}}>
      <h1 style={{margin:"10px"}}>Add Your Task</h1>
      <form style={{margin:"10px"}} onSubmit={onSubmitHandler}>
        <div className='d-flex flex-column' style={{width:"450px" , margin:"15px"}}>
          <label style={{fontSize:"20px"}}>Title</label>
          <input type='text' name='title' value={data.title} onChange={onChangeHandler} style={{borderRadius:"5px",padding:"5px"}} placeholder='Enter here...'  />
        </div>
        <div className='d-flex flex-column' style={{width:"450px" , margin:"15px"}}>
          <label style={{fontSize:"20px"}}>Description</label>
          <textarea type="text" name='description' onChange={onChangeHandler} value={data.description} style={{borderRadius:"5px",padding:"5px"}} placeholder='Enter here...'></textarea>
        </div>
        <div className='d-flex flex-column' style={{width:"450px" , margin:"15px"}}>
          <label style={{fontSize:"20px"}}>Status</label>
          <select name='status' value={data.status}  onChange={onChangeHandler} style={{borderRadius:"5px",padding:"7px"}}>
            <option>Pending</option>
            <option>Complete</option>
          </select>
        </div>
        <div>
          <button type='submit' style={{width:"450px" , margin:"15px",padding:"5px",borderRadius:"5px",backgroundColor:"green",color:"white",fontSize:"20px"}}>Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}
