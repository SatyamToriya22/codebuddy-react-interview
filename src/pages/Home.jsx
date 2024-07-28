import { useRef, useState } from "react";
import { CARROUSEL_DATA, LANGUAGE_TEXT_CONSTANTS, TEXT_CONSTANTS } from "./constants";
import "./home.css";
import { useMediaQuery } from "react-responsive";
import HamburgerMenuTemplate from "./hamburgerMenu";
import { Icon } from "@iconify/react/dist/iconify.js";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileBreakpoint = useMediaQuery({ query: "(max-width: 600px)" });
  const carrousel = useRef();
  let scrollUpto;

  const handleCarrouselLeftBtn = () => {
    if (mobileBreakpoint) scrollUpto = 280;
    else scrollUpto = 550;
    carrousel.current.scrollLeft -= scrollUpto;
  };

  const handleCarrouselRightBtn = () => {
    if (mobileBreakpoint) scrollUpto = 280;
    else scrollUpto = 550;
    carrousel.current.scrollLeft += scrollUpto;
  };

  const handleMenuIcon = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-base">
      <nav className="navbar">
        <div className="navbar-top items-center sm:flex">
          <img src="images/nav-ms-logo.png" alt="Microsoft Bing" className="navbar-ms-logo h-8" />
          <div className="flex text-sm ">
            <ul className="nav-top-list">
              <li className="nav-top-list-items">
                <a href="#" className="flex items-center">
                  <img
                    src="images/nav-copilot-logo.png"
                    alt="Copilot"
                    className="navbar-copilot-logo mr-1 h-8"
                  />
                  {TEXT_CONSTANTS.COPILOT}
                </a>
              </li>
              <li className="nav-top-list-items">
                <a href="#">{TEXT_CONSTANTS.IMAGES}</a>
              </li>
              <li className="nav-top-list-items">
                <a href="#">{TEXT_CONSTANTS.VIDEOS}</a>
              </li>
              <li className="nav-top-list-items">
                <a href="#">{TEXT_CONSTANTS.SHOPPING}</a>
              </li>
              <li className="nav-top-list-items">
                <a href="#">{TEXT_CONSTANTS.MAPS}</a>
              </li>
              <li className="nav-top-list-items">
                <a href="#">{TEXT_CONSTANTS.NEWS}</a>
              </li>
              <li className="nav-top-list-items">
                <a href="#">{TEXT_CONSTANTS.TRIPLE_DOT}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-bottom items-center text-sm ">
          <ul className="nav-bottom-list">
            <li className="nav-bottom-list-items">
              <div className="flex items-center">
                <span>{TEXT_CONSTANTS.BENGALURU_EAST}</span>
                <Icon
                  icon="meteocons:thunderstorms-day-snow-fill"
                  height={38}
                  className="ml-2 mr-1"
                />
                <span>{TEXT_CONSTANTS.TWENTY_SEVEN}</span>
              </div>
            </li>
            <li className="nav-bottom-list-items">
              <a href="#" className="flex items-center">
                {TEXT_CONSTANTS.SIGN_IN}
                <Icon icon="teenyicons:user-circle-solid" height={24} className="ml-2" />
              </a>
            </li>
            <li className="nav-bottom-list-items">
              <a href="#" className="flex items-center">
                {TEXT_CONSTANTS.THREE}
                <Icon icon="pepicons-print:trophy-circle" height={24} className="ml-2" />
              </a>
            </li>
            <li className="nav-bottom-list-items">
              <a href="#" className="flex items-center">
                {TEXT_CONSTANTS.MOBILE}
                <Icon icon="circum:mobile-3" height={26} className="ml-2" />
              </a>
            </li>
            <li className="nav-bottom-list-items relative">
              <button onClick={handleMenuIcon}>
                <img src="images/nav-menu_icon.png" alt="Menu" className="mt-3 h-6" />
              </button>
              {menuOpen ? <HamburgerMenuTemplate /> : null}
            </li>
          </ul>
        </div>
      </nav>

      <main className="search-box-conatainer mt-14 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="relative">
            <button className="absolute left-4 top-4">
              <Icon icon="teenyicons:search-outline" height={26} color="#7e8081" />
            </button>
            <input
              type="text"
              placeholder="Search the web"
              className="search-bar-input w-full rounded-full border text-black shadow-sm"
            />
            <button className="absolute right-14 top-4 -mt-1">
              <Icon icon="fluent:mic-16-regular" height={36} color="#027dca" />
            </button>
            <button className="absolute right-4 top-4">
              <Icon icon="simple-icons:googlelens" height={26} color="#027dca" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap space-x-4 text-sm">
          <span>{TEXT_CONSTANTS?.LANGUAGES}:</span>
          {LANGUAGE_TEXT_CONSTANTS?.map((language) => {
            return (
              <a href="#" key={language?.id} className="hover:text-black">
                {language?.text}
              </a>
            );
          })}
        </div>
      </main>
      <footer>
        <div className="mt-10 flex items-center">
          <div
            id="carrousel-left"
            className="cursor-pointer p-1 text-white shadow"
            onClick={handleCarrouselLeftBtn}
          >
            <span className="lnr lnr-chevron-left">
              <Icon icon="ep:arrow-left-bold" height={26} className="arrow-btn" />
            </span>
          </div>
          <div ref={carrousel} className="footer-carrusel mx-8 flex flex-row overflow-x-hidden">
            {CARROUSEL_DATA.map((item) => {
              return (
                <div
                  key={`carrusel-${item.id}`}
                  className="card my-3 mr-6  items-center rounded-lg bg-white text-center shadow-lg"
                >
                  <p className="carrousel-text rounded-t-lg p-3">${item.text}</p>
                  <img src={`${item.img}`} className="carrousel-image rounded-b-lg" />
                </div>
              );
            })}
          </div>
          <div
            id="carrousel-right"
            className="arrow  right-0 cursor-pointer p-1 text-white shadow"
            onClick={handleCarrouselRightBtn}
          >
            <span className="lnr lnr-chevron-right">
              <Icon icon="ep:arrow-right-bold" height={26} className="arrow-btn" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
