import type { ReactNode } from "react"

type FooterProps={};

 const Footer = ({}:FooterProps):ReactNode => {
  const date=new Date().getFullYear()
  return (
    <footer className="py-10 bg-blue-400 text-white flex items-center justify-center">
      <p>developed by me &copy;-{date}</p>
    </footer>
  );
}

export default Footer;
