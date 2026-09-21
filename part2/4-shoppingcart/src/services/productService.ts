import app from "./http";



export const getProduct=()=> {
    return app.get("/books").then(({data})=>data);
};