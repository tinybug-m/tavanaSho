import MainCarousel from './components/MainCarousel';
import GrowthPath from './components/GrowthPath';
import MainHero from './components/MainHero';
import MainMenu from './components/MainMenu';
import CourseCard from './components/Courses/CourseCard';
import TopCoursesCard from './components/Courses/TopCoursesCard';
import Customers from './components/Customers';
import BlogCard from './components/Courses/BlogCard';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import {
  BestCoursesData,
  BestCoursesDataProps,
  BlogCardDataProps,
  BlogPostsData,
  CoursesCardDataProps,
  CoursesData,
} from './utils/mockDatas';

function App() {
  return (
    <>
      <div className="max-w-screen-xl px-2 md:px-0 overflow-hidden md:overflow-visible mx-auto bg-#fafafa flex flex-col gap-16 md:gap-32 pb-24 pt-20 md:pt-40">
        <MainMenu />

        <MainHero />

        <MainCarousel
          cardsData={CoursesData}
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          navigateType="buttons"
          breakPoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          renderItem={(props: CoursesCardDataProps) => <CourseCard props={props} />}
        />

        <GrowthPath />

        <MainCarousel
          cardsData={BestCoursesData}
          title="محبوب ترین دوره ها"
          desc="یادگیری و رشد توسعه فردی"
          navigateType="buttons"
          breakPoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          renderItem={(props: BestCoursesDataProps) => <TopCoursesCard props={props} />}
        />

        <Customers />

        <MainCarousel
          cardsData={BlogPostsData}
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          breakPoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          renderItem={(props: BlogCardDataProps) => <BlogCard props={props} />}
        />

        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
