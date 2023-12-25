import React from "react";

import Image from "next/image";

import HamburgerMenu from "./hamburger-menu";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div>
      <HamburgerMenu
        isShown={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <div className="flex items-center justify-between px-5 py-3">
        <Image src="/images/logo.jpg" width={217} height={56} alt="nivogo" />
        <Image
          src="/images/icons/menu.png"
          onClick={() => setIsMenuOpen(true)}
          width={24}
          height={19}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
