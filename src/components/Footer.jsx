import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-bg ">
      <div className="container py-3">
        <div className="d-flex justify-content-center my-3">
          <div className="fs-3 mx-2 text-white">
            <FaFacebookF />
          </div>
          <div className="fs-3 mx-2 text-white">
            <FaInstagram />
          </div>
          <div className="fs-3 mx-2 text-white">
            <FaLinkedinIn />
          </div>
          <div className="fs-3 mx-2 text-white">
            <FaTwitter />
          </div>
          <div className="fs-3 mx-2 text-white">
            <FaWhatsapp />
          </div>
        </div>
        <section className="mb-3">
          <form>
            <div className="d-flex justify-content-center align-items-center signup-form">
              <label className="text-white fw-bold fs-5" htmlFor="">
                Signup For Our Newslater
              </label>

              <input
                type="text"
                className="form-control form-control-lg border-white text-white mx-4 subscribe-form mail-input"
                style={{ width: "50%", background: "transparent" }}
                placeholder="Email Address"
              />

              <input
                type="submit"
                value="Subscribe"
                className="btn btn-lg text-white border-white"
              />
            </div>
          </form>
        </section>
        <section className="my-3">
          <div className="d-flex justify-content-center text-white">
            <p className="display-6 fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nemo voluptates quam dolore blanditiis sed dolor cum nam, fugiat
              beatae iure doloremque reprehenderit! Voluptatum tempora in
              repudiandae facere. Ut, quod! reprehenderit! Voluptatum tempora in
              repudiandae facere. Ut, quod!
            </p>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-3">
              <h4 className="mb-2 text-white">Company Information</h4>
              <p className="text-white display-6 fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                repellat excepturi repellendus molestias minima soluta.
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="mb-2 text-white">Properties</h4>
              <ul>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Duplex
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Flats
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Lakeside House
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    House For Sale
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    House For Rent
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="mb-2 text-white">Useful Links</h4>
              <ul>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Contact Us
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Get Agent
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Set Appointment
                  </Link>
                </li>
                <li className="list-style">
                  <Link className="text-white useful-links display-6 fs-6">
                    Customer Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="mb-2 text-white">Contact</h4>
              <div className="d-flex text-white align-items-center">
                <span className="fs-4">
                  <FaHome />
                </span>
                <span className="px-3 display-6 fs-6">
                  Florida 5934 Halifax Pl
                </span>
              </div>
              <div className="d-flex text-white align-items-center">
                <span className="fs-4">
                  <FaEnvelope />
                </span>
                <span className="px-3 display-6 fs-6">info@properties.co</span>
              </div>
              <div className="d-flex text-white align-items-center">
                <span className="fs-4">
                  <FaPhoneAlt />
                </span>
                <span className="px-3 display-6 fs-6">+ 540-793-3853</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="d-flex justify-content-center align-items-center footer-bottom-bg">
        <p className="text-white p-2">@ 2023 Real Estate</p>
      </div>
    </div>
  );
};

export default Footer;
