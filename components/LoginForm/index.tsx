import React from 'react'
import { Container, RegisterButton, SignInButton } from './style'

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginUser=(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log("logged in");   
    }

    const registerUser=(e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        console.log("registered");  
    }
  
  return (
    <Container>
     <h1>Sign In</h1>
     <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <SignInButton type='submit'onClick={(e)=>loginUser(e)}>Sign In</SignInButton>
        <p style={{textAlign:"center"}}>Or</p>
        <RegisterButton type='button'onClick={(e)=>registerUser(e)}>Create your Amazon Account</RegisterButton>
     </form>
    </Container>
  
  )
}

export default LoginForm