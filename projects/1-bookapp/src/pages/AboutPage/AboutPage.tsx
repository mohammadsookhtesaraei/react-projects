
import aboutImg from "../../assets/images/about-avatar.jpg";

export default function AboutPage() {
    return (
        <div>
          {/* header */}
            <section className="bg-linear-to-tr from-[#fd6969] to-[#d82828] text-white text-center
       p-12 rounded-b-[50px]">
                <h1 className="text-3xl md:text-4xl  mb-8"> درباره ما</h1>
                <p className="text-lg opacity-90">
                    با فرنود بوک، دنیای کتاب‌های صوتی و الکترونیکی همیشه در دسترس شماست.
                </p>
            </section>
            
            {/* content */}
            <section className='flex flex-wrap  justify-center items-center gap-8 py-16 px-6 max-w-300 mx-auto ' >

                {/*right section - text*/}
                <div className='flex-1 min-w-75' >
                    <h3 className='text-red-600 font-bold text-[28px] mb-5 text-justify' >فرنود بوک چیست؟</h3>
                    <p className='text-[16px]  text-gray-600 py-1 leading-10 ' >فرنود بوک یک فروشگاه اینترنتی کتاب است که تلاش می‌کند تجربه‌ای متفاوت از مطالعه را به شما هدیه دهد. ما مجموعه‌ای بزرگ از کتاب‌های صوتی و الکترونیکی را در اختیار شما قرار داده‌ایم تا بتوانید در هر زمان و مکان به دنیای کتاب وارد شوید.

                        در فرنود بوک، شما می‌توانید کتاب‌ها را به صورت آنلاین خریداری کنید، امانت بگیرید و حتی از بخش کتاب‌های رایگان لذت ببرید. هدف ما این است که مطالعه را آسان‌تر و لذت‌بخش‌تر کنیم.</p>
                </div>
                
                {/*left section - image*/}
                <div className=' flex-1 min-w-75 flex justify-center' >
                    <img
                        className='w-full max-w-112.5 shadow-2xl rounded-2xl '
                        src={aboutImg} />
                </div>
            </section>

            {/*values of farond book section */}
            <section className=' mx-auto bg-[#fbcccc] p-7  text-center' >
                <h4 className='text-center text-red-600 text-2xl font-semibold mb-10 ' >ارزش های فرنود بوک</h4>
                     {/*boxs*/}
                <div className='flex flex-wrap justify-center items-center max-w-250 mx-auto  gap-2' >
                    <div className='bg-white shadow-xl flex-1 py-5 px-2 min-w-55 rounded-lg ' >
                        <p className='text-red-600 text-lg my-4' >📚 دسترسی آسان</p>
                        <span className='text-gray-700' >کتاب‌های صوتی و الکترونیکی همیشه همراه شما هستند، چه در موبایل، چه در تبلت و چه در لپ‌تاپ.</span>
                    </div>
                     <div className='bg-white shadow-xl flex-1 py-5 px-2 min-w-55 rounded-lg ' >
                        <p className='text-red-600 text-lg my-4' >📚 دسترسی آسان</p>
                        <span className='text-gray-700' >کتاب‌های صوتی و الکترونیکی همیشه همراه شما هستند، چه در موبایل، چه در تبلت و چه در لپ‌تاپ.</span>
                    </div>
                    <div className='bg-white shadow-xl flex-1 py-5 px-2 min-w-55 rounded-lg ' >
                        <p className='text-red-600 text-lg my-4' >📚 دسترسی آسان</p>
                        <span className='text-gray-700' >کتاب‌های صوتی و الکترونیکی همیشه همراه شما هستند، چه در موبایل، چه در تبلت و چه در لپ‌تاپ.</span>
                    </div>
                </div>

            </section>
        </div>
    )
}
