import { useEffect, useState, type ReactNode } from "react";
import { convertTime } from "../../utils/convertSecond";

type CountProps = {};

const Count = ({}: CountProps): ReactNode => {
  // state timer

  const [time, setTime] = useState(3 * 60);

  // useeffect with validation and clean up function
  useEffect(() => {
    if (time === 0) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("stop");
    };
  }, [time]);

  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center">
      <div className="w-full text-center  max-w-xs border border-gray-300 rounded-xl shadow-md shadow-gray-300 p-8 bg-white inset-shadow-sm inset-shadow-orange-500">
        <h2 className="text-orange-600 text-center text-xl font-bold mb-2 ">
          تخفیف ویژه <span className="underline underline-offset-5">فقط</span>{" "}
          برای امروز🔥 !
        </h2>
        {time > 0 ? (
          <p className=" text-gray-400 flex items-center gap-x-2 justify-center mb-2">
            زمان باقی مانده:
            <span className="block px-4 py-1 rounded-md bg-green-200/50 text-green-700">
              {convertTime(time)}
            </span>
          </p>
        ) : (
          <p className="mb-2 text-gray-400 bg-gray-200 px-4 py-1 w-fit mx-auto rounded-md">
            زمان به پایان رسید
          </p>
        )}

        {/* اینجا دیزیل به باتن پاس میدی حتما باید ترو باشه مقدار بولین باید باشه  تا دیزیبل توی استایل تیلویند کار کنه */}
        {/*  اینجا گفتیم اگه مقدار استیت برابر با صفر شد  ترو برگردون و استایل های دیزیبل توی  باتن اعمال میشه  تاوقتی که فالسه دیزیبل توی استایلا فعال نمیشه*/}
        <button
          className="bg-linear-to-r hover:-translate-y-1 transition-transform duration-300 from-orange-500 to-orange-700 my-2 cursor-pointer text-white px-4 py-1 rounded-md disabled:bg-gray-300  disabled:cursor-not-allowed disabled:bg-none"
          disabled={time === 0}
        >
          دریافت تخفیف
        </button>
      </div>
    </div>
  );
};

export default Count;
