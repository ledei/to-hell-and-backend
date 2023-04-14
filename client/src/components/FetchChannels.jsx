export default async function FetchChannels() {
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
  
    let response = await fetch("http://127.0.0.1:3030/ducks/api/channel", fetchOption);
    let channels = await response.json();
  
    return channels;
  }
  