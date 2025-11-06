import BounceCards from "@/components/BounceCard";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";

const images = [
  "https://s6.uupload.ir/files/کارت_پستال_های_مدرسه-01_vth8.jpg",
  "https://s6.uupload.ir/files/کارت_پستال_های_مدرسه-35_dv3g.jpg",
  "https://s6.uupload.ir/files/کارت_پستال_های_مدرسه-29_rml.jpg",
  "https://s6.uupload.ir/files/کارت_پستال_های_مدرسه-15_8i2p.jpg",
  "https://s6.uupload.ir/files/کارت_پستال_های_مدرسه-08_7a46.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-center ">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-40 py-10 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/asset2.svg"
            alt="vfd"
            width={350}
            height={300}
            className="w-64 md:w-80 lg:w-[450px] h-auto"
          />
          <p className="font-black text-2xl md:text-3xl mt-4">
            جایی که ایده‌هات جون می‌گیرن!
          </p>
        </div>

        <Image
          src="/images/asset.svg"
          alt="fkmdl"
          width={350}
          height={300}
          className="w-64 md:w-80 lg:w-[450px] h-auto"
        />
      </div>

      {/* Bounce Cards Section */}
      <div className="my-10 mt- w-full flex justify-center px-4">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={100}
          containerHeight={180}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>

      {/* About Text Section */}
       <Link  href={"/gallery"} className="mt-10 bg-red-800 text-white  px-10 py-3 rounded-2xl text-3xl hover:scale-105 transition-all 2s">
        مشاهده تمام نمونه کارها
      </Link>
      <div>
        <Image
          src={"/texr.svg"}
          width={1000}
          height={200}
          alt="ds"
          className="pt-10 "
        />
      </div>
      <div className="flex flex-col items-center max-w-4xl px-6 text-center text-sm leading-relaxed ">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          خانه‌ی دوست جاییه برای حرف‌های دل، برای اونایی که هنوز به حس واقعی
          نوشتن باور دارن. اینجا کارت‌پستال فقط یه تیکه کاغذ نیست، یه یادِ قشنگه
          از احساس، دلتنگی یا عشق. ما کارت‌پستال‌هایی می‌سازیم که قراره ساده ولی
          از تهِ دل، حالِ خوب برسونن.
        </ScrollReveal>
      </div>
    </div>
  );
}
