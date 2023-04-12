export default async function SendBroadcastMsg(title,content) {
    const authorizationToken = sessionStorage.getItem("authToken");
  
    if (authorizationToken === undefined) {
      console.log("No auth token found");
      return false;
    }

    const message = {
        title: title,
        content: content
    }
  
    const fetchOption = {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authorizationToken,
      },
    };
  
     await fetch(`http://127.0.0.1:3030/ducks/api/broadcast`, fetchOption);
   
  
   
  }