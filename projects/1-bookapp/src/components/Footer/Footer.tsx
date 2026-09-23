

const Footer = () => {
  return (
    <footer className="relative overflow-hidden mt-24 px-5 py-16 text-[#333] font-sans">

      {/* پس‌زمینه دایره قرمز */}
      <div className="absolute top-5 -right-12 w-[300px] h-[300px] bg-red-600 opacity-30 rounded-full rotate-[-30deg]"></div>
      
      {/* محتوا */}
      <div className="relative z-10 flex flex-wrap gap-10 justify-between">

        {/* درباره ما */}
        <div className="flex-2 min-w-[250px]">
          <h3 className="text-2xl mb-4 text-[#b11402]">فرنود بوک</h3>
          <p className="leading-7">
            فروشگاه اینترنتی کتاب فرنود بوک جایی برای خرید آنلاین و
            دانلود کتاب صوتی و الکترونیکی است.
            در کتاب‌فروشی آنلاین فرنود بوک هزاران کتاب گویا و
            الکترونیکی در دسترس است که در میان آن‌ها کتاب رایگان هم
            وجود دارد.
            شما می‌توانید کتاب‌ها را خریداری کرده یا امانت بگیرید و
            در موبایل، تبلت، رایانه یا سایت بخوانید و بشنوید.
          </p>
        </div>

        {/* دسته‌بندی‌ها */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg mb-4 text-[#b11402]">دسته‌بندی‌ها</h4>
          <ul className="space-y-2">
            <li><i className="fas fa-book"></i> رمان</li>
            <li><i className="fas fa-briefcase"></i> کسب و کار</li>
            <li><i className="fas fa-brain"></i> روانشناسی</li>
            <li><i className="fas fa-graduation-cap"></i> آموزشی</li>
            <li><i className="fas fa-user-secret"></i> جنایی</li>
          </ul>
        </div>

        {/* تماس با ما */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg mb-4 text-[#b11402]">ارتباط با ما</h4>
          <ul className="space-y-2">
            <li><i className="fas fa-envelope"></i> info@farnodbook.com</li>
            <li><i className="fas fa-phone"></i> ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li><i className="fas fa-building"></i> تهران، ایران</li>
          </ul>
        </div>

      </div>

      {/* کپی‌رایت */}
      <div className="text-center mt-16 border-t border-gray-400 pt-4 text-sm text-[#202020]">
        © 2025 فرنود بوک. تمامی حقوق محفوظ است.
      </div>

    </footer>
  );
};

export default Footer;
