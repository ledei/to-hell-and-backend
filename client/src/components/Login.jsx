

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
     return await response.text();
  } else if (response.status === 404) {
     return "Missing authentication details";
  } else {
    const authorizationToken = await response.text();
    sessionStorage.setItem("authToken", authorizationToken);
    return response.status
  }
   
  
}
