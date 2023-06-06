import './App.css';
// import { useEffect,useState } from 'react';
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_Login from './Admin/Admin_Login/Admin_Login';
import Vendor from './Admin/Vendor/Vendor';
import Catagory from './Admin/Catagory/Catagory';
function App() {
  
  // const [data,setData] = useState("");
  // useEffect(()=>{
  //   const getData =async ()=>{
  //     const res = await axios?.get("http://localhost:5000/getdata");
  //     const d = JSON.stringify(res?.data);
  //     setData(d);
  //     console.log(res.data);
  //   }
  //   getData();
  // },[])


  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route path="/admin" element={<Admin_Login/>} />
       <Route path="/vendor" element={<Vendor/>} />
       <Route path="/catagory" element={<Catagory/>} />
       </Routes>

       </BrowserRouter>
        
    </>
  );
}

export default App;
