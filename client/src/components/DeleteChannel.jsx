export default async function DeleteChannel(id){
    const authorizationToken = sessionStorage.getItem('authToken')

    if(authorizationToken === undefined){
        console.log('No auth token found');
        return false
    }




    const fetchOption = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + authorizationToken,
        },
      };

      await fetch(`http://127.0.0.1:3030/ducks/api/channel/${id}`, fetchOption);
     
    
}