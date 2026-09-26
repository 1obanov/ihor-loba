import { Menu } from "./Menu";
import { Social } from "./Social";
import { Copyright } from "./Copyright";
import { X } from "lucide-react";

interface MobileMenuProps {
  mobileMenuShow: boolean;
  toggleMobileMenu: () => void;
}

function MobileMenu({ mobileMenuShow, toggleMobileMenu }: MobileMenuProps) {
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
