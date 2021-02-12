import React from "react";
import "./layout.css";

const Header = () => {
  return (
    <header>
      <ul className='breadcrumb'>
        <li>
          <a href='*'>Главная</a>
        </li>
        <li>
          <a href='*'>Системы хранения</a>
        </li>
        <li>
          <a href='*'>Комплекты стеллажных систем</a>
        </li>
      </ul>
      <h1>Комплекты стеллажных систем</h1>
    </header>
  );
};
export default Header;
