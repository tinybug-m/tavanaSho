/**
 * Icons
 */
import ElementSVG from "../assets/icons/element.svg";
import Star from "../assets/icons/Star.svg";

/**
 *
 * Images
 */
import Qucation from "../assets/icons/qucation.svg";
import Customer0 from "../assets/Customer0.png";
import Customer1 from "../assets/Customer1.png";
import Customer2 from "../assets/Customer2.png";
import { useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 0,
      img: Customer0,
      message:
        "گذراندن دوره‌های توانا شو برای من یک نقطه عطف در حرفه‌ام بود. با یادگیری تکنیک‌های مذاکره و حل مسأله، توانستم به عنوان یک مدیر تیم عملکرد بهتری داشته باشم و پروژه‌ها را با کارایی بیشتری هدایت کنم. این دوره‌ها نه تنها دانش فنی، بلکه نگرش من به کار و زندگی را تغییر داد. حتماً توصیه می‌کنم کسانی که می‌خواهند در دنیای حرفه‌ای پیشرفت کنند، این دوره‌ها رو امتحان کنن.",
      date: "۱۴۰۳/۰۴/۰۷",
      score: 4,
    },
    {
      id: 1,
      img: Customer1,
      message:
        "شرکت در دوره‌های مهارت‌های پیشرفته برای من یک تجربه بی‌نظیر بود. اطلاعاتی که در زمینه مدیریت پروژه و رهبری تیم به دست آوردم، باعث شد تا نه تنها در شغلم پیشرفت کنم، بلکه توانستم روابط کاری بهتری بسازم و تصمیمات بهتری در پروژه‌ها بگیرم. پیشنهاد می‌کنم که هر کسی که به دنبال ارتقاء شغلی و بهبود مهارت‌های فردی است، این دوره‌ها رو از دست نده.",
      date: "۱۴۰۳/۰۸/۱۲",
      score: 5,
    },
    {
      id: 2,
      img: Customer2,
      message:
        "دوره‌های توانا شو به من کمک کرد تا دیدگاه جدیدی نسبت به کار و پیشرفت شغلی پیدا کنم. مهارت‌هایی که در زمینه ارتباطات مؤثر و مدیریت زمان آموختم، به من این امکان را داد تا در پروژه‌ها به شکلی مؤثرتر و با برنامه‌ریزی دقیق‌تر عمل کنم.نه تنها از نظر شغلی به رشد رسیدم، بلکه به اعتماد به نفس بالاتری در تصمیم‌گیری‌های روزمره دست یافتم. قطعاً پیشنهاد می‌کنم که هر کسی که به دنبال تغییرات مثبت در زندگی حرفه‌ای است،.",
      date: "۱۴۰۳/۰۹/۲۰",
      score: 4,
    },
  ]);

  const handleSortCustomers = (index) => {
    console.log(customers);

    const [selectedOne] = customers.splice(index, 1); // Remove the selected customer
    setCustomers([selectedOne, ...customers]); // Add the selected customer at the front
    console.log(customers);
  };
  return (
    <div className=" flex justify-between">
      <div className="w-5/12 flex">
        {/*  */}
        <div className="stack stack-start">
          {customers.map((customer, index) => {
            return (
              <img
                src={customer.img}
                key={`customer_${customer.id}`}
                className="transition-all hover:-translate-y-4 cursor-pointer h-auto"
                onClick={() => handleSortCustomers(index)}
                style={{
                  transform: `rotate(${index * 5}deg) translateX(${
                    index * 20
                  }px)`, // Combine both rotate and translateX
                }}
                alt="Customer 0 Image"
              />
            );
          })}
        </div>
      </div>
      <div className="w-7/12 flex flex-col relative gap-6">
        <img src={Qucation} className="w-16" alt="Qucation Icon" />
        <p className="text-3xl">{customers[0].message}</p>
        <div className="flex justify-between">
          <div className="flex">
            {/* {[
              ...Array().map((_, index) => (
                <img src={Star} alt="Star Icon" key={index} />
              )),
            ]} */}
            {[...Array(customers[0].score)].map((_, index) => (
              <img src={Star} alt="Star Icon" key={index} />
            ))}
          </div>
          <p className="text-2xl text-gray-600">۱۴۰۳/۰۴/۰۶</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
