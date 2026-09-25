
// ابزارهای React
import { useEffect, useState, useRef } from "react";

// motion برای انیمیشن و useInView برای تشخیص ورود به صفحه
import { motion, useInView } from "framer-motion";

// داده‌های Stats
import { statsData } from "../../constants/data";

// عدد را از 0 تا مقدار نهایی به‌صورت انیمیشنی نمایش می‌دهد
function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  // عدد فعلی که روی صفحه نمایش داده می‌شود
  const [count, setCount] = useState(0);

  // ref برای شناسایی span توسط useInView
  const ref = useRef<HTMLSpanElement>(null);

  // آیا span وارد viewport شده؟
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // تا وقتی وارد صفحه نشده، انیمیشن شروع نشود
    if (!isInView) return;

    let start = 0;
    const end = value;

    // مدت انیمیشن: 2 ثانیه
    const duration = 2000;

    // زمان شروع انیمیشن
    const startTime = Date.now();

    // تقریباً هر 16ms عدد را آپدیت می‌کنیم
    const timer = setInterval(() => {
      // مدت زمان گذشته
      const elapsed = Date.now() - startTime;

      // درصد پیشرفت انیمیشن: 0 تا 1
      const progress = Math.min(elapsed / duration, 1);

      // باعث می‌شود حرکت در انتها نرم‌تر شود
      const eased = 1 - Math.pow(1 - progress, 3);

      // محاسبه عدد فعلی
      start = Math.floor(eased * end);

      // نمایش عدد جدید
      setCount(start);

      // وقتی به انتها رسید، timer متوقف شود
      if (progress >= 1) clearInterval(timer);
    }, 16);

    // پاک کردن timer هنگام خروج کامپوننت
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {/* جداکننده هزارگان مثل 1,000 */}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ==================================================
// Stats
// ==================================================

const Stats = () => {
  return (
    // بخش اصلی Stats
    <section className="relative py-24 lg:py-32">

      {/* پس‌زمینه Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-dark-800 to-accent-cyan/5" />

      {/* container اصلی */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* در موبایل 2 ستون، در lg چهار ستون */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* ساخت کارت‌ها از روی statsData */}
          {statsData.map((stat, i) => (
            <motion.div
              // key برای شناسایی هر آیتم توسط React
              key={stat.label}

              // حالت اولیه: مخفی و 30px پایین‌تر
              initial={{ opacity: 0, y: 30 }}

              // هنگام ورود به viewport: ظاهر شدن و حرکت به بالا
              whileInView={{ opacity: 1, y: 0 }}

              // فقط یک بار اجرا شود
              viewport={{ once: true, margin: "-50px" }}

              // هر کارت با کمی تأخیر نسبت به قبلی اجرا شود
              transition={{ duration: 0.5, delay: i * 0.1 }}

              // ظاهر کارت و افکت hover
              className="relative group text-center p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-dark-900/50"
            >

              {/* Box مربوط به Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {/* Icon مربوط به همین stat */}
                <stat.icon
                  className={`w-7 h-7 ${stat.color}`}
                />
              </div>

              {/* عدد متحرک */}
              <div className="text-3xl md:text-4xl font-extrabold text-text-primary mb-1">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              {/* عنوان */}
              <div className="text-base font-semibold text-text-primary mb-1">
                {stat.label}
              </div>

              {/* توضیحات */}
              <div className="text-sm text-text-muted">
                {stat.description}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

// قابل استفاده در فایل‌های دیگر
export default Stats;

