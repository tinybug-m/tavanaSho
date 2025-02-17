/**
 * Icons
 */
import ElementSVG from "../assets/icons/element.svg";

/**
 *
 * Images
 */
import RoadMap from "../assets/roadmap.png";
const GrowthPath = () => {
  return (
    <div className="lg:px-16 flex">
      <div className="w-6/12 flex flex-col relative">
        <div>
          <img
            src={ElementSVG}
            className="absolute -top-5 -right-5 -z-10"
            alt="backdrop"
          />
          <h2 className="font-bold font-size text-3xl">مسیر رشد</h2>
          <p className="font-light mb-8 text-2xl text-gray-600">
            در مسیر رشد شخصی هیچ‌کس تنها نیست
          </p>
        </div>

        <h4 className="text-2xl mb-8 leading-relaxed">
          هر روز با محتوای آموزشی، ابزارهای کاربردی و راهنمایی‌های تخصصی همراه
          شما خواهیم بود تا در مسیر موفقیت و پیشرفت قدم بردارید. همین حالا عضو
          شو و اولین قدم رو برای ساخت آینده‌ای بهتر بردار!
        </h4>

        <div className="join">
          <div className="relative h-14 min-w-xs">
            <label className="input validator join-item pr-28 rounded-3xl dir-ltr h-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="baharfatemi@example.ir"
                required
              />
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </label>
            <button className="btn btn-neutral join-item w-28 absolute right-0 top-0 h-full rounded-3xl">
              عضویت
            </button>
          </div>
        </div>
      </div>
      <div className="w-6/12 flex justify-end">
        <img src={RoadMap} alt="RoadMap Image" />
      </div>
    </div>
  );
};

export default GrowthPath;
