import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  // const [showMenu, setShowMenu] = useState<Boolean>(false);

  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo float-left">
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <h1 className="text-light"><div href="#header"><span>NewBiz</span></div></h1> */}
          <Link href="#intro">
            <div>
              <Image
                src="/img/logo.png"
                alt=""
                className="img-fluid"
                width="200"
                height="300"
              />
            </div>
          </Link>
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <Link href="#intro"></Link>
            </li>
            <li>
              <Link href="#about">
                <>About Us</>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <>Services</>
              </Link>
            </li>
            {/* <li>
              <Link href="#portfolio">
                <>Portfolio</>
              </Link>
            </li> */}
            {/* <li>
              <Link href="#team">
                <>Team</>
              </Link>
            </li> */}
            <li className="drop-down">
              <Link href="">
                <>Drop Down</>
              </Link>
              <ul>
                <li>
                  <Link href="#">
                    <>Drop Down 1</>
                  </Link>
                </li>
                <li className="drop-down">
                  <Link href="#">
                    <>Drop Down 2</>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">
                        <>Deep Drop Down 1</>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <>Deep Drop Down 2</>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <>Deep Drop Down 3</>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <>Deep Drop Down 4</>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <>Deep Drop Down 5</>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">
                    <div>Drop Down 3</div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div>Drop Down 4</div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div>Drop Down 5</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#contact">
                <div>Contact Us</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
