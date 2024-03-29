import React, { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth"
    });
  };

  const toggleMenu = () => {
    const menu = menuRef.current;
    if(!menu) return;

    menu.classList.toggle('show__menu');

    const isVisible = menu.classList.contains('show__menu');

    if (isVisible) {
      const exitButton = document.createElement('li');
      exitButton.innerHTML = '<i class="ri-close-circle-fill"></i>';
      exitButton.classList.add('exit-button');
      exitButton.addEventListener('click', () => {
        menu.classList.remove('show__menu');
        exitButton.remove();
      });

      const ulElement = menu.querySelector('ul')

      // menu.appendChild(exitButton);
      ulElement.insertBefore(exitButton, ulElement.firstChild);
  
    } else {
      const exitButton = menu.querySelector('.exit-button');
      if (exitButton) {
        exitButton.remove();
      }
    }
  
  };

 
  return (
    <header ref={headerRef} className="w-full h-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============== logo ============== */}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
            rounded-full flex items-center justify-center"
            >
              AW
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Ayim William
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/* =========== logo end ===========  */}
          {/* =========== menu start ===========  */}
          <div className="menu" ref={menuRef} onclick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a onclick={handleClick} className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onclick={handleClick} className="text-smallTextColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onclick={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a onclick={handleClick} className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* =========== menu end ===========  */}
          {/* =========== menu right ===========  */}
          <div className="flex items-center gap-4">
            <a href="#contact">

            <button
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
            hover:text-white hover:font-[500] ease-in duration-[300]"
            >
              <i class="ri-mail-send-line"></i>Let's Talk
            </button>
            </a>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* =========== menu end ===========  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
