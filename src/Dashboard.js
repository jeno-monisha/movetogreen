import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './Login.css';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className='login'>
          
    <div className='login__container'>
      <Card className="container">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong >Email:</strong> {currentUser.email}
        
          <div class="mt-5 text-center">

                <div class="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div class="stats">
                    <h6 class="mb-0">Rewards</h6>
                    <span>10</span>

                  </div>


                  <div class="stats">
                    <h6 class="mb-0">Plant</h6>
                    <span>14</span>

                  </div>


                  <div class="stats">
                    <h6 class="mb-0">Ranks</h6>
                    <span>129</span>

                  </div>
                  </div>
                </div>
                <Link to="/update-profile" className="btn btn-primary login__signInButton w-20 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-20  text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </div>
      </div>
   
  )
}
