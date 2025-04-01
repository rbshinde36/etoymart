import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import newsLetterImg from "../../assets/images/newsletter.png";
import Button from "@mui/material/Button";
import { IoMailOutline } from "react-icons/io5";
import Banners from "../banners/index";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

const Footer = () => {
  const [bannerList, setBannerList] = useState([]);

  return (
    <>
      
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                40% discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on
                <br /> promotions and coupons.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="topInfo row">
            <div className="col d-flex align-items-center">
              <span>
                <LuShirt />
              </span>
              <span className="ml-2">Everyday Best products</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ml-2">Free delivery for order over Rs. 5000/-</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbDiscount2 />
              </span>
              <span className="ml-2">Daily Mega Discounts</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <CiBadgeDollar />
              </span>
              <span className="ml-2">Best price on the market</span>
            </div>
          </div>

          <div className="row mt-5 linksWrap">
            <div className="col">
              <h5>Remote Controlled Car & Aeroplane</h5>
              <ul>
                <li>
                  <Link to="#">Formula One Speed Car</Link>
                </li>
                <li>
                  <Link to="#">Super Power Car</Link>
                </li>
                <li>
                  <Link to="#">Super Car - Door Func.</Link>
                </li>
                <li>
                  <Link to="#">Flying Spaceman Astronaut</Link>
                </li>
                <li>
                  <Link to="#">Flying Cartoon Aircraft</Link>
                </li>
                <li>
                  <Link to="#">Flying F35 Remote Contol Fighter Plane</Link>
                </li>
                <li>
                  <Link to="#">Flying F35 Fighter Plane</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Electronic Toy</h5>
              <ul>
                <li>
                  <Link to="#">Interesting Duckling</Link>
                </li>
                <li>
                  <Link to="#">Print Camera</Link>
                </li>
                <li>
                  <Link to="#">Balance Boy</Link>
                </li>
                <li>
                  <Link to="#">Baby Camera</Link>
                </li>
                <li>
                  <Link to="#">City Truck</Link>
                </li>
                <li>
                  <Link to="#">Dancing Baby Girl</Link>
                </li>
                {/* <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>Puzzle & Gun Toy</h5>
              <ul>
                <li>
                  <Link to="#">Thunder Strike 2 in 1 Gun</Link>
                </li>
                <li>
                  <Link to="#">Face Changing Game Bell</Link>
                </li>
                <li>
                  <Link to="#">Face Changing Game Big</Link>
                </li>
                <li>
                  <Link to="#">Paw Petrol Tower Set</Link>
                </li>
                {/* <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>Wooden Toy</h5>
              <ul>
                <li>
                  <Link to="#">Small Wooden Jig Saw Puzzle</Link>
                </li>
                <li>
                  <Link to="#">Animal Wooden Jig Saw Puzzle</Link>
                </li>
                <li>
                  <Link to="#">Animal Long Wooden Jig Saw Puzzle</Link>
                </li>
                <li>
                  <Link to="#">Animal & Big Wooden Jig Saw Puzzle</Link>
                </li>
                {/* <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>TOYS</h5>
              <ul>
                <li>
                  <Link to="#">Soft Toys</Link>
                </li>
                <li>
                  <Link to="#">Musical Toys</Link>
                </li>
                <li>
                  <Link to="#">Building Block</Link>
                </li>
                {/* <li>
                  <Link to="#">Gun Toy</Link>
                </li>
                <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0">Copyright 2024. All rights reserved</p>
            <ul className="list list-inline ml-auto mb-0 socials">
              <li className="list-inline-item">
                <Link to="https://www.facebook.com/profile.php?id=61571994485281">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="https://www.instagram.com/etoy_mart/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
