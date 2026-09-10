

export async function getUsers(){
    const users= await fetch("https://jsonplaceholder.typicode.com/users");
    return users.json();
};