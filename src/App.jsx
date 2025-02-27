/**
 * Components
 */
import MainCarousel from "./components/MainCarousel";
import GrowthPath from "./components/GrowthPath";
import MainHero from "./components/MainHero";
import MainMenu from "./components/MainMenu";

import CourseCard from "./components/Courses/CourseCard";
import TopCoursesCard from "./components/Courses/TopCoursesCard";
import Customers from "./components/Customers";
import BlogCard from "./components/Courses/BlogCard";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

/**
 * Datas
 */
const CoursesData = [
  {
    id: 1,
    title: "فن بیان در محیط کار",
    img: "./images/Courses/4.png",
    description:
      "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "زهرا موحدی",
    discount: 50, // 50% discount
    rate: 5.0,
    enrolled: 944,
    price: 2745000, // Original price
    discountedPrice: 1372500, // After discount
  },
  {
    id: 2,
    title: "۲۰ فنون مشاوره",
    img: "./images/Courses/4.png",
    description:
      "در مورد مشاورانی که به مراجعان خود راه حل هایی ارائه می دهند، مسائل و مشکلات بسیاری وجود دارد.",
    teacher: "ابراهیم ثانی",
    discount: 50,
    rate: 5.0,
    enrolled: 563,
    price: 3984000,
    discountedPrice: 1992000,
  },
  {
    id: 3,
    title: "تاثیر موسیقی روی مغز",
    img: "./images/Courses/4.png",
    description:
      "پدیده ای به نام هرس سیناپس وجود دارد که با افزایش سن رخ می دهد. سیناپس ها ارتباط بین نورون های مغز شما هستند.",
    teacher: "آرش رضایی",
    discount: 50,
    rate: 5.0,
    enrolled: 753,
    price: 2345000,
    discountedPrice: 1172500,
  },
  {
    id: 4,
    title: "۱۲ فنون مذاکره در محیط کار",
    img: "./images/Courses/4.png",
    description:
      "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "مهرشاد حسینی",
    discount: 50,
    rate: 5.0,
    enrolled: 703,
    price: 3198000,
    discountedPrice: 1599000,
  },
  {
    id: 5,
    title: "۱۲ فنون مذاکره در محیط کار",
    img: "./images/Courses/4.png",
    description:
      "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "مهرشاد حسینی",
    discount: 50,
    rate: 5.0,
    enrolled: 703,
    price: 3198000,
    discountedPrice: 1599000,
  },
  {
    id: 6,
    title: "۱۲ فنون مذاکره در محیط کار",
    img: "./images/Courses/4.png",
    description:
      "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "مهرشاد حسینی",
    discount: 50,
    rate: 5.0,
    enrolled: 703,
    price: 3198000,
    discountedPrice: 1599000,
  },
  {
    id: 7,
    title: "۱۲ فنون مذاکره در محیط کار",
    img: "./images/Courses/4.png",
    description:
      "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "مهرشاد حسینی",
    discount: 50,
    rate: 5.0,
    enrolled: 703,
    price: 3198000,
    discountedPrice: 1599000,
  },
];
const BestCoursesData = [
  {
    id: 1,
    title: "رویکرد شناختی رفتاری در اتاق درمان",
    img: "./images/TopCourses/TopCourse0.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
  {
    id: 2,
    title: "برنامه ریزی در پیشبرد اهداف",
    img: "./images/TopCourses/TopCourse1.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 144,
    teacher: "رضا ارش نیا",
    lastStudent: "محسن آرش نیا",
  },
  {
    id: 3,
    title: "آموزش کوچینگ و توسعه فردی",
    img: "./images/TopCourses/TopCourse2.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
  {
    id: 1,
    title: "رویکرد شناختی رفتاری در اتاق درمان",
    img: "./images/TopCourses/TopCourse0.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
  {
    id: 2,
    title: "برنامه ریزی در پیشبرد اهداف",
    img: "./images/TopCourses/TopCourse1.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 144,
    teacher: "رضا ارش نیا",
    lastStudent: "محسن آرش نیا",
  },
  {
    id: 3,
    title: "آموزش کوچینگ و توسعه فردی",
    img: "./images/TopCourses/TopCourse2.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  }
];
const BlogPostsData = [
  {
    id: 0,
    img: "./images/blogs/blog0.png",
    title: "تکنیک های روان درمانی",
    desc: "يكى از مسائل مهم و ضرورى براى مشاوران، آگاهى از فنون گوناگون مشاوره و يادگيرى آنها مى‏باشد. تنوع مشكلات و روحيات مراجعان به قدرى است",
    author: "اکبر رضایی",
    date: "۱۴۰۳/۰۸/۲۴",
  },
  {
    id: 1,
    img: "./images/blogs/blog1.png",
    title: "مهارت های سخت مشاوره",
    desc: "اولین گام در کمک به مراجع یا مراجعان در جلسات مشاوره برقراری رابطه است . اما نوع رابطه ای که در جلسات مشاوره منظور است با روابط خارج از این جلسه متفاوت است . طبیعتاً جنس این رابطه از جنس رابطه یاورانه است",
    author: "محمد حسینی",
    date: "۱۴۰۳/۰۴/۲۴",
  },
  {
    id: 2,
    img: "./images/blogs/blog2.png",
    title: "تاثیر عادت ها بر سیناپس",
    desc: "در سال 2007، محققان دانشگاه آکسفورد شروع به بررسی مغز نوزادان کردند. چیزی که آنها یافتند، شگفت‌انگیز بود پس از مقایسهه مغز کودکان با",
    author: "علی اکبری",
    date: "۱۴۰۳/۰۵/۱۴",
  },
  {
    id: 3,
    img: "./images/blogs/blog3.png",
    title: "مهارت های نرم مشاوره",
    desc: "برخی مشاوران مبتدی مشتاق هستند تا به مراجعان خود از طریق نصیحت کردن کمک کنند. آن ها راهنمایی مراجعان به مسیر درست و حل کردن مشکل آنان را مسئولیت خود می دانند. آن ها به خاطر تخصص در زمینهه رشد و رفتار انسان انتظار دارند",
    author: "ارشیا زنجانی",
    date: "۱۴۰۳/۰۸/۲۴",
  },
  {
    id: 1,
    img: "./images/blogs/blog1.png",
    title: "مهارت های سخت مشاوره",
    desc: "اولین گام در کمک به مراجع یا مراجعان در جلسات مشاوره برقراری رابطه است . اما نوع رابطه ای که در جلسات مشاوره منظور است با روابط خارج از این جلسه متفاوت است . طبیعتاً جنس این رابطه از جنس رابطه یاورانه است",
    author: "محمد حسینی",
    date: "۱۴۰۳/۰۴/۲۴",
  },
  {
    id: 2,
    img: "./images/blogs/blog2.png",
    title: "تاثیر عادت ها بر سیناپس",
    desc: "در سال 2007، محققان دانشگاه آکسفورد شروع به بررسی مغز نوزادان کردند. چیزی که آنها یافتند، شگفت‌انگیز بود پس از مقایسهه مغز کودکان با",
    author: "علی اکبری",
    date: "۱۴۰۳/۰۵/۱۴",
  },
  {
    id: 3,
    img: "./images/blogs/blog3.png",
    title: "مهارت های نرم مشاوره",
    desc: "برخی مشاوران مبتدی مشتاق هستند تا به مراجعان خود از طریق نصیحت کردن کمک کنند. آن ها راهنمایی مراجعان به مسیر درست و حل کردن مشکل آنان را مسئولیت خود می دانند. آن ها به خاطر تخصص در زمینهه رشد و رفتار انسان انتظار دارند",
    author: "ارشیا زنجانی",
    date: "۱۴۰۳/۰۸/۲۴",
  },
];

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-#fafafa flex flex-col gap-32 pb-24 pt-40">
        <MainMenu />

        <MainHero />

        <MainCarousel
          data={CoursesData}
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          navigateType="buttons"
          slidesPerView={4}
        >
          <CourseCard />
        </MainCarousel>

        <GrowthPath />

        <MainCarousel
          data={BestCoursesData}
          title="محبوب ترین دوره ها"
          desc="یادگیری و رشد توسعه فردی"
          navigateType="buttons"
          slidesPerView={3}
        >
          <TopCoursesCard />
        </MainCarousel>

        <Customers />

        <MainCarousel
          data={BlogPostsData}
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          slidesPerView={4}
        >
          <BlogCard />
        </MainCarousel>

        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
