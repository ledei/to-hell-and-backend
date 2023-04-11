import { Navigate, redirect } from "react-router-dom";
import { FetchOptions } from "./FetchOptions";


export default async function Login(username,password) {

  const data = {
    username: username,
    password: password,
  };



  const response = await FetchOptions(
    `http://127.0.0.1:3030/auth/login`,
    "POST",
    data
  );

 
  if (response.status === 400) {
    console.log(await response.text());
  } else if (response.status === 401) {
    console.log("wrong password or email");
  } else {
    const authorizationToken = await response.text();
    sessionStorage.setItem("authToken", authorizationToken);
  }
   
  
}
