import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import Cart from "@/components/BlogCart";
import HomePage5 from "@/components/HomePage5";
import HomeSection6 from "@/components/HomeSection6";
import AboutPage from "@/components/HomeAbout";

export default function Home() {
  return (
    <>
      {/* <main className="flex flex-col"> */}
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <AboutPage />
        <Cart />
        <HomePage5 />
        <HomeSection6 />
      {/* </main> */}
    </>
  );
}
