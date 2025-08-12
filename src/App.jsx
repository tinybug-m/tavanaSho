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
import { BestCoursesData, BlogPostsData, CoursesData } from "./utils/mockDatas";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-#fafafa flex flex-col gap-32 pb-24 pt-40">
        <MainMenu />

        <MainHero />

        <MainCarousel
          cardsData={CoursesData}
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          navigateType="buttons"
          slidesPerView={4}
        >
          <CourseCard />
        </MainCarousel>

        <GrowthPath />

        <MainCarousel
          cardsData={BestCoursesData}
          title="محبوب ترین دوره ها"
          desc="یادگیری و رشد توسعه فردی"
          navigateType="buttons"
          slidesPerView={3}
        >
          <TopCoursesCard />
        </MainCarousel>

        <Customers />

        <MainCarousel
          cardsData={BlogPostsData}
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
