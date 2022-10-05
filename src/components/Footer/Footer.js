import React from "react";

function Footer() {
  return (
    <footer className="d-flex justify-content-center py-2 bg-dark">
      <p className="m-0 p-0 text-white">
        Copyright &copy; {new Date().getFullYear()} by NetPark. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
