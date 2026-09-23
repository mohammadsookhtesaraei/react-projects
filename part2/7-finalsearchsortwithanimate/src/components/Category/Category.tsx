
import type { ReactNode} from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import autoAnimate from "@formkit/auto-animate";
import useDebounce from "../../hooks/useDebounce";
import { products } from "../../constant/data";

const Category = (): ReactNode => {
  // برای نگه داشتن متن لحظه‌ای input استفاده می‌شود
  const [searchInput, setSearchInput] = useState("");

  // برای نگه داشتن مقدار نهایی سرچ استفاده می‌شود
  const [searchQuery, setSearchQuery] = useState("");

  // برای مشخص کردن دسته‌بندی انتخاب شده استفاده می‌شود
  const [selectedCategory, setSelectedCategory] = useState("all");

  // برای نمایش موقت spinner هنگام تغییر فیلتر استفاده می‌شود
  const [isLoading, setIsLoading] = useState(false);

  // برای گرفتن reference از div محصولات استفاده می‌شود
  // چون autoAnimate باید مستقیماً به عنصر DOM دسترسی داشته باشد
  const parentRef = useRef<HTMLDivElement>(null);

  // برای جلوگیری از اجرای سرچ با هر بار تایپ استفاده می‌شود
  // سرچ فقط بعد از ۱ ثانیه توقف کاربر انجام می‌شود
  const debounce = useDebounce(1000);

  // با تغییر متن input این تابع اجرا می‌شود
  const handleSearchOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;

    // متن input را همان لحظه نمایش می‌دهد
    setSearchInput(value);

    // چون سرچ فعال شده، دسته‌بندی قبلی حذف می‌شود
    setSelectedCategory("all");

    // با debounce جلوی اجرای فیلتر در هر تایپ گرفته می‌شود
    // مقدار searchQuery بعد از ۱ ثانیه تغییر می‌کند
    debounce(() => {
      setSearchQuery(value);
    })();
  };

  // با تغییر select این تابع اجرا می‌شود
  const handleSelectedCategoryOnChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;

    // دسته‌بندی انتخاب شده را ذخیره می‌کند
    setSelectedCategory(value);

    // چون فیلتر دسته‌بندی فعال شده، سرچ قبلی پاک می‌شود
    setSearchInput("");
    setSearchQuery("");
  };

  // با تغییر سرچ یا دسته‌بندی loading را کنترل می‌کند
  useEffect(() => {
    // قبل از نمایش نتیجه loading فعال می‌شود
    setIsLoading(true);

    // برای شبیه‌سازی زمان loading استفاده شده
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // برای جلوگیری از باقی ماندن timer قبلی
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, selectedCategory]);

  // فقط یک بار بعد از mount اجرا می‌شود
  useEffect(() => {
    // اگر div محصولات وجود داشته باشد
    if (parentRef.current) {
      // تغییرات اضافه و حذف محصولات را با انیمیشن نمایش می‌دهد
      autoAnimate(parentRef.current);
    }
  }, []);

  // نتیجه فیلتر محصولات را محاسبه می‌کند
  // useMemo برای جلوگیری از اجرای دوباره فیلتر در renderهای غیرضروری است
  const filtredProucts = useMemo(() => {

    // اگر کاربر سرچ کرده باشد، محصولات بر اساس نام فیلتر می‌شوند
    if (searchQuery.trim()) {
      return products.filter((item) =>
        item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    // اگر all انتخاب شده باشد، همه محصولات برگردانده می‌شوند
    if (selectedCategory === "all") {
      return products;
    }

    // اگر دسته‌بندی خاصی انتخاب شده باشد
    // فقط محصولات همان دسته برگردانده می‌شوند
    if (selectedCategory.trim()) {
      return products.filter(
        (item) => item.category === selectedCategory
      );
    }

    // اگر هیچ فیلتری وجود نداشته باشد
    // همه محصولات نمایش داده می‌شوند
    return products;

  // فقط وقتی این دو مقدار تغییر کنند فیلتر دوباره محاسبه می‌شود
  }, [searchQuery, selectedCategory]);

  // دسته‌بندی تمام محصولات را می‌گیرد
  const category = products.map((item) => item.category);

  return (
    // container اصلی صفحه
    <div className="bg-slate-800 flex flex-col py-30 items-center h-screen">

      {/* input جستجو */}
      <input
        placeholder="جستجو"
        className="border my-2 focus:outline-none border-gray-300 rounded px-3 py-1 text-white"
        type="text"
        value={searchInput}
        onChange={handleSearchOnChange}
      />

      {/* بخش انتخاب دسته‌بندی */}
      <div className="my-6">
        <select
          value={selectedCategory}
          onChange={handleSelectedCategoryOnChange}
          className="appearance-none py-1 rounded-md px-3 focus:outline-none border border-gray-300 w-56 text-gray-400 bg-black"
        >

          {/* گزینه نمایش همه محصولات */}
          <option value="all">همه محصولات</option>

          {/* Set برای حذف دسته‌بندی‌های تکراری استفاده می‌شود */}
          {[...new Set(category)].map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* ref برای وصل کردن div به useRef استفاده شده
          تا autoAnimate بتواند تغییرات این بخش را کنترل کند */}
      <div ref={parentRef} className="w-full">

        {/* هنگام loading spinner نمایش داده می‌شود */}
        {isLoading ? (
          <div className="w-10 h-10 mx-auto border-4 border-gray-300 border-t-rose-500 rounded-full animate-spin"></div>
        ) : (
          <>
            {/* اگر نتیجه‌ای وجود نداشته باشد */}
            {filtredProucts.length === 0 ? (
              <p>محصولی یافت نشد</p>
            ) : (

              // نمایش محصولات فیلتر شده
              <div className="flex flex-wrap">

                {/* برای هر محصول یک کارت ساخته می‌شود */}
                {filtredProucts.map((item) => (
                  <div
                    key={item.id}
                    className="w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12 p-1"
                  >

                    {/* کارت محصول */}
                    <div className="border w-full flex flex-col items-center justify-end bg-white border-gray-300 rounded hover:border-rose-400 transition-all duration-300 hover:scale-105">

                      {/* تصویر محصول */}
                      <img
                        className="w-56 h-56"
                        src={item.img}
                        alt=""
                      />

                      {/* اطلاعات محصول */}
                      <div className="bg-red-500 self-start p-1 text-white">

                        {/* نام محصول */}
                        <h2>{item.name}</h2>

                        {/* دسته‌بندی محصول */}
                        <p className="self-start">
                          {item.category}
                        </p>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Category;

