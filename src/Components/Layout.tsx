import {ReactNode} from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
