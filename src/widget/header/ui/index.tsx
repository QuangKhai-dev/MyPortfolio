import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SLUG } from "@/constant/slug";
import { ToggleChangeTheme } from "@/features/theme/ui/toggle-change-theme";

const Header = () => {
  return (
    <header
      className="sticky top-0 bg-light-background dark:bg-dark-background border-b border-white border-opacity-15"
      style={{ zIndex: "99999" }}
    >
      <div className="container">
        <div className="header_content flex items-center gap-4 justify-between px-0 sm:px-4 md:px-6 h-16">
          <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
            <Link href="/">
              <Image
                src="/logo-light.png"
                width={40}
                height={40}
                alt="logo"
                fetchPriority="high"
              />
            </Link>
          </div>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 py-3 px-5 rounded-3xl">
            <Link
              href={`/${SLUG.BLOG}`}
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Hiring me
            </Link>
            <Link
              href="#"
              className="hover:text-yellow-theme transition-colors"
              prefetch={false}
            >
              Top Repo Github
            </Link>
          </nav>
          <ToggleChangeTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
