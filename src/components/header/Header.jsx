import { useState } from "react";
import MobileHeader from "../MobileHeader";
import PropTypes from "prop-types";

const Header = ({ t, setTabs, tabs }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="fixed top-0 w-full container mx-auto right-0 p-4 z-50">
        <div
          className={`hamburger ${active ? "active" : ""} lg:hidden block`}
          onClick={() => setActive(!active)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      {active && (
        <MobileHeader
          t={t}
          tabs={tabs}
          setTabs={setTabs}
          setActive={setActive}
        />
      )}
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  tabs: PropTypes.number,
  setTabs: PropTypes.func,
};
export default Header;
