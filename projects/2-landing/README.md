# 🎓 پروژه یادگیری Tailwind CSS

این پروژه یک **اکادمی کدنویسی** کامل است که برای یادگیری عملی Tailwind CSS طراحی شده. پروژه شامل یک landing page مدرن و ریسپانسیو با استفاده از React، TypeScript، Vite و Tailwind CSS v4 می‌باشد.

## 📋 فهرست مطالب

- [تکنولوژی‌های استفاده شده](#-تکنولوژی‌های-استفاده-شده)
- [نصب و راه‌اندازی](#-نصب-و-راه‌اندازی)
- [ساختار پروژه](#-ساختار-پروژه)
- [مفاهیم Tailwind CSS در این پروژه](#-مفاهیم-tailwind-css-در-این-پروژه)
- [ویژگی‌های پروژه](#-ویژگی‌های-پروژه)
- [اسکریپت‌های موجود](#-اسکریپت‌های-موجود)
- [نکات یادگیری](#-نکات-یادگیری)

## 🛠 تکنولوژی‌های استفاده شده

### Core Technologies
- **React 19.2.8** - کتابخانه جاوااسکریپت برای ساخت رابط کاربری
- **TypeScript ~6.0.2** - اضافه کردن تایپ‌اسکریپت به جاوااسکریپت
- **Vite 8.2.0** - ابزار build سریع و dev server مدرن

### Styling & UI
- **Tailwind CSS 4.3.3** - فریم‌ورک CSS utility-first
- **@tailwindcss/vite 4.3.3** - پلاگین رسمی Tailwind برای Vite
- **Framer Motion 12.43.0** - کتابخانه انیمیشن برای React
- **Lucide React 1.28.0** - کتابخانه آیکون‌های مدرن

### Utilities
- **clsx 2.1.1** - ساخت conditional className به صورت تمیز
- **tailwind-merge 3.6.0** - ادغام هوشمند کلاس‌های Tailwind

### Development Tools
- **ESLint 10.8.0** - لینتر جاوااسکریپت
- **TypeScript ESLint 8.65.0** - قوانین لینتر برای TypeScript

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js (نسخه 18 یا بالاتر)
- npm یا pnpm

### مراحل نصب

1. **کلون کردن پروژه**
```bash
git clone <repository-url>
cd youtube
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **اجرای سرور توسعه**
```bash
npm run dev
```

4. **باز کردن مرورگر**
```
http://localhost:5173
```

## 📁 ساختار پروژه

```
youtube/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # تصاویر و فایل‌های استاتیک
│   ├── components/          # کامپوننت‌های React
│   │   ├── ui/             # کامپوننت‌های قابل استفاده مجدد
│   │   ├── Hero.tsx        # بخش اصلی صفحه (Hero Section)
│   │   ├── Features.tsx    # بخش ویژگی‌ها
│   │   ├── Courses.tsx     # بخش دوره‌ها
│   │   ├── Stats.tsx       # بخش آمار
│   │   ├── Testimonials.tsx # بخش نظرات کاربران
│   │   ├── Pricing.tsx     # بخش قیمت‌گذاری
│   │   ├── CTA.tsx         # بخش دعوت به اقدام
│   │   ├── Navbar.tsx      # نوار ناوبری
│   │   └── Footer.tsx      # فوتر
│   ├── App.tsx             # کامپوننت اصلی
│   ├── index.css           # فایل CSS اصلی و تنظیمات Tailwind
│   └── main.tsx            # نقطه ورود برنامه
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 مفاهیم Tailwind CSS در این پروژه

### 1. **پیکربندی Tailwind v4 با @theme**

این پروژه از Tailwind CSS نسخه 4 استفاده می‌کند که از دستور `@theme` برای تعریف متغیرهای سفارشی استفاده می‌کند:

```css
@theme {
  /* پالت رنگی اصلی */
  --color-primary: #8B5CF6;
  --color-primary-light: #A78BFA;
  --color-primary-dark: #7C3AED;
  
  /* رنگ‌های پس‌زمینه */
  --color-dark-900: #0A0A0F;
  --color-dark-800: #12121A;
  
  /* رنگ‌های متن */
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  
  /* فونت */
  --font-family-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
```

**نکته یادگیری**: در Tailwind v4، متغیرهای CSS تعریف شده در `@theme` به صورت خودکار به کلاس‌های utility تبدیل می‌شوند. مثلاً `--color-primary` به `bg-primary`، `text-primary` و غیره.

### 2. **Layout و Positioning**

#### Grid Layout
```tsx
{/* Grid با 2 ستون در دسکتاپ */}
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

{/* Grid با 3 ستون در دسکتاپ */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Flexbox
```tsx
{/* Flexbox برای چیدمان افقی */}
<div className="flex flex-wrap gap-4">
  <Button>Start Learning</Button>
  <Button variant="outline">Watch Demo</Button>
</div>
```

#### Positioning
```tsx
{/* عنصر مطلق برای افکت‌های پس‌زمینه */}
<div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

{/* چیدمان مرکزی */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
```

### 3. **Responsive Design**

Tailwind از Mobile-First approach استفاده می‌کند:

```tsx
{/* متن 4xl در موبایل، 7xl در دسکتاپ */}
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold">

{/* Grid 1 ستون در موبایل، 2 ستون در تبلت، 3 ستون در دسکتاپ */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Padding متفاوت در اندازه‌های مختلف */}
<div className="px-4 sm:px-6 lg:px-8">
```

**Breakpoints**:
- `sm:` - 640px به بالا
- `md:` - 768px به بالا
- `lg:` - 1024px به بالا
- `xl:` - 1280px به بالا

### 4. **Colors و Opacity**

```tsx
{/* استفاده از رنگ‌های سفارشی */}
<div className="bg-dark-900 text-text-primary">

{/* Opacity با slash syntax */}
<div className="bg-primary/10 border border-primary/20">
<div className="bg-primary/20 rounded-full blur-[128px]">

{/* Gradient Text */}
<h1 className="gradient-text">Web Development</h1>
```

### 5. **Typography**

```tsx
{/* سایز متن */}
<h1 className="text-4xl sm:text-5xl lg:text-6xl">

{/* وزن فونت */}
<h1 className="font-extrabold">
<h3 className="text-xl font-semibold">

{/* فاصله خطوط */}
<p className="leading-relaxed">

{/* فاصله حروف */}
<h1 className="tracking-tight">

{/* رنگ متن */}
<p className="text-text-secondary text-text-muted">
```

### 6. **Spacing**

```tsx
{/* Margin و Padding */}
<div className="mt-6 mb-8 px-4 py-2">

{/* Gap در Flexbox/Grid */}
<div className="flex gap-4">
<div className="grid gap-6">

{/* Space between items */}
<div className="space-y-4">
```

### 7. **Effects و Animations**

#### Custom Animations
```css
/* تعریف انیمیشن در CSS */
@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

#### استفاده در React
```tsx
<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="animate-pulse-glow"
>
```

#### Glass Morphism
```css
.glass {
  background: rgba(22, 22, 42, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(42, 42, 74, 0.5);
}
```

```tsx
<div className="glass shadow-xl rounded-xl">
```

### 8. **Hover Effects**

```tsx
{/* Hover states */}
<div className="group hover:border-primary/40 hover:bg-surface-light 
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

{/* Scale on hover */}
<div className="group-hover:scale-110 transition-transform duration-300">
```

### 9. **Custom Utility Classes**

```css
/* Grid Background Pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 10. **Framer Motion Integration**

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5, delay: i * 0.07 }}
>
  {/* محتوا */}
</motion.div>
```

## ✨ ویژگی‌های پروژه

### 🎯 طراحی مدرن و حرفه‌ای
- **Dark Theme** - تم تاریک با پالت رنگی هماهنگ
- **Glass Morphism** - افکت شیشه‌ای برای کارت‌ها
- **Gradient Effects** - گرادیان‌های زیبا برای متن و پس‌زمینه
- **Glow Effects** - افکت‌های درخشان برای المان‌های برجسته

### 📱 کاملاً ریسپانسیو
- Mobile-First Design
- 7 Breakpoint مختلف
- Grid و Flexbox برای چیدمان
- تصاویر و محتوای تطبیقی

### ⚡ انیمیشن‌های روان
- Framer Motion برای انیمیشن‌های ورود
- انیمیشن‌های CSS سفارشی
- Hover effects تعاملی
- Scroll-triggered animations

### 🎨 کامپوننت‌های قابل استفاده مجدد
- Button کامپوننت با variantهای مختلف
- SectionHeading برای عناوین بخش‌ها
- کامپوننت‌های UI در پوشه ui/

### 🔧 TypeScript
- تایپ‌اسکریپت برای type safety
- Interfaceهای واضح
- Props typing برای کامپوننت‌ها

## 📦 اسکریپت‌های موجود

```bash
# اجرای سرور توسعه (Development Server)
npm run dev

# Build پروژه برای production
npm run build

# اجرای ESLint برای بررسی کد
npm run lint

# پیش‌نمایش build تولید شده
npm run preview
```

## 📚 نکات یادگیری

### 1. **Utility-First Approach**
همه استایل‌ها به صورت کلاس‌های utility در HTML نوشته می‌شوند:
```tsx
{/* به جای CSS جداگانه */}
<div className="flex items-center justify-center p-4 bg-primary rounded-lg">
```

### 2. **Composition over Inheritance**
به جای ساخت کلاس‌های پیچیده، از ترکیب کلاس‌های ساده استفاده می‌شود:
```tsx
className="bg-surface border border-surface-border rounded-2xl p-7"
```

### 3. **Responsive by Default**
همیشه از موبایل شروع کنید و برای صفحه‌های بزرگتر اضافه کنید:
```tsx
className="text-base sm:text-lg lg:text-xl"
```

### 4. **State Variants**
استفاده از hover, focus, active و دیگر حالت‌ها:
```tsx
className="hover:bg-primary/90 focus:ring-2 focus:ring-primary/50"
```

### 5. **Custom Values**
استفاده از مقادیر سفارشی با bracket syntax:
```tsx
className="w-96 h-96 blur-[128px] p-[1.5rem]"
```

### 6. **Arbitrary Properties**
استفاده از propertyهای سفارشی:
```tsx
className="[animation-delay:2s] [mask-composite:exclude]"
```

## 🎯 مراحل بعدی برای یادگیری

1. **کامپوننت‌های دیگر را بررسی کنید**
   - `Features.tsx` - Grid layout و motion animations
   - `Courses.tsx` - Card design و hover effects
   - `Pricing.tsx` - Complex layouts و conditional styling

2. **کلاس‌های CSS سفارشی را مطالعه کنید**
   - `src/index.css` - gradient-text, glass, glow effects

3. **پالت رنگی را تغییر دهید**
   - رنگ‌های مختلف را در `@theme` تست کنید

4. **کامپوننت‌های جدید بسازید**
   - یک بخش Contact بسازید
   - یک فرم ثبت‌نام طراحی کنید

5. **انیمیشن‌های بیشتر یاد بگیرید**
   - Framer Motion documentation را بخوانید
   - Scroll animations را اضافه کنید

## 📖 منابع مفید

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Beta](https://tailwindcss.com/blog/tailwindcss-v4-beta)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)

## 🤝 مشارکت

این پروژه برای اهداف آموزشی است. اگر سوال یا پیشنهادی دارید، خوشحال می‌شوم بشنوم!

## 📝 License

این پروژه برای یادگیری ایجاد شده و می‌توانید از آن به صورت آزاد استفاده کنید.

---

**ساخته شده با ❤️ برای یادگیری Tailwind CSS**