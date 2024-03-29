import  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Spinner } from "react-bootstrap";
import PropTypes from 'prop-types';
import MainModal from "./MainModal";
//import axios from "axios";
import { loginUser } from "../api/apiUsers";
//import { set } from "mongoose";
import { Link } from "react-router-dom";


const initDataFormUser = {
  email: "",
  password: "",
};

const FormLogin = ({setSignup}) => {
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
  const { Formik } = formik;

  const schema = yup.object().shape({
    
    email: yup.string().email("Invalid Email").required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    password: yup.string().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/),
    
  });
  const handleSignup = () => {
    console.log("Signup");
    setSignup(true);
  }
  const handleLogin = async (values) => {
    try {
        setLoading(true);
        const response = await loginUser(values);
        console.log(response);
        //console.log('status:...',response.response.status);
        if(response.status === 200) {
            setSuccess(true);
            setShowModal(true);
            
        } else {
            setShowModal(true);
            setSuccess(false);
            setError(response.response.data.message);
        }
        setLoading(false);
    } catch (error) {
        console.error(`Error in handleLogin: ${error}`);     
        setLoading(false);
        setShowModal(true);
        setSuccess(false);  
    }
}

  return (
    <div>
      <h1 className="text-center my-3">LOGIN</h1>
      <div className="card me-auto ms-auto py-2 px-4 mb-3 w-75 ">
      <Formik
      
    validationSchema={schema}
    onSubmit={handleLogin}
    initialValues={initDataFormUser}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}  controlId="validationFormikUseremail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}  controlId="validationFormikPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="passsword"   
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />

            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="d-flex flex-column justify-content-center align-items-start gap-2">
            <Link to="/forgotpass" className="btn btn-link">Forgot Password ??</Link>
        
        <Button type="submit">
            {loading && <Spinner animation="border" role="status"/>}
            {!loading && <span>Login</span>}
            
            </Button>
        <Button type="button" className="btn btn-light" onClick={handleSignup}>Create / SignUP</Button>
        </div>
      </Form>
    )}
  </Formik>
  </div>
  {showModal&&success&&<MainModal dataModal={{showModal, setShowModal, title: "Success", text: "Login Success", severity: "success"}}/>}
    {showModal&&!success&&<MainModal dataModal={{showModal, setShowModal, title: "Error", text: `Login Error ${error}`, severity: "danger"}}/>}
    </div>
  );
};

FormLogin.propTypes = {
    setSignup: PropTypes.func.isRequired
    }

export default FormLogin;
