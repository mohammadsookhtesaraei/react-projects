import type { ReactNode } from "react";

import Header from "../../components/Header/Header";

import ContactImg from "../../assets/images/contact.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = (): ReactNode => {
  return (
    <div>
      <Header />
      {/* contact-header */}
      <section className="bg-linear-to-tr from-[#fd6969] to-[#d82828] text-white text-center p-20 rounded-b-[50px]">
        <h1 className="text-3xl md:text-4xl mb-4">تماس با ما</h1>
        <p className="text-lg opacity-90">
          هر سوالی دارید خوشحال می شیم باما در ارتباط باشید
        </p>
      </section>
      {/* contact-content */}
      <section className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto py-16 px-4">
        {/* right */}
        <div className="flex-1 min-w-75 max-w-md rounded-xl">
          <img
            className="w-full object-cover h-75 rounded-2xl shadow-md"
            src={ContactImg}
            alt="تماس با ماما با فرنود"
          />
        </div>
        {/* left */}
        <div className="flex-1 flex flex-col gap-8">
          {/* form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-rose-600 mb-6">تماس باما</h2>
            <form className="flex flex-col">
              <label
                className="font-semibold mb-2 text-[#333]"
                htmlFor="userName"
              >
                نام
              </label>
              <input
                type="text"
                id="userName"
                className="border border-gray-300 rounded-2xl px-4 py-3 mb-4"
                placeholder="نام"
              />

              <label className="font-semibold mb-2 text-[#333]" htmlFor="email">
                ایمیل
              </label>
              <input
                type="text"
                id="email"
                className="border border-gray-300 rounded-2xl px-4 py-3 mb-4"
                placeholder="example@gmail.com"
              />

              <label className="font-semibold mb-2 text-[#333]" htmlFor="text">
                پیام
              </label>
              <textarea
                className="border border-gray-300 rounded-2xl px-4 py-3 "
                rows={8}
                id="text"
                placeholder="پیام خود را ارسال کنید"
              ></textarea>
              <button
                type="submit"
                className="p-2 self-start my-2 rounded-sm mx-2 shadow-sm cursor-pointer hover:scale-105 transition-transform duration-200 text-lg text-white bg-linear-to-r from-[#bd1e1e] to-[#940000]"
              >
                ارسال پیام
              </button>
            </form>
          </div>
          {/* box */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-rose-600 mb-6">
              اطلاعات تماس
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-red-600 text-xl" />
                ایمیل:example@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-600 text-xl" />
                تلفن:0911111111
              </li>
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-red-600 text-xl" />
                آدرس : تهران
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
