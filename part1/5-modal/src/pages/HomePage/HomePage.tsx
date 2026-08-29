import { useEffect, useRef, useState, type ChangeEvent,  type ReactNode, type SubmitEvent } from "react";
import CreateListItem from "../../components/CreateListItem/CreateListItem";
import Button from "../../components/base/Button/Button";
import { validation } from "../../utils/validation";


const HomePage = (): ReactNode => {
 
// استیت تایتل برای فرم کنترلد و اینپوت مدال
  const [title, setTitle] = useState<string>("");

  // استیت ارور فرم
  const [error,setError]=useState<string | null>(null);

  // استیت لیست بارای اصافه کردن ایتم فرم به لیست و زدن لیست رندرینگ
  const [list, setList] = useState<{ id: string; title: string }[]>(()=> {
    const saved=localStorage.getItem("lists");
    return saved ? JSON.parse(saved) : []
  });

  // برای ذخیره در لوکال استوریج
  useEffect(()=>{
    localStorage.setItem("lists",JSON.stringify(list))
  },[list]);
 
// رف فرم برای ریست کردن فرم
  const formRef=useRef<HTMLFormElement | null>(null);
  // رف دیالوگ برای بازو بسته کردن دیالوگ
  const dialogRef=useRef<HTMLDialogElement | null>(null);

  // یک رف بولین برای نمایش ارور ها هنگام تایپ برا این استیت نزدیم چون نمی خواستیم رندر اضافی داشته باشیم
  // صرفا یک متغیرر میخواستیم در شرایط خاص مقدارش ترو فالس کنیم پس  رف منطقی بود
  const showOnChangeErrorRef=useRef<boolean>(false);

  // ان چینج اینپوت با استیت تایتل برای کنترلد کردن مقدارش
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>):void => {
    const value = e.target.value;
    // می گیم اگر ترو هست یعنی کاربر داره تایپ میکنه ومیخواد سابمیت کنه
    if(showOnChangeErrorRef.current){
      // بیا مقدار تایپ در لحظه و ست استیت ارور به این تابع پاس بده 
      // این از  فولدر یوتیلز میاد
      validation(value,setError)
    }

    // و همچنین مقدار استیت رو تغییر بده و تریگر کن
    setTitle(value);
  };

  // تابع سابیمت کردن فرم
  const handleFormSubmmit=(e: SubmitEvent<HTMLFormElement>):void=>{
    // از عملکرد ذاتی تگ فرم جلوگیری میکنه برای جلوگیری از رفش صفحع بعد از سابمیت
    e.preventDefault();
    // اینجا این متغییر رو رو داریم ترو میذاریم جون کاربر داره تایپ میکنه
    showOnChangeErrorRef.current=true;
    // اگر ارور داشتیم ادامه عملیات متوقف بشه
    if(!validation(title,setError)){
    return
    };
    
    // تولید یک ایدی رندوم
    const id=globalThis.crypto.randomUUID();
    // ساخت یک ابجکت
    const data={id,title};

    // قرار دادنش داخل استیت لیست برای لیست رندرینگ
    // استیت لیست ما ارایه ای از ابجکتها هست
    setList((prev)=>([...prev,data]));
  
    // مدال بازه  بعد سابمیت از طریق تارگت ریست بشه
    e.currentTarget.reset();
    // استیت تایتل بعد سابمیت ری ست بشه
    setTitle("");
    // متغغیر فالس بشه یعنی دیگه کاربر در لحظه دیگه تایپ نمی کنه
    showOnChangeErrorRef.current=false;
    //  وهمچنین مودال بسته بشه
    dialogRef?.current?.close();

  };




// این تابع برای ان کلوزه خود مودال هست که پاس داده میشه تگ دیالوگ 
  const handleCloseModal=():void => {
  setError(null);
  setTitle("");
  showOnChangeErrorRef.current = false;
  formRef.current?.reset();
  };

// تابع حذف ایتم درواقع کالبک فانکشن
  const handleDeleteButtonClick=(id:string)=>{
    setList((prev)=>prev.filter((item)=>item.id!== id));
  };
  




  return (
    <div className="">
      <CreateListItem onClose={handleCloseModal} formRef={formRef} dialogRef={dialogRef} error={error}  value={title} onChange={handleChangeTitle} onSubmit={handleFormSubmmit} />
      <div>
       <ol  className="p-6">
        {list.map((item)=>(
          <li className="list-decimal flex gap-x-1 items-center"   key={item.id}>
            {item.title}
            <Button varinat="outline" onClick={()=>handleDeleteButtonClick(item.id)}>delete</Button>
          </li>
        ))}
       </ol>
      </div>
    </div>
  );
};

export default HomePage;
