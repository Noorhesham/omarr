import HeroSection from "./component/HeroSection";
import HorizontalScroll from "./component/ScrollSnap";
import InfiniteTechStack from "./component/IfinteTechStack";
import constants from "./constants";

import InfinteTitle from "./component/InfinteTitle";
import MaxWidthWrapper from "./component/MaxWidthWrapper";
import OverlappingSlider from "./component/Overlapslider";
import AboutMe from "./component/AboutMe";
import Hero2 from "./component/Hero2";
const { projects,SERVICES, TECH,  } = constants;
/*
hero section
tech stack
email
array of projects 
slider optimization
logo
 */
export default function Home() {
  return (
    <section>
      {/*  رقم 1 ده سكشن البداية 
      videoFallbackSrc الصورة الي هتظهر مكان الفيديو لو النت ضعيف او الفيديو مش متوفر 
      title , subtitle buttonText  ال 3 تحت بعض 
      mediaSrc مكان الفيديو 
      video :
      انسخ الكود ده 
            <HeroSection
        videoFallbackSrc="/hell-foto.png.webp"
        title="Hey my name is noor"
        subtitle="i am backend developer"
        buttonText="Contact use"
        mediaSrc="/hell.mp4"
        mediaType="video"
      />
      نهاية سكشن الفيديو

      fullImage:
           لصورة كاملة بدل الفيديو انسخ الكود ده 
           <HeroSection
        title="Hey my name is noor"
        subtitle="i am backend developer"
        buttonText="Contact use"
        mediaSrc="/palestine1.png"
        mediaType="image"
      />
            نهاية سكشن الصورة

      imagePart:
                 لصورة واخده جزء بس  بدل الفيديو انسخ الكود ده 

     <HeroSection
        title="Hey my name is noor"
        subtitle="i am backend developer"
        buttonText="Contact use"
        mediaSrc="/palestine1.png"
        mediaType="image"
        full={false}
        mediaPosition="left"
      />
                  نهاية سكشن الصورة التاني

      */}
      <HeroSection
        videoFallbackSrc="/hell-foto.png.webp"
        title="Hey my name is Omar"
        subtitle="i am AI Engineer"
        buttonText="Contact use"
        mediaSrc="/hell.mp4"
        mediaType="video"
      />
  
      <img src="/service-line.png" alt="" />
      <HorizontalScroll paragraph="i am fullstack web developer and i like designing 3d models" items={SERVICES} />
      <img src="/service-line.png" alt="" />
      {/*  حدد العنوان وتقدر تكنسل الانيمشن لو كتبت  cancelAnimation  */}


      {/* ده سكشن اضافه المشاريع 
      types 
      بتاخد اوبجكيت 
      {}
      جواه حاجتين
      category  المشاريع دي 
      items المشاريع نفسها
      slidesPerView: في كم سلايد ظاهره في المره الاحده 
      height طول الصورة
      autoplay هل يشتغل بشكل تلقائي ولالا
      loop عاوزه يفضل يلوب لما يخلص ويتعاد من الاول ولالا 
      بو اه سيبه لو مشعاوز اعمل 
      loop={false} او autoplay={false}
      */}
      <OverlappingSlider
        slidesPerView={2}
        height={" h-44"}
        types={[
          {
            category: "My projects",
            items: projects,
          },
        ]}
        title="My projects"
      />

      {/* ده سكشن أنا مين  */}

      <AboutMe
        name="Noor"
        img="/channels4_profile (3).jpg"
        height=" h-64 lg:h-96"
        text=" lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
      />
    </section>
  );
}
