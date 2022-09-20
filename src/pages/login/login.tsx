import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { FormFields, rules } from "../../Global/constants";
import {routes} from "../../Global/routes"
import {alertMessages} from "../../Global/constants"

export default function Login() {
  let navigate = useNavigate();
  const [registeredDetails, setregisteredDetails] = useState(Object);
  // let registeredDetails:any=[];

  useEffect(() => {
    let objectData: any = localStorage.getItem("registration");
    setregisteredDetails(JSON.parse(objectData));
  }, []);

  const onFinish = (value: any) => {
    if(registeredDetails==null){
      message.error(alertMessages.login.error);
      return;
    }
    if (
      registeredDetails.email === value.email &&
      registeredDetails.password === value.password
    ) {
      message.success(alertMessages.login.success);
      localStorage.setItem('loginDetails',JSON.stringify(registeredDetails))
      navigate(routes.home.path);
    } else {
      message.error(alertMessages.login.error);
      return;
    }
  };
  return (
    <div className="login">
      <div className="login-name">
        <h3>Login</h3>
      </div>
      <div className="form">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label={FormFields.email.labelEmail}
            name={FormFields.email.nameEmail}
            rules={rules.email}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={FormFields.password.labelPassword}
            name={FormFields.password.namePassword}
            rules={rules.password}
          >
            <Input.Password />
          </Form.Item>
          <p style={{paddingLeft:"6rem"}}>
            Don't have an account?<Link to={routes.register.path}> Sign up</Link>
          </p>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
