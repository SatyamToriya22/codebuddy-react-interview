import { Icon } from "@iconify/react";
import { TEXT_CONSTANTS } from "./constants";
const HamburgerMenuTemplate = () => {
  return (
    <div className="menuPopup absolute -right-2 top-11 overflow-y-auto  rounded-lg bg-white text-gray-500 shadow-lg">
      <div className="space-y-1 p-4">
        <div className="flex items-center space-x-4">
          <Icon icon="fluent:collections-16-regular" height={18} />
          <span className="menu-list-items-text">{TEXT_CONSTANTS.COLLECTIONS}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Icon icon="mingcute:user-star-fill" height={18} />
          <span className="menu-list-items-text">{TEXT_CONSTANTS.MY_BING}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon icon="material-symbols:settings-rounded" height={18} />
            <span className="menu-list-items-text">{TEXT_CONSTANTS.SETTINGS}</span>
          </div>
          <Icon icon="ri:arrow-down-s-line" height={18} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon icon="teenyicons:lock-solid" height={18} />
            <span className="menu-list-items-text">{TEXT_CONSTANTS.SAFE_SEARCH}</span>
          </div>
          <span>{TEXT_CONSTANTS.MODERATE}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon icon="icomoon-free:lab" height={18} />
            <span className="menu-list-items-text">{TEXT_CONSTANTS.LABS}</span>
          </div>
          <Icon icon="ri:arrow-down-s-line" height={18} />
        </div>
        <div className="flex items-center space-x-4">
          <Icon icon="ic:baseline-watch-later" height={18} />
          <span className="menu-list-items-text">{TEXT_CONSTANTS.SEARCH_HISTORY}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Icon icon="ic:round-privacy-tip" height={18} />
          <span className="menu-list-items-text">{TEXT_CONSTANTS.PRIVACY}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Icon icon="bxs:message" height={18} />
          <span className="menu-list-items-text">{TEXT_CONSTANTS.FEEDBACK}</span>
        </div>
        <div className="pt-1">
          <div className="flex items-center space-x-4">
            <Icon icon="codicon:color-mode" height={18} />
            <span className="menu-list-items-text">{TEXT_CONSTANTS.APPEARANCE}</span>
          </div>
          <div className="space-y-1">
            <div className="flex cursor-pointer items-center justify-between space-x-1">
              <div className="appearence-list-items align-baseline">
                <input type="radio" id="light" name="theme" className="form-radio" />
                <label htmlFor="light" className="ml-4">
                  {TEXT_CONSTANTS.LIGHT}
                </label>
              </div>
              <div className="ml-auto h-6 w-8 bg-gray-200"></div>
            </div>
            <div className="flex cursor-pointer items-center justify-between space-x-1">
              <div className="appearence-list-items">
                <input type="radio" id="dark" name="theme" className="form-radio" />
                <label htmlFor="dark" className="ml-4">
                  {TEXT_CONSTANTS.DARK}
                </label>
              </div>
              <div className="ml-auto h-6 w-8 bg-gray-800"></div>
            </div>
            <div className="flex cursor-pointer items-center justify-between space-x-1">
              <div className="appearence-list-items">
                <input type="radio" id="system" name="theme" className="form-radio" />
                <label htmlFor="system" className="ml-4">
                  {TEXT_CONSTANTS.SYSTEM_DEFAULT}
                </label>
              </div>
              <div className="ml-auto h-6 w-8 bg-gradient-to-r from-gray-200 to-gray-800"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Icon icon="iconamoon:profile-fill" height={18} />
          <span className="menu-list-items-text">{TEXT_CONSTANTS.PERSONALIZE_YOUR_FEED}</span>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <Icon icon="fluent:home-12-filled" height={18} />
            <span className="menu-list-items-text">{TEXT_CONSTANTS.CUSTOMIZE_YOUR_HOMEPAGE}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="menu-list-items-text">{TEXT_CONSTANTS.SHOW_MENU_BAR}</span>
              <input
                type="checkbox"
                className="toggle-switch relative cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors checked:bg-emerald-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="menu-list-items-text">{TEXT_CONSTANTS.SHOW_NEWS_AND_INTERESTS}</span>
              <input
                type="checkbox"
                className="toggle-switch relative cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors checked:bg-emerald-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="menu-list-items-text">{TEXT_CONSTANTS.SHOW_HOMEPAGE_IMAGE}</span>
              <input
                type="checkbox"
                className="toggle-switch relative cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors checked:bg-emerald-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenuTemplate;
