import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./context/AuthContext"
import { Link } from "react-router-dom"
import './Login.css';
import LOGOS from './LOGO.png';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-20 login__signInButton" type="submit">
              Reset Password
            </Button>
            <div className="w-20 text-center mt-3">
              <Link to="/Login">Login To Dashboard</Link>
          </div>

            <div className="w-20 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
          </Form>
         
        </Card.Body>
      </Card>
      
   </div>
   </div>
  )
}
