import { useCallback, useEffect, useRef } from "react";



const useDebounce = (delay: number) => {
    //    از رف استفاده کردیم چون تایم میخوایم بین رندرا بمونه و کامپونت ری رندر نشه با تغییرش
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    //  تابع داریم به اسم دی بونس که با کالبک رپ شد که وقتی از این هوک استفاده میکنیم بین رندرها رفرنسش عوض نشه و دوباره از اول ساخته نشه

    // این تابع یک کال بک به عنوان ورودی میگیره که میشه همون تابع هندرلر سرچ یا هر چیزی که قراره با تاخیر اجرا بشه و داخاش از ست استیت استفاده شده

    // این تابع خودش دیبانس رو اجرا نمی کنه یک تابع دیگه ری ترن میکنه اون اجرا میکنه

    // این تابع ارگومان هارو به عنوان ورودی میگیره

    // قبلش باید تایمر قبلی رو پاک کنیم

    // مثلا کاربر کلمه ش رو زده بعد یک ثانیه دوباره ب رو زده باید یک ثانیه قبلی رو پاک کنیم
    // و ست تایم اوت جدید بدیم

    // مقداره رف رو میگیریم و بهش ست تایم ائت میدیم و داخلش کال بک رو صدا میزنیم
    // کالبک هر یک ثانیه اگه لازم بود اجرا میشه
    const debounce = useCallback((callback: (...args: any[]) => void) => {

        return (...args: any[]) => {

            clearTimeout(timeRef.current!);

            timeRef.current = setTimeout(() => {
                callback(...args)
            }, delay);
        }


    }, [delay]);


    // در اخرم رف رو کلین اپ می کنیم مموری لیک نشه

    useEffect(() => {

        return () => {
            if (timeRef.current) {
                clearTimeout(timeRef.current!)
            }
        }
    }, [delay]);

    return debounce
};



export default useDebounce;