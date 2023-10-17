import React from "react";
import Footer from "../footer/Footer";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Asso Logo.png";
const data = [
  { home: "home", service: "services", event: "events", contact: "contact", courses:"courses" },
];

const Loyout = () => {
  return (
    <>
      <div className="bg-black/80">
        <div className="w-[1100px] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <span>
                contact us <CallIcon /> +992 200 553 333
              </span>
              <span>
                <EmailIcon /> sbahtovar@gmail.com
              </span>
            </div>
            <Link to="form"><div>
              <p className="col-span-end text-gray-300">register / `login</p>{" "}
            </div></Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
        <Link to="/"> <img src={logo} className="w-[200px] h-[40px]" alt="logo" /></Link>
                 </div>
        <div>
          {data.length > 0 ? (
            <div className="flex justify-between items-center">
              {data.map((elem, id) => {
                return (
                  <ul key={id} className="flex gap-5">
                    <Link to="/"><li className="text-xl cursor-pointer uppercase font-serif font-bold">
                      {elem.home}
                    </li></Link>
                    <li className="text-xl cursor-pointer uppercase font-serif font-bold">
                      {elem.service}
                    </li>
                    <Link to="/event">
                      <li className="text-xl cursor-pointer uppercase font-serif font-bold">
                        {elem.event}
                      </li>
                    </Link>
                     <Link to="contact"><li className="text-xl cursor-pointer uppercase font-serif font-bold">
                      {elem.contact}
                    </li></Link>
                    <Link to="/courses">
                      <li className="text-xl uppercase cursor-pointer font-serif font-bold">
                        {elem.courses}
                      </li>
                    </Link>
                  </ul>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Loyout;
