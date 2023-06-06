import React, { useEffect, useState } from 'react';
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import './Catagory.css';

const Admin_Login = () => {
  // let navigate = useNavigate();

  const [catagory, setCatagory] = useState('');
  const [catagory_backend, setCatagory_Backend] = useState([]);


  const showdata = async () => {
    const res = await axios.get("http://localhost:5000/addcatagory");
    let d = res.data;
    console.log(d);
    setCatagory_Backend(d);
  }
  const handleCatagory = (e) => {
    e.preventDefault();

    const data_store = async () => {

      const res = await axios?.post("http://localhost:5000/addcatagory"
        , { catagory: catagory }
      )
      // console.log(res.data);
      if (res.data) {
        alert('this catagory is already exists');
        setCatagory('');
        showdata();
      }
      else {
        setCatagory('');
        showdata();
      }
    }
    data_store();

  };

  return (<>
    <div className="login-container">
      <form onSubmit={handleCatagory} className="login-form">
        <h2>Add Catagory</h2>
        <input
          type="text"
          placeholder="Catagory"
          name='catagory'
          value={catagory}
          onChange={(e) => setCatagory(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
    <div className='cat-div'>
      {catagory_backend?.map((item) => <div>{item.catagory}</div>)}
    </div>

  </>
  );
};

export default Admin_Login;
