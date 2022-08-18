import { useState } from "react";
import axios from "axios";
const useAuth = () => {
  const baseUrl = "https://golfincorp-backend.herokuapp.com/api"

  const login = async (user) => {
     const response = await axios.post(`${baseUrl}/users/login/`, {
     	body:{
	     email: user.email, 
	     password: user.password 
     	},
	headers: {
	'Content-Type': 'application/json'
	}

     },);
    console.log(response)
  };
  return { login };
};

export default useAuth;
