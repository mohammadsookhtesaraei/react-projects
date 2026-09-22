
type TokenType = {
   access_token: string,
    refresh_token
: string,
}

export const setCookie = (token: TokenType) => {
    console.log(token);

    document.cookie = `accessToken=${token.access_token}; max-age=86200; path=/`;
    document.cookie = `refreshToken=${token.refresh_token}; max-age=${30 * 24 * 60 * 60}; path=/`;

}


export const getCooke = (cookieName: string) => {

    const getAllCookie = document.cookie.split(";");
    const arrayCookie = getAllCookie.find((token) => token.trim().split("=")[0] === cookieName);
    const token = arrayCookie?.split("=")[1];
    return token
};