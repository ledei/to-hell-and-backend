export default async function SendMsg(id,msg) {
    const authorizationToken = sessionStorage.getItem("authToken");
  
    if (authorizationToken === undefined) {
      console.log("No auth token found");
      return false;
    }

    const message = {
        msg: msg,
    }
  
    const fetchOption = {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authorizationToken,
      },
    };
  
     await fetch(`http://127.0.0.1:3030/ducks/api/channel/${id}`, fetchOption);
   
  
   
  }