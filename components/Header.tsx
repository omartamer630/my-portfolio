import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className=" py-8 xl:py-12 text-white ">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
          {/* Logo */}
          <h1 className="text-4xl font-semibold">
            Ali<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="flex xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
