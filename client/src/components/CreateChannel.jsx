export default async function CreateChannel(name) {
    const authorizationToken = sessionStorage.getItem("authToken");
  
    if (authorizationToken === undefined) {
      console.log("No auth token found");
      return false;
    }

    const channel = {
        name: name
    }
  
    const fetchOption = {
      method: "PUT",
      body: JSON.stringify(channel),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authorizationToken,
      },
    };
  
     const response = await fetch(`http://127.0.0.1:3030/ducks/api/channel`, fetchOption);
   
    return response
  }