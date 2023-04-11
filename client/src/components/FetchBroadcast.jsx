export default async function FetchBroadcast() {
    const authorizationToken = sessionStorage.getItem("authToken");
  
    if (authorizationToken === undefined) {
      console.log("No auth token found");
      return false;
    }
  
    const fetchOption = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authorizationToken,
      },
    };
  
    let response = await fetch("http://127.0.0.1:3030/ducks/api/broadcast", fetchOption);
    let broadcast = await response.json();
  
    return broadcast;
  }
  