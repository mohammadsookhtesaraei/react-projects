
import React, { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { products } from "../../constant/data";

const CategoryFiltered = () => {

  // =========================================================
  // 1️⃣ STATE ها
  // =========================================================

  // چیزی که کاربر داخل input تایپ می‌کند
  // مثال: "چای"
  const [searchInput, setSearchInput] = useState("");

  // چیزی که قرار است واقعاً برای فیلتر کردن استفاده شود
  // این مقدار بعد از زدن دکمه جستجو تغییر می‌کند
  const [searchQuery, setSearchQuery] = useState("");

  // دسته‌بندی انتخاب شده
  // مقدار اولیه: all
  const [selectedCategory, setSelectedCategory] = useState("all");

  // مشخص می‌کند الان کدام نوع فیلتر فعال است:
  //
  // none     → هیچ فیلتری فعال نیست
  // search   → فیلتر جستجو فعال است
  // category → فیلتر دسته‌بندی فعال است
  //
  // این State برای حفظ همان منطق اصلی کد تو است.
  const [activeFilter, setActiveFilter] = useState("none");


  // =========================================================
  // 2️⃣ DEBOUNCE
  // =========================================================

  // searchQuery را 500 میلی‌ثانیه debounce می‌کنیم.
  //
  // یعنی وقتی searchQuery تغییر کرد،
  // React بلافاصله از آن برای فیلتر کردن استفاده نمی‌کند
  // و 500ms صبر می‌کند.
  //
  // مثال:
  //
  // searchQuery = "چای"
  //       ↓
  //      500ms
  //       ↓
  // debouncedQuery = "چای"
  //
  const [debouncedQuery] = useDebounce(searchQuery, 500);


  // =========================================================
  // 3️⃣ وقتی کاربر روی دکمه «جستجو» کلیک می‌کند
  // =========================================================

  const handleSearch = (): void => {

    // trim() فاصله‌های اول و آخر متن را حذف می‌کند.
    //
    // اگر کاربر فقط Space وارد کرده باشد،
    // وارد شرط نمی‌شود.
    if (searchInput.trim()) {

      // متن input را وارد searchQuery می‌کنیم.
      //
      // اینجا debounce شروع به کار می‌کند.
      setSearchQuery(searchInput.trim());


      // چون کاربر سرچ کرده،
      // دسته‌بندی قبلی دیگر نباید فعال باشد.
      //
      // بنابراین category را به all برمی‌گردانیم.
      setSelectedCategory("all");


      // اعلام می‌کنیم که فیلتر فعلی SEARCH است.
      setActiveFilter("search");
    }
  };


  // =========================================================
  // 4️⃣ وقتی کاربر Enter می‌زند
  // =========================================================

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {

    // اگر کلید Enter زده شد...
    if (e.key === "Enter") {

      // همان کاری را انجام بده که دکمه جستجو انجام می‌دهد.
      handleSearch();
    }
  };


  // =========================================================
  // 5️⃣ وقتی کاربر دسته‌بندی را تغییر می‌دهد
  // =========================================================

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {

    // مقدار انتخاب‌شده را می‌گیریم.
    //
    // مثلاً:
    // "غذا"
    // "نوشیدنی"
    // "حبوبات"
    // "all"
    const category = e.target.value;


    // دسته‌بندی انتخاب‌شده را ذخیره می‌کنیم.
    setSelectedCategory(category);


    // چون کاربر وارد فیلتر category شده،
    // سرچ قبلی را پاک می‌کنیم.
    setSearchInput("");
    setSearchQuery("");


    // حالا اعلام می‌کنیم فیلتر فعال،
    // category است.
    setActiveFilter("category");
  };


  // =========================================================
  // 6️⃣ ساخت لیست نهایی محصولات
  // =========================================================

  const filteredProducts = useMemo(() => {

    // ---------------------------------------------------------
    // حالت اول: SEARCH
    // ---------------------------------------------------------

    // اگر activeFilter برابر search باشد،
    // فقط جستجو انجام می‌شود.
    if (activeFilter === "search") {

      return products.filter((item) =>

        // نام محصول را کوچک می‌کنیم
        // تا بزرگ/کوچک بودن حروف روی جستجو تأثیر نگذارد.
        item.name
          .toLowerCase()

          // بررسی می‌کنیم آیا عبارت جستجو
          // داخل نام محصول وجود دارد یا نه.
          //
          // مثال:
          //
          // item.name = "چای سبز"
          // debouncedQuery = "چای"
          //
          // نتیجه:
          // true
          .includes(debouncedQuery.toLowerCase())
      );
    }


    // ---------------------------------------------------------
    // حالت دوم: CATEGORY
    // ---------------------------------------------------------

    // اگر category فعال باشد
    // و category برابر all نباشد...
    if (
      activeFilter === "category" &&
      selectedCategory !== "all"
    ) {

      // فقط محصولاتی را برمی‌گردانیم
      // که category آنها با category انتخاب‌شده یکی باشد.
      //
      // مثال:
      //
      // selectedCategory = "نوشیدنی"
      //
      // فقط محصولات:
      // چای
      // قهوه
      // آبمیوه
      // ...
      //
      // باقی محصولات حذف می‌شوند.
      return products.filter(
        (item) => item.category === selectedCategory
      );
    }


    // ---------------------------------------------------------
    // حالت سوم: بدون فیلتر
    // ---------------------------------------------------------

    // اگر هیچ فیلتر فعالی نداشتیم،
    // همه محصولات را نمایش بده.
    return products;

  }, [
    // اگر هرکدام از این سه مقدار تغییر کنند،
    // useMemo دوباره filteredProducts را محاسبه می‌کند.

    debouncedQuery,
    selectedCategory,
    activeFilter
  ]);


  // =========================================================
  // 7️⃣ RENDER
  // =========================================================

  return (
    <div className="filter-container">

      <h2 className="title">
        فیلتر محصولات بر اساس دسته بندی
      </h2>


      {/* =====================================================
          INPUT SEARCH
          ===================================================== */}

      <div className="search-bar">

        <input
          type="text"

          placeholder="نام محصول..."

          // مقدار input همیشه از searchInput می‌آید.
          value={searchInput}

          // هر چیزی که کاربر تایپ کند،
          // searchInput تغییر می‌کند.
          onChange={(e) =>
            setSearchInput(e.target.value)
          }

          // اگر Enter زده شود،
          // handleSearch اجرا می‌شود.
          onKeyDown={handleKeyDown}

          className="search-input"
        />


        <button
          onClick={handleSearch}
          className="search-button"
        >
          جستجو
        </button>

      </div>


      {/* =====================================================
          CATEGORY SELECT
          ===================================================== */}

      <select
        className="dropdown"

        // مقدار select از selectedCategory می‌آید.
        value={selectedCategory}

        // با تغییر select،
        // handleCategoryChange اجرا می‌شود.
        onChange={handleCategoryChange}
      >

        <option value="all">
          همه دسته بندی ها
        </option>

        <option value="غذا">
          غذا
        </option>

        <option value="نوشیدنی">
          نوشیدنی
        </option>

        <option value="حبوبات">
          حبوبات
        </option>

      </select>


      {/* =====================================================
          PRODUCT LIST
          ===================================================== */}

      <div className="product-list">

        {/*

          اینجا یک سؤال داریم:

          آیا محصولی پیدا شده؟

          filteredProducts.length > 0
              ↓
             بله
              ↓
          محصولات را نمایش بده

          filteredProducts.length === 0
              ↓
             خیر
              ↓
          «محصول یافت نشد» را نمایش بده

        */}

        {filteredProducts.length > 0 ? (

          // اگر محصول داریم،
          // روی تمام محصولات map می‌زنیم.
          filteredProducts.map((product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <img
                className="product-img"
                src={product.img}
                alt={product.name}
              />

              <h3 className="product-name">
                {product.name}
              </h3>

              <span className="product-category">
                {product.category}
              </span>

            </div>
          ))

        ) : (

          // اگر هیچ محصولی پیدا نشد
          <p className="no-product">
            محصول یافت نشد
          </p>

        )}

      </div>

    </div>
  );
};

export default CategoryFiltered;

