import React, { useState } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { registerUser } from "./ApiCalls";
import {useNavigate} from "react-router-dom"

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Cpassword, setCpassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate()

  function handleSignUp(e) {
    setLoading(true);
    e.preventDefault();

    try {
      if (!name || !email || !password) {
        toast({
          title: "Please fill all the fields",
          description: "",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      } else {
        if (password !== Cpassword) {
          toast({
            title: "Password does not match , try again",
            description: "",
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
        } else {
          registerUser({ name, email, password })
            .then((res) => {
           
              toast({
                title: `${res.data}`,
                description: "",
                status: "success",
                duration: 4000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false);
           
              navigate("/chats")
            })
            .catch((error) => {
              toast({
                title: `${error.response.data}`,
                description: "",
                status: "error",
                duration: 4000,
                isClosable: true,
                position: "top",
              });
              setLoading(false);
            });
        }
      }
    } catch (error) {}
    setEmail("");
    setName("");
    setPassword("");
    setCpassword("");
  }

  function uploadImage() {}
  return (
    <Stack spacing={4}>
      <FormControl isRequired>
        <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="text">
          Name
        </FormLabel>
        <Input
          id="text"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="email">
          Email address
        </FormLabel>
        <Input
          value={email}
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="passowrd">
          Password
        </FormLabel>
        <Input
          value={password}
          id="passowrd"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="email">
          Confirm Password
        </FormLabel>
        <Input
          value={Cpassword}
          id="Cpassowrd"
          type="password"
          onChange={(e) => setCpassword(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize={"sm"} textColor="GrayText" htmlFor="file">
          Profile pic
        </FormLabel>
        <Input
          id="file"
          accept="image/"
          type="file"
          onChange={(e) => uploadImage(e)}
        />
      </FormControl>

      <Button colorScheme={"blue"} onClick={handleSignUp} isLoading={loading}>
        Signup
      </Button>
    </Stack>
  );
}

export default Signup;
