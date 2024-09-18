import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ToggleChangeTheme } from "../ToggleChangeTheme/ToggleChangeTheme";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {};

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const Header = (props: Props) => {
  return (
    <header
      className="sticky top-0 bg-light-background dark:bg-dark-background border-b border-white border-opacity-15"
      style={{ zIndex: "99999" }}
    >
      <div className="container">
        <div className="header_content flex items-center gap-4 justify-between px-4 md:px-6  h-16">
          <div className="flex items-center gap-4 md:gap-2 lg:gap-4 ">
            <Link href={"/"}>
              <Image src="/logo-light.png" width={40} height={40} alt="logo" />
            </Link>
          </div>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 py-3 px-5 nav_layout rounded-3xl">
            <Link
              href="/"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Project
            </Link>
            <Link
              href="#"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Blog
            </Link>
          </nav>
          <ToggleChangeTheme />
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Customers
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
