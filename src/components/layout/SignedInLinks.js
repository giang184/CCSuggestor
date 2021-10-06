import React from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

const SignedInLinks = () => {
  const { currentUser, logout } = useAuth()

  return (
    <div className="links">
      <Link to ='/login' onClick={logout}>Log Out</Link>
      <Link to ='/profile'>{currentUser && currentUser.email}</Link>
    </div>
  )
}


export default SignedInLinks