import { FetchOptions } from "./FetchOptions";

export default async function CreateUser(username, firstname, lastname, password) {
    const userDetails = {
        username: username, 
        first_name: firstname, 
        last_name: lastname,
        password: password
    };

    const response = await FetchOptions('http://127.0.0.1:3030/auth/register', POST, userDetails);

    if(response.status == 400) {
        return await response.text();
    }else if(response.status == 401) {
        return await response.text();
    }else {
        const authorizationToken = await response.text();
        sessionStorage.setItem('authToken', authorizationToken);
        return response.status
    }
};