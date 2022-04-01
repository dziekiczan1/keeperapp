import React from "react";

function Footer() {
  const date = new Date();
  const currentDate = date.getFullYear();
  return (
    <footer>
      <p>Copywright ⓒ {currentDate}</p>
    </footer>
  );
}

export default Footer;
