import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/auth/reducer'
import styles from './SignUp.styles.scss'
import Form from '../Form/Form'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/')
      })
      .catch(console.error)
  }
  return (
    <Form title="Register" handleClick={handleRegister}>
      Login
    </Form>
  )
}

export default SignUp
