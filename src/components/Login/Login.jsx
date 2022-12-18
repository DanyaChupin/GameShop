import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/auth/reducer'
import styles from './Login.styles.scss'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/home')
      })
      .catch(console.error)
  }
  return (
    <div>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  )
}

export default Login
