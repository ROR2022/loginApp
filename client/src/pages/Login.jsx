import { useState } from "react"
import FormLogin from "../components/FormLogin"
import FormSignup from "../components/FormSignup"
import MainFooter from "../components/MainFooter"
import MainNavbar from "../components/MainNavbar"


const initDataUser = {
    email: '',
    password: '',
    isLogged: false
}

const Login = () => {
    const [dataUser, setDataUser] = useState(initDataUser)
    const [error, setError] = useState(null)
    const [dataLogin, setDataLogin] = useState(null)
    const [signup, setSignup] = useState(false)
  return (
    <>
    <MainNavbar />
    <div style={{minHeight:'70vh'}}>
        
        {signup ? <FormSignup setSignup={setSignup}/> : <FormLogin setSignup={setSignup}/>}
        
        
        </div>
        <MainFooter />
        </>
  )
}

export default Login