import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Navbar from "../../components/navbar";

export default function Home() {
  const [loginDetails,setloginDetails] = useState(Object)

  useEffect(() => {
    let objectData: any = localStorage.getItem("loginDetails");
    setloginDetails(JSON.parse(objectData));
  }, []);
 
  return (
    <div>
      <Navbar/>
      <div className="home">
        <h1>Welcome</h1> 
       
      </div>
      <div className="userData">
        <h3>{loginDetails.firstname} {loginDetails.lastname}</h3>
      </div>
      <div className="userData">
        <h3>Email : {loginDetails.email}</h3>
      </div>
      <div className="userData">
        <h3>Phone Number : {loginDetails.phonenumber}</h3>
      </div>
    </div>
  );
}
