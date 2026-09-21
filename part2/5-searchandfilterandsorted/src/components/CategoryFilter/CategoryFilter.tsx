import { useMemo, useState, type ReactNode } from "react"

// constant data

// رفرنس ایمپورت تغییر نمیکنه توی رندر شدن کامپونت وقتی از این ایمپورت استفاده می  کنیم 
// کامپونت رندر میشه همه چی از اول ساخته میشه رفرنس یکسری چیزا تغییر میکنه بجز ایمپورت 
import { products } from "../../constant/data";


// خب توی این سناریو ما اومدیم دیتا ایپورت کردیم و روش عملیات دسته بندی استفاده کردیم

//  وعملیات فیلتر کردن روی دیتا رو یوز ممو زدیم چرا؟

// فرض کن هزار تا محصول داریم کاربر یک دسته بندی رو انتخاب میکنه
// تابع اجرا میشه فیلتر اون محصول رو پیدا میکنه نتیجه رو ذخیره می کنه

//  حالا اگه یک استیت دیگه توی این کامپونت تغییر کنه  دیگع این تابع یوز ممو میگه چون دپدنسی من تغییر نکرده نمیام
// از اول روی هزار محصول  فیلتر بزنم همون نتیجه قبلی رو بر میکردونه
//  اینچوری پرفورمنس برنامه میره بالا

// زمانی تغییر میکنه دوباره فیلتر میزنه که استیت خودش که به عنوان دپدنسی داره تغییر کنه
// یعنی کاربر یک دسته بندی دیگه رو انتخاب کرده
// میاد فیلتر میزنه نتیجه رو کش میکنه برای رندرهای بعدی گه اگه استیت خودش تغییر نکرده مجبور نشه روی هزار تا محصول
// فیلتر بزنه

// خب بدون یوز ممو هر بار کامپونت رندر میشه تمام اجزای داخلش از اول ساخته میشن
//  و عملیات فیلتر در هر رندر اجرا میشه حالا  فرض کن ده هزار تا محصول باشه

// این سناریو برا زمانی که ما دسته بندی سمت سرور نداشته باشیم و مبجوریم خودمون دستی فیلتر کنیم
// اگه دسته بندی سمت سرور بود کافی بود مقدار استیت رو میدادیم داده فج میشد و فیلر شده دریافت میکردیم نشون میدادیم

// این سناریو برا زمانی که این اپشن رو نداریم

// توی ری اکت 19 با اومدن ری اکت کامپایلر نیاز به این یوز ممو دستی نیست خودش هندل می کنه


 const CategoryFilter = ():ReactNode => {

  // state for selectoption
  const [selectedCategory,setSelectedCategory]=useState("all");
  
  const filteredproducts=useMemo(()=>{
    if(selectedCategory === "all"){
      return products
    }
    const filtred=products.filter((item)=>item.category === selectedCategory);
    return filtred

  },[selectedCategory,products]);

  console.log(filteredproducts);

  return (
    <div className="filter-container">
    <h2 className="title">فیلتر محصولات بر اساس دسته بندی</h2>
    <select className="dropdown" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
      <option value="all">همه دسته بندی ها</option>
      <option value="غذا">غذا</option>
      <option value="نوشیدنی">نوشیدنی</option>
      <option value="حبوبات">حبوبات</option>
    </select>

    <div className="product-list">
         {filteredproducts.map((prodcut) => (
                    <div key={prodcut.id} className='product-card' >
                        <img className='proudct-img' src={prodcut.img} />
                        <h3 className='product-name' >{prodcut.name}</h3>
                        <span className='product-category' > {prodcut.category} </span>
                    </div>

                ))}

    </div>
    </div>
  );
}

export default CategoryFilter;
