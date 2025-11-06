import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-32 flex items-center justify-between px-40  py-2 overflow-hidden">
      {/* تصویر بکگراند */}
      <Image
        src="/aaa.png"
        alt="Header background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* محتوای هدر */}
      <button>
        <Link
          href="/gallery"
          className="text-blue-950 text-xl hover:bg-white/30 transition-all duration-300 p-2 rounded-2xl"
        >
          نمونه کارها
        </Link>
      </button>

      <Image src="/logo.svg" alt="friends house logo" width={70} height={100} />

      <button>
        <Link
          href="/profile"
          className="text-blue-950 text-xl hover:bg-white/30 transition-all duration-300 p-2 rounded-2xl"
        >
          درباره ما
        </Link>
      </button>
    </div>
  );
};

export default Header;
