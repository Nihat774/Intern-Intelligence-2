import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import Cart from "@/components/BlogCart";
import HomePage5 from "@/components/HomePage5";
import HomeSection6 from "@/components/HomeSection6";
import AboutPage from "@/components/HomeAbout";
import ScrollAnimation from "@/animation";

export default function Home() {
  return (
    <>
      {/* <main className="flex flex-col"> */}
      <ScrollAnimation>
        <HomeSection1 />
      </ScrollAnimation>
      <ScrollAnimation>
        <HomeSection2 />
      </ScrollAnimation>
      <ScrollAnimation>
        <HomeSection3 />
      </ScrollAnimation>
      <ScrollAnimation>
        <HomeSection4 />
      </ScrollAnimation>
      <ScrollAnimation>
        <AboutPage />
      </ScrollAnimation>

      <Cart />

      <ScrollAnimation>
        <HomePage5 />
      </ScrollAnimation>
      <ScrollAnimation>
        <HomeSection6 />
      </ScrollAnimation>
      {/* </main> */}
    </>
  );
}
