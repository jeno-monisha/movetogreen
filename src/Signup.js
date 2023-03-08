import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './Login.css';
import LOGOS from './LOGO.png';

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history("/Login")
    } catch {
      setError("Failed to create an account")
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
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-20 login__signInButton" type="submit">
              Sign Up
            </Button>
            <div className="w-20 text-center mt-2">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
          </Form>
        </Card.Body>
      </Card>
      
   </div>
   </div>
  )
}
