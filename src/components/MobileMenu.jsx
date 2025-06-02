import { Menu } from "../components/Menu";
import { Social } from "../components/Social";
import { Copyright } from "../components/Copyright";
import { X } from "lucide-react";

function MobileMenu({ mobileMenuShow, toggleMobileMenu }) {
  const handleLinkClick = () => {
    setTimeout(() => {
      toggleMobileMenu();
    }, 1000);
  };

  return (
    <>
      <div className={`mobile-menu ${mobileMenuShow ? "show" : ""}`}>
        <div className="mobile-menu__inner">
          <button className="close-menu" onClick={toggleMobileMenu}>
            <X size={28} />
          </button>
          <Menu handleLinkClick={handleLinkClick} />
          <div className="bottom-nav">
            <Social />
            <Copyright />
          </div>
        </div>
      </div>
      {mobileMenuShow && <div className="backdrop"></div>}
    </>
  );
}

export { MobileMenu };
