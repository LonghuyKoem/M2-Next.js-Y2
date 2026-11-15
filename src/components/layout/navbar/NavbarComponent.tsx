"use client";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";
export interface MenuItem {
  url: string;
  name: string;
}

const NavbarComponent = () => {
  return (
    <section>
      <div className="container">
        <DesktopNavbarComponent />

        <MobileNavbarComponent />
      </div>
    </section>
  );
};

export { NavbarComponent };
