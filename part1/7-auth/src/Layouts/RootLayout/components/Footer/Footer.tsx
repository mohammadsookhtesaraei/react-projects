import type { ReactNode } from "react"

type FooterProps={};

 const Footer = ({}:FooterProps):ReactNode => {

  const date=new Date().getFullYear();
  return (
    <footer className="bg-blue-400 text-center text-white py-4">
      <p>auth practice - &copy; {date}</p>
    </footer>
  );
}

export default Footer;
