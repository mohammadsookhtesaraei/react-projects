type Token = {
    accessToken: string;
    refreshToken: string
}

export const setCookie = (token: Token) => {
    document.cookie = `accessToken=${token.accessToken}; max-age=86400; path=/`
    document.cookie = `refreshToken=${token.refreshToken}; max-age=${30 * 24 * 60 * 60} path=/`
};


export const getCookie = (cookieName: string) => {

    // از کوکی اکسس توکن و رفرش توکن رو  میگیریم تبدیل به ارایه میکنیم
    const arr = document.cookie.split(";")

    // روش فایند میزنیم فاصله بینشون حذف میشه تبدیل به ارایه میشه ایندکس صفر که میشه اسم توکن
    //  ایا برابر با اسم کوکی ورودی تابع است
    // اگه اوکی بود اینجا فایند خود رشته توکن رو میده نه ارایه و کاری به اون اسپلیت نداره شرط تروشده 
    // و از داخل ارایه اون ایتم رو میده که رشته اس
    const arr2 = arr.find((token) => token.trim().split("=")[0] === cookieName);

    // حالا تبدیل به ارایه میشه ایندکس یکش که میشه  مقدار توکن رو ب ما میده
    const token = arr2?.split("=")[1];

    return token


};
