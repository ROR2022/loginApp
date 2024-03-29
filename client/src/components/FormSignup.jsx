import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { signupUser } from '../api/apiUsers';
import MainModal from './MainModal';
import { useState } from 'react';
import { Spinner} from 'react-bootstrap';


const initDataFormUser = {
    email: "",
    password: "",
    repeatedPassword: "",
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    address01: "",
    address02: "",
    country: "",
    state: "",
    pinCode: "",
    tyc: false,
  };

const FormSignup = ({setSignup}) => {
    const { Formik } = formik;
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email("Correo Invalido").required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    password: yup.string().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/),
    repeatedPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    companyName: yup.string().required(),
    phoneNumber: yup.string().required().matches(/^[0-9]{10}$/),
    address01: yup.string().required(),
    address02: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    pinCode: yup.string().required().matches(/^[0-9]{6}$/),
    tyc: yup.bool().required().oneOf([true], 'T&C must be accepted'),
  });
  const handleSignup = async (values) => {
    //console.log(values);
    try {
        setLoading(true);
        const result = await signupUser(values);
        console.log(result);
        if(result.status === 201){
            setSuccess(true);
            setShowModal(true);
        }
        else{
            setSuccess(false);
            setShowModal(true);
        }
        setLoading(false);
    } catch (error) {
        console.log(error);
        setSuccess(false);
        setShowModal(true);
        setLoading(false);
    }
  }
  return (
    <div>
        <h1 className='text-center'>SIGN UP</h1>
        <div className='card my-3 p-3'>
        <Formik
    validationSchema={schema}
    onSubmit={handleSignup}
    initialValues={initDataFormUser}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type='invalid'>
                {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={!!errors.lastName}
            />

            <Form.Control.Feedback type='invalid'>
                {errors.lastName}
                </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik08">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik09">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="repeatedPassword"
              value={values.repeatedPassword}
              onChange={handleChange}
              isValid={touched.repeatedPassword && !errors.repeatedPassword}
              isInvalid={!!errors.repeatedPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.repeatedPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik03">
            <Form.Label>Country</Form.Label>
            <Form.Select
                name="country"
                value={values.country}
                onChange={handleChange}
                isValid={touched.country && !errors.country}
                isInvalid={!!errors.country}
            >
                <option value="">Select Country</option>
                <option value="MX">México</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              value={values.state}
              onChange={handleChange}
                isValid={touched.state && !errors.state}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid">
              {errors.state}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik05">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pin Code"
              name="pinCode"
              value={values.pinCode}
              onChange={handleChange}
                isValid={touched.pinCode && !errors.pinCode}
              isInvalid={!!errors.pinCode}
            />

            <Form.Control.Feedback type="invalid">
              {errors.pinCode}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik10">
                <Form.Label>Address 01</Form.Label>
                <Form.Control
                type="text" 
                placeholder="Address 01"
                name="address01"
                value={values.address01}
                onChange={handleChange}
                isValid={touched.address01 && !errors.address01}
                isInvalid={!!errors.address01}
                />

                <Form.Control.Feedback type="invalid">
                {errors.address01}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik11">
                <Form.Label>Address 02</Form.Label>
                <Form.Control
                type="text"
                placeholder="Address 02"
                name="address02"
                value={values.address02}
                onChange={handleChange}
                isValid={touched.address02 && !errors.address02}
                isInvalid={!!errors.address02}
                />

                <Form.Control.Feedback type="invalid">
                {errors.address02}
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik06">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
                isValid={touched.companyName && !errors.companyName}
                isInvalid={!!errors.companyName}
                />
    
                <Form.Control.Feedback type="invalid">
                {errors.companyName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik07">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                isValid={touched.phoneNumber && !errors.phoneNumber}
                isInvalid={!!errors.phoneNumber}
                />
    
                <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        

        <Form.Group className="mb-3">
          <Form.Check
            required
            name="tyc"
            label="Agree to terms and conditions"
            onChange={handleChange}
            isValid={touched.tyc && !errors.tyc}
            isInvalid={!!errors.tyc}
            feedback={errors.tyc}
            feedbackType="invalid"
            id="validationFormik0"
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
                {errors.tyc}
                </Form.Control.Feedback>

        <Button type="submit">
            {loading && <Spinner animation="border" role="status" size="sm" />}
            {!loading && <span>Sign Up</span>}
        </Button>
        <div className="btn btn-link d-block text-start" onClick={()=>setSignup(false)}>Already Registered?</div>
      </Form>
    )}
  </Formik>
  </div>
  {showModal&&success && <MainModal dataModal={{showModal, setShowModal, title:'Success', text: 'User Registered Successfully', severity: 'success'}}/>}
    {showModal&&!success && <MainModal dataModal={{showModal, setShowModal, title:'Error', text: 'User Registration Failed', severity: 'danger'}}/>}

  </div>
  )
}

export default FormSignup