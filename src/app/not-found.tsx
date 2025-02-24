import Link from "next/link";
import React from "react";
import "./css/not-found.css";

const notfound = () => {
  return (
    <section className="error">
      <div className="titlediv">
        <p className="title">Forgot your way?</p>
        <p className="titledescription">
          Sorry, we can&apos;t find what you are looking for. There&apos;s lots of to
          see on Home Page.
        </p>
      </div>
      <div className="buttondiv">
        <Link href="./" className="linkbutton">
          Vinit&apos;s Home
        </Link>
      </div>
      <div className="errordiv">
        <span className="spanerror">
          Error Code
          <strong> NSES-404</strong>
        </span>
      </div>
    </section>
  );
};

export default notfound;
