import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FactoryIcon from "@mui/icons-material/Factory";

function Info() {
  return (
    <div className="row d-flex justify-content-between align-items-center m-0 py-2 bg-dark">
      <div className="col-12 col-md-6 d-flex justify-content-around">
        <a href="tel:919797972323" className="text-white text-decoration-none">
          <CallIcon fontSize="medium" />
          <span>+91-9797972323</span>
        </a>
        <a
          href="mailto:contact@netpark.in"
          className="text-white text-decoration-none"
        >
          <EmailIcon fontSize="medium" />
          <span className="mx-1">contact@netpark.in</span>
        </a>
      </div>
      <div className="col-12 col-md-6 my-md-0 my-1 d-flex justify-content-around">
        <p className="text-white m-0 d-flex">
          <FactoryIcon fontSize="medium" />
          <span className="mx-1"> Mon-Fri 8am-6pm</span>
        </p>
        <p className="text-bold text-white m-0 d-none d-md-block">
          ISO 9001:2015 Certified Company
        </p>
      </div>
    </div>
  );
}

export default Info;
