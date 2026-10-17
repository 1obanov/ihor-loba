import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

interface HeaderProps {
  mobileMenuShow: boolean;
  toggleMobileMenu: () => void;
}

function Header({ mobileMenuShow, toggleMobileMenu }: HeaderProps) {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <button
              type="button"
              className="hamburger"
              onClick={toggleMobileMenu}
            >
              <Menu size={28} />
            </button>
            <div className="logo">
              <h4 className="logo__title">
                Lobanov
                <span>Ihor</span>
              </h4>
            </div>
          </div>

          <MobileMenu
            mobileMenuShow={mobileMenuShow}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>
    </>
  );
}

export { Header };
