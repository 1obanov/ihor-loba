import { MobileMenu } from "../components/MobileMenu";
import { Menu } from "lucide-react";

function Header({ mobileMenuShow, toggleMobileMenu }) {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <button className="hamburger" onClick={toggleMobileMenu}>
              <Menu size={28} />
            </button>
            <div className="logo">
              <h4>
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
