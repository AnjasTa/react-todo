import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import {routes} from "../Global/routes"
import {message,Popconfirm} from 'antd'
import { QqOutlined } from "@ant-design/icons";
import {alertMessages} from "../Global/constants"
export default function Navbar() {
  let navigate = useNavigate();
  const logout = () => {
    navigate(routes.login.path);
    localStorage.removeItem('loginDetails');
    message.success("Logged out successfully...")
  };
  return (
    <div className="header">
      <div className="title"><QqOutlined /> My App</div>
      <Link to={routes.home.path} className="crud">Home</Link>
      <Link to={routes.crud.path} className="crud">CRUD</Link>
      <Popconfirm title={alertMessages.warn.logout} onConfirm={logout}>
      <div  className="logout">Logout</div>
    </Popconfirm>
    </div>
  );
}
