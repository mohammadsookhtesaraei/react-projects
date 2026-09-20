import app from "./http";




export const getCoins=(page:number,currency:string)=>{
    return app.get("/coins/markets",{
        params:{
       vs_currency: currency,
       per_page: 10,
       page: page,
        }
    }).then(({data})=>data)
};