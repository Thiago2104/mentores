import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

/**
 * Component which wraps constant ui elements and show children elements passed as parameters depending on the route
 * @param {object} props.children - Children elements
 * @component Layout
 * @returns
 */

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  /**
   * children elements that will be displayed on screen
   */
  children: PropTypes.object.isRequired,
};

export default Layout;
