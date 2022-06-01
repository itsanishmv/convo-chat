import React,{useState} from 'react'
import {
  FormControl,
  Input,
  FormLabel,
  useToast,
  Button,
  Stack,
} from "@chakra-ui/react";
import { login } from './ApiCalls'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [loginEmail, setLoginEmail] = useState()
  const [loginPassword, setLoginPassword] = useState()
  const [loading , setLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  function handleLogin(e) {
    setLoading(true)
    e.preventDefault()
    login({ loginEmail, loginPassword })
      .then(res => {
       
        toast({
          title: `${res.data.message}`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position:"bottom"
        })
        localStorage.setItem("token", res.data.token)
        setLoading(false)
        // navigate("/chat")
      })
      .catch((error) => {
      toast({
        title: `${error ? error.response.data : "You're logged in"}`,
        status: `${error ? "error" : "success"}`,
        duration: 4000,
        isClosable: true,
        position:"top"
      })
      setLoading(false)
    })
    
  }
  return (
    <Stack spacing={4}>
    <FormControl>
      <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="email">
        Email address
      </FormLabel>
      <Input id="email" type="email" onChange={(e)=>setLoginEmail(e.target.value)} />
    </FormControl>

    <FormControl>
      <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="passowrd">
        Password
      </FormLabel>
      <Input id="passowrd" type="password" onChange={(e)=>setLoginPassword(e.target.value)} />
    </FormControl>

    <Button colorScheme={"blue"} onClick={handleLogin} isLoading={loading}>Login</Button>
  </Stack>
  )
}

export default Login