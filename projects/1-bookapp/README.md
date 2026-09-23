# 📚 Book App

A modern and responsive online bookstore built with **React, TypeScript, and Vite**, with full support for Persian language and RTL layout.

یک فروشگاه آنلاین کتاب مدرن و Responsive که با **React، TypeScript و Vite** ساخته شده و از زبان فارسی و چیدمان راست‌به‌چپ (RTL) پشتیبانی می‌کند.

---

## 🇬🇧 English

### ✨ About

Book App is a frontend bookstore application that allows users to browse books, search for books, view book details, and manage their shopping cart.

The project is structured with reusable React components and uses Context API and Reducer for state management.

### 🚀 Features

* 🏠 Modern Home Page
* 📚 Book Slider
* 🔎 Book Search
* ⏱️ Debounced Search
* 📖 Book Details Page
* 🛒 Shopping Cart
* ➕ Increase book quantity
* ➖ Decrease book quantity
* 🗑️ Remove books from cart
* 💰 Automatic cart total calculation
* 📱 Responsive Design
* 🌐 Persian / RTL Support
* 🔤 Tanha Persian Font
* 📞 Contact Page
* 👤 About Page
* ❌ Custom 404 / Not Found Page

### 🛠️ Technologies

* React
* TypeScript
* Vite
* React Router
* Context API
* useReducer
* CSS
* JSON / JSON Server
* Tanha Font

### 📂 Project Structure

```text
1-bookapp/
├── public/
├── src/
│   ├── assets/
│   │   ├── font/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Banner/
│   │   ├── BookSlider/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── Hero/
│   │
│   ├── context/
│   │   ├── CartContext.ts
│   │   └── SearchContext.ts
│   │
│   ├── database/
│   │   └── db.json
│   │
│   ├── hooks/
│   │   └── useDebounce.ts
│   │
│   ├── pages/
│   │   ├── AboutPage/
│   │   ├── CartPage/
│   │   ├── Contact/
│   │   ├── DetailsBook/
│   │   ├── HomePage/
│   │   ├── NotfoundPage/
│   │   └── Search/
│   │
│   ├── providers/
│   │   ├── CartContextProvider.tsx
│   │   └── SearchProvider.tsx
│   │
│   ├── reducers/
│   │   └── cart-reducers.ts
│   │
│   ├── services/
│   │   ├── bookService.ts
│   │   └── http.ts
│   │
│   ├── styles/
│   │   └── font.css
│   │
│   ├── types/
│   │   └── book-interface.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd 1-bookapp
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### 🧩 State Management

The project uses **Context API** and **useReducer** to manage application state.

#### Cart State

Cart-related logic is organized in:

```text
src/
├── context/
│   └── CartContext.ts
├── providers/
│   └── CartContextProvider.tsx
└── reducers/
    └── cart-reducers.ts
```

The cart supports:

* Adding books
* Removing books
* Increasing quantity
* Decreasing quantity
* Calculating total items
* Calculating total price

#### Search State

Search functionality is managed using Context API:

```text
src/
├── context/
│   └── SearchContext.ts
├── providers/
│   └── SearchProvider.tsx
└── hooks/
    └── useDebounce.ts
```

### 🔌 Data & Services

Book-related data and API logic are located in:

```text
src/services/
├── bookService.ts
└── http.ts
```

Local book data is stored in:

```text
src/database/db.json
```

### 🎨 Persian & RTL Support

The application includes Persian language and RTL support.

The **Tanha** font family is included in:

```text
src/assets/font/
```

Font configuration:

```text
src/styles/font.css
```

Different font versions are included to support Persian digits and Latin characters.

### 📄 Pages

| Page         | Description                       |
| ------------ | --------------------------------- |
| Home         | Main bookstore page               |
| Search       | Book search results               |
| Book Details | Detailed information about a book |
| Cart         | Shopping cart management          |
| About        | About the bookstore               |
| Contact      | Contact information               |
| Not Found    | 404 page                          |

### 📱 Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Tablet
* Mobile

### 🔮 Future Improvements

Possible future improvements include:

* User authentication
* User registration and login
* Online payment
* Real backend API
* Database integration
* Admin dashboard
* Order management
* User profiles
* Wishlist
* Product reviews

### 👨‍💻 Author

Built with ❤️ using React and TypeScript.

---

# 🇮🇷 فارسی

## ✨ درباره پروژه

**Book App** یک فروشگاه آنلاین کتاب است که با استفاده از **React، TypeScript و Vite** ساخته شده است.

کاربر می‌تواند کتاب‌ها را مشاهده کند، کتاب موردنظر خود را جستجو کند، جزئیات کتاب را ببیند و کتاب‌ها را به سبد خرید اضافه و مدیریت کند.

ساختار پروژه بر اساس کامپوننت‌های قابل استفاده مجدد React طراحی شده و برای مدیریت State از **Context API** و **useReducer** استفاده شده است.

---

## 🚀 امکانات

* 🏠 صفحه اصلی مدرن
* 📚 اسلایدر نمایش کتاب‌ها
* 🔎 جستجوی کتاب
* ⏱️ جستجوی بهینه‌شده با Debounce
* 📖 صفحه جزئیات کتاب
* 🛒 سبد خرید
* ➕ افزایش تعداد کتاب
* ➖ کاهش تعداد کتاب
* 🗑️ حذف کتاب از سبد خرید
* 💰 محاسبه خودکار مجموع قیمت
* 📱 طراحی Responsive
* 🌐 پشتیبانی از زبان فارسی و RTL
* 🔤 استفاده از فونت فارسی Tanha
* 📞 صفحه تماس با ما
* 👤 صفحه درباره ما
* ❌ صفحه 404

---

## 🛠️ تکنولوژی‌های استفاده‌شده

* **React**
* **TypeScript**
* **Vite**
* **React Router**
* **Context API**
* **useReducer**
* **CSS**
* **JSON / JSON Server**
* **Tanha Font**

---

## 📂 ساختار پروژه

```text
1-bookapp/
├── public/
├── src/
│   ├── assets/
│   │   ├── font/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Banner/
│   │   ├── BookSlider/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── Hero/
│   │
│   ├── context/
│   │   ├── CartContext.ts
│   │   └── SearchContext.ts
│   │
│   ├── database/
│   │   └── db.json
│   │
│   ├── hooks/
│   │   └── useDebounce.ts
│   │
│   ├── pages/
│   │   ├── AboutPage/
│   │   ├── CartPage/
│   │   ├── Contact/
│   │   ├── DetailsBook/
│   │   ├── HomePage/
│   │   ├── NotfoundPage/
│   │   └── Search/
│   │
│   ├── providers/
│   │   ├── CartContextProvider.tsx
│   │   └── SearchProvider.tsx
│   │
│   ├── reducers/
│   │   └── cart-reducers.ts
│   │
│   ├── services/
│   │   ├── bookService.ts
│   │   └── http.ts
│   │
│   ├── styles/
│   │   └── font.css
│   │
│   ├── types/
│   │   └── book-interface.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📦 نصب و اجرا

ابتدا Repository را Clone کنید:

```bash
git clone <repository-url>
```

سپس وارد پوشه پروژه شوید:

```bash
cd 1-bookapp
```

وابستگی‌های پروژه را نصب کنید:

```bash
npm install
```

برای اجرای پروژه در حالت Development:

```bash
npm run dev
```

---

## 🏗️ ساخت نسخه Production

برای ایجاد نسخه Production:

```bash
npm run build
```

برای مشاهده نسخه Production به صورت Local:

```bash
npm run preview
```

---

## 🧩 مدیریت State

در این پروژه برای مدیریت State از **Context API** و **useReducer** استفاده شده است.

### 🛒 مدیریت سبد خرید

منطق مربوط به سبد خرید در فایل‌های زیر قرار دارد:

```text
src/
├── context/
│   └── CartContext.ts
├── providers/
│   └── CartContextProvider.tsx
└── reducers/
    └── cart-reducers.ts
```

سبد خرید قابلیت‌های زیر را دارد:

* افزودن کتاب
* حذف کتاب
* افزایش تعداد
* کاهش تعداد
* محاسبه تعداد کل آیتم‌ها
* محاسبه مجموع قیمت

### 🔎 مدیریت جستجو

مدیریت جستجو با استفاده از Context API انجام شده است:

```text
src/
├── context/
│   └── SearchContext.ts
├── providers/
│   └── SearchProvider.tsx
└── hooks/
    └── useDebounce.ts
```

برای جلوگیری از اجرای بیش از حد عملیات جستجو، از `useDebounce` استفاده شده است.

---

## 🔌 داده‌ها و سرویس‌ها

منطق مربوط به دریافت و مدیریت اطلاعات کتاب‌ها در مسیر زیر قرار دارد:

```text
src/services/
├── bookService.ts
└── http.ts
```

اطلاعات اولیه کتاب‌ها نیز در فایل زیر قرار گرفته است:

```text
src/database/db.json
```

---

## 🎨 پشتیبانی از فارسی و RTL

پروژه به صورت کامل برای نمایش محتوای فارسی طراحی شده است.

فونت **Tanha** در مسیر زیر قرار دارد:

```text
src/assets/font/
```

تنظیمات فونت نیز در فایل زیر انجام شده است:

```text
src/styles/font.css
```

همچنین نسخه‌های مختلف فونت برای پشتیبانی از اعداد فارسی، حروف لاتین و حالت‌های مختلف متن در پروژه قرار گرفته‌اند.

---

## 📄 صفحات پروژه

| صفحه         | توضیحات                 |
| ------------ | ----------------------- |
| Home         | صفحه اصلی فروشگاه       |
| Search       | نمایش نتایج جستجوی کتاب |
| Book Details | نمایش جزئیات کتاب       |
| Cart         | مدیریت سبد خرید         |
| About        | معرفی فروشگاه           |
| Contact      | اطلاعات تماس            |
| Not Found    | صفحه 404                |

---

## 📱 طراحی Responsive

رابط کاربری پروژه برای اندازه‌های مختلف صفحه طراحی شده است و از:

* Desktop
* Tablet
* Mobile

پشتیبانی می‌کند.

---

## 🔮 امکانات قابل توسعه

در آینده می‌توان امکانات زیر را به پروژه اضافه کرد:

* احراز هویت کاربران
* ثبت‌نام و ورود
* پرداخت آنلاین
* اتصال به Backend واقعی
* استفاده از Database واقعی
* پنل مدیریت
* مدیریت سفارش‌ها
* پروفایل کاربر
* علاقه‌مندی‌ها (Wishlist)
* امتیازدهی و نظرات کاربران

---

## 👨‍💻 توسعه‌دهنده

ساخته‌شده با ❤️ و استفاده از **React + TypeScript**.

اگر پروژه برای شما مفید بود، می‌توانید با ⭐ دادن به Repository از آن حمایت کنید.
