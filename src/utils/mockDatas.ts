type defaultCardType = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

export type CoursesCardDataProps = defaultCardType & {
  teacher: string;
  discount?: number;
  rate: number;
  enrolled: number;
  price: number;
  discountedPrice: number;
};

export type BestCoursesDataProps = defaultCardType & {
  date: string;
  enrolled: number;
  teacher: string;
  lastStudent: string;
};

export type BlogCardDataProps = defaultCardType & {
  teacher: string;
  date: string;
};

export const CoursesData: CoursesCardDataProps[] = [
  {
    id: 1,
    title: "فن بیان در محیط کار",
    img: "./images/Courses/4.png",
    desc: "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "زهرا موحدی",
    discount: 50,
    rate: 5.0,
    enrolled: 944,
    price: 2745000,
    discountedPrice: 1372500,
  },
  {
    id: 2,
    title: "۲۰ فنون مشاوره",
    img: "./images/Courses/4.png",
    desc: "در مورد مشاورانی که به مراجعان خود راه حل هایی ارائه می دهند، مسائل و مشکلات بسیاری وجود دارد.",
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
    desc: "پدیده ای به نام هرس سیناپس وجود دارد که با افزایش سن رخ می دهد. سیناپس ها ارتباط بین نورون های مغز شما هستند.",
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
    desc: "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
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
    desc: "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
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
    desc: "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
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
    desc: "در این دوره مهارت‌های لازم برای رسیدن به توافقات موفق و حرفه‌ای را کسب کنید.",
    teacher: "مهرشاد حسینی",
    discount: 50,
    rate: 5.0,
    enrolled: 703,
    price: 3198000,
    discountedPrice: 1599000,
  },
];

export const BestCoursesData: BestCoursesDataProps[] = [
  {
    id: 1,
    title: "رویکرد شناختی رفتاری در اتاق درمان",
    desc: "",
    img: "./images/TopCourses/TopCourse0.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
  {
    id: 2,
    title: "برنامه ریزی در پیشبرد اهداف",
    desc: "",
    img: "./images/TopCourses/TopCourse1.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 144,
    teacher: "رضا ارش نیا",
    lastStudent: "محسن آرش نیا",
  },
  {
    id: 3,
    title: "آموزش کوچینگ و توسعه فردی",
    desc: "",
    img: "./images/TopCourses/TopCourse2.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
  {
    id: 4,
    title: "رویکرد شناختی رفتاری در اتاق درمان",
    desc: "",
    img: "./images/TopCourses/TopCourse0.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
  {
    id: 5,
    title: "برنامه ریزی در پیشبرد اهداف",
    desc: "",
    img: "./images/TopCourses/TopCourse1.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 144,
    teacher: "رضا ارش نیا",
    lastStudent: "محسن آرش نیا",
  },
  {
    id: 6,
    title: "آموزش کوچینگ و توسعه فردی",
    desc: "",
    img: "./images/TopCourses/TopCourse2.png",
    date: "۱۴۰۳/۰۷/۱۷",
    enrolled: 154,
    teacher: "مهرشاد رضایی",
    lastStudent: "مهرشاد رضایی",
  },
];
export const BlogPostsData: BlogCardDataProps[] = [
  {
    id: 0,
    img: "./images/blogs/blog0.png",
    title: "تکنیک های روان درمانی",
    desc: "يكى از مسائل مهم و ضرورى براى مشاوران، آگاهى از فنون گوناگون مشاوره و يادگيرى آنها مى‏باشد. تنوع مشكلات و روحيات مراجعان به قدرى است",
    teacher: "اکبر رضایی",
    date: "۱۴۰۳/۰۸/۲۴",
  },
  {
    id: 1,
    img: "./images/blogs/blog1.png",
    title: "مهارت های سخت مشاوره",
    desc: "اولین گام در کمک به مراجع یا مراجعان در جلسات مشاوره برقراری رابطه است . اما نوع رابطه ای که در جلسات مشاوره منظور است با روابط خارج از این جلسه متفاوت است . طبیعتاً جنس این رابطه از جنس رابطه یاورانه است",
    teacher: "محمد حسینی",
    date: "۱۴۰۳/۰۴/۲۴",
  },
  {
    id: 2,
    img: "./images/blogs/blog2.png",
    title: "تاثیر عادت ها بر سیناپس",
    desc: "در سال 2007، محققان دانشگاه آکسفورد شروع به بررسی مغز نوزادان کردند. چیزی که آنها یافتند، شگفت‌انگیز بود پس از مقایسهه مغز کودکان با",
    teacher: "علی اکبری",
    date: "۱۴۰۳/۰۵/۱۴",
  },
  {
    id: 3,
    img: "./images/blogs/blog3.png",
    title: "مهارت های نرم مشاوره",
    desc: "برخی مشاوران مبتدی مشتاق هستند تا به مراجعان خود از طریق نصیحت کردن کمک کنند. آن ها راهنمایی مراجعان به مسیر درست و حل کردن مشکل آنان را مسئولیت خود می دانند. آن ها به خاطر تخصص در زمینهه رشد و رفتار انسان انتظار دارند",
    teacher: "ارشیا زنجانی",
    date: "۱۴۰۳/۰۸/۲۴",
  },
  {
    id: 4,
    img: "./images/blogs/blog1.png",
    title: "مهارت های سخت مشاوره",
    desc: "اولین گام در کمک به مراجع یا مراجعان در جلسات مشاوره برقراری رابطه است . اما نوع رابطه ای که در جلسات مشاوره منظور است با روابط خارج از این جلسه متفاوت است . طبیعتاً جنس این رابطه از جنس رابطه یاورانه است",
    teacher: "محمد حسینی",
    date: "۱۴۰۳/۰۴/۲۴",
  },
  {
    id: 5,
    img: "./images/blogs/blog2.png",
    title: "تاثیر عادت ها بر سیناپس",
    desc: "در سال 2007، محققان دانشگاه آکسفورد شروع به بررسی مغز نوزادان کردند. چیزی که آنها یافتند، شگفت‌انگیز بود پس از مقایسهه مغز کودکان با",
    teacher: "علی اکبری",
    date: "۱۴۰۳/۰۵/۱۴",
  },
  {
    id: 6,
    img: "./images/blogs/blog3.png",
    title: "مهارت های نرم مشاوره",
    desc: "برخی مشاوران مبتدی مشتاق هستند تا به مراجعان خود از طریق نصیحت کردن کمک کنند. آن ها راهنمایی مراجعان به مسیر درست و حل کردن مشکل آنان را مسئولیت خود می دانند. آن ها به خاطر تخصص در زمینهه رشد و رفتار انسان انتظار دارند",
    teacher: "ارشیا زنجانی",
    date: "۱۴۰۳/۰۸/۲۴",
  },
];

export const CUSTOMERS_MOCK_DATA = [
  {
    id: 0,
    img: "images/Customer0.png",
    message:
      "گذراندن دوره‌های توانا شو برای من یک نقطه عطف در حرفه‌ام بود. با یادگیری تکنیک‌های مذاکره و حل مسأله، توانستم به عنوان یک مدیر تیم عملکرد بهتری داشته باشم و پروژه‌ها را با کارایی بیشتری هدایت کنم. این دوره‌ها نه تنها دانش فنی، بلکه نگرش من به کار و زندگی را تغییر داد. حتماً توصیه می‌کنم کسانی که می‌خواهند در دنیای حرفه‌ای پیشرفت کنند، این دوره‌ها رو امتحان کنن.",
    date: "۱۴۰۳/۰۴/۰۷",
    score: 4,
  },
  {
    id: 1,
    img: "images/Customer1.png",
    message:
      "شرکت در دوره‌های مهارت‌های پیشرفته برای من یک تجربه بی‌نظیر بود. اطلاعاتی که در زمینه مدیریت پروژه و رهبری تیم به دست آوردم، باعث شد تا نه تنها در شغلم پیشرفت کنم، بلکه توانستم روابط کاری بهتری بسازم و تصمیمات بهتری در پروژه‌ها بگیرم. پیشنهاد می‌کنم که هر کسی که به دنبال ارتقاء شغلی و بهبود مهارت‌های فردی است، این دوره‌ها رو از دست نده.",
    date: "۱۴۰۳/۰۸/۱۲",
    score: 5,
  },
  {
    id: 2,
    img: "images/Customer2.png",
    message:
      "دوره‌های توانا شو به من کمک کرد تا دیدگاه جدیدی نسبت به کار و پیشرفت شغلی پیدا کنم. مهارت‌هایی که در زمینه ارتباطات مؤثر و مدیریت زمان آموختم، به من این امکان را داد تا در پروژه‌ها به شکلی مؤثرتر و با برنامه‌ریزی دقیق‌تر عمل کنم.نه تنها از نظر شغلی به رشد رسیدم، بلکه به اعتماد به نفس بالاتری در تصمیم‌گیری‌های روزمره دست یافتم. قطعاً پیشنهاد می‌کنم که هر کسی که به دنبال تغییرات مثبت در زندگی حرفه‌ای است،.",
    date: "۱۴۰۳/۰۹/۲۰",
    score: 4,
  },
];

export const APP_PAGES = [
  "ارتباط با ما",
  "تماس با ما",
  "مقالات",
  "خدمات تواناشو",
  "دوره ها",
];

export type MenuItemsProps = {
  title: string;
  sub?: string[];
};

export const MENU_ITEMS: MenuItemsProps[] = [
  {
    title: "دوره ها",
    sub: [
      "خودشناسی",
      "هوش هیچانی در روابط",
      "هوش اجتماعی در مجیط کار",
      "روابط عاشقانه",
    ],
  },
  {
    title: "مقالات آموزشی",
    sub: ["خودشناسی", "هوش هیجانی", "هوش اجتماعی", "روابط عاشقانه"],
  },
  {
    title: "آزمون ها",
    sub: ["scl 90", "آزمون mmpi", "آزمون mbti"],
  },
  { title: "درباره ما" },
];
