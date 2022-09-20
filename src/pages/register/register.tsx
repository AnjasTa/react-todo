import React from "react";
import { Button, Form, Input, message } from "antd";
import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { FormFields, rules } from "../../Global/constants";
import {routes} from "../../Global/routes"
import {alertMessages} from "../../Global/constants"
export default function Register() {
  let navigate = useNavigate();
  const onFinish = (formValues: any) => {
    localStorage.setItem("registration", JSON.stringify(formValues));
    message.success(alertMessages.registration.success);
    navigate(routes.login.path);
  };
  return (
    <div className="login">
      <div className="login-name">
        <h3>Register</h3>
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
            label={FormFields.firstName.labelFirstName}
            name={FormFields.firstName.nameFirstName}
            rules={rules.firstName}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={FormFields.lastName.labelLastName}
            name={FormFields.lastName.nameLastName}
            rules={rules.lastName}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={FormFields.email.labelEmail}
            name={FormFields.email.nameEmail}
            rules={rules.email}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={FormFields.phoneNumber.labelPhoneNumber}
            name={FormFields.phoneNumber.namePhoneNumber}
            rules={rules.phoneNumber}
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
            go back to Login?<Link to={routes.login.path}> Sign in</Link>
          </p>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
