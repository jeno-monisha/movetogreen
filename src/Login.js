import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./context/AuthContext"
import { Link, useNavigate} from "react-router-dom"
import './Login.css';
import LOGOS from './LOGO.png';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history("/Dashboard")
    } catch {
      setError("Failed to log in password or email incorrect")
    }

    setLoading(false)
  }

  return (
    <div className='login'>
          
         <div className='login__container'>
         <Link to='/'>
          <img className="login__logo" src={LOGOS} />
          </Link>
      <Card className="container">
        <Card.Body>
        <h1 className='change_font'>LOGIN</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-20 login__signInButton" type="submit">
              Log In
            </Button>
          
          <div className="w-100 text-center val  mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
           <div>Need an account? <Link to="/Signup">Sign Up</Link></div>
          </div>

        
          </Form>
        
      
      </Card.Body>
      </Card>
      
      
    </div>
    
    </div>
   
  )
}
