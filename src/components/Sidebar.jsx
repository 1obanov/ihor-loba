import { Menu } from "../components/Menu";
import { Social } from "../components/Social";
import { Copyright } from "../components/Copyright";

function Sidebar({ mobileMenuShow }) {
  return (
    <>
      <div className={`sidebar ${mobileMenuShow ? "show" : ""}`}>
        <div className="sidebar__inner">
          <div className="author">
            <h4>
              Ihor Lobanov
              <span>Ihor Lobanov</span>
            </h4>
          </div>
          <Menu />
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

export { Sidebar };
