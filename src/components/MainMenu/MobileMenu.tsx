import { ProfileIcon } from "../../assets/icons";
import { MENU_ITEMS } from "../../utils/mockDatas";

const MobileMenu = () => {
  return (
    <div className="lg:hidden px-4 pb-4 space-y-4">
      <ul className="menu bg-base-100 rounded-box">
        {MENU_ITEMS.map((item, idx) =>
          item.sub ? (
            <li key={idx}>
              <details>
                <summary>{item.title}</summary>
                <ul>
                  {item.sub.map((s, i) => (
                    <li key={i}>
                      <a>{s}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={idx}>
              <a>{item.title}</a>
            </li>
          )
        )}
      </ul>

      {/* Mobile Search */}
      <label className="input rounded-full bg-gray-100 border-0 px-4 h-12 w-full flex items-center">
        <input
          type="search"
          placeholder="چی میخوای یاد بگیری ؟"
          className="flex-1 peer bg-transparent outline-none"
        />
        <svg
          className="h-6 opacity-50 transition-transform peer-focus:scale-120"
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
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </label>

      {/* Mobile Profile */}
      <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-950">
        <ProfileIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
