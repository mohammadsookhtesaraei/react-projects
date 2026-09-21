import axios from "axios";


const app=axios.create({baseURL:"http://localhost:2500"});




app .interceptors.request.use(
    (request)=>request,
    (error)=>Promise.reject(error)
);


app .interceptors.response.use(
    (response)=>response,
    (error)=>Promise.reject(error)
);


export default app;