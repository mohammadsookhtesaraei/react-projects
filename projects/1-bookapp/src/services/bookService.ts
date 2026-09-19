import app from "./http"


export const getAllBooks=()=>{
    return app.get("/books").then(({data})=>data);
};


