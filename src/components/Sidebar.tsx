import { Menu } from "./Menu";
import { Social } from "./Social";
import { Copyright } from "./Copyright";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
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
    </>
  );
}

export { Sidebar };
