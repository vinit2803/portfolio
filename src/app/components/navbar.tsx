"use client";
import Link from "next/link";
import "../css/navbar.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="containersecond">
          <div className="nav-content">
            <div className="uppercontent">
              {/* Navbar Brand */}
              <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                <Link className="navbar-brand" href="/">
                  Vinit
                </Link>
              </motion.div>

              {/* Hamburger Icon for Small Screens */}
              <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                <button className="hamburger" onClick={toggleMenu}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </button>
              </motion.div>
            </div>

            {/* Navbar Links for All Screens */}
            {/* <motion.div
              className="navbar-links"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              initial="closed"
              transition={{ duration: 0.5 }}
            > */}
            <motion.div
              className={`navbar-links ${isOpen ? "active" : ""}`}
              variants={variants}
              initial="open"
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link" href="/skills">
                  Skills
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link" href="#blog">
                  Blog
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </motion.div>

              {/* Search Form */}
              <div className="search-form">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </div>
              {/* </motion.div> */}
            </motion.div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
