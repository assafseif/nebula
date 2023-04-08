import React from "react";
import Image from "next/image";
import { SectionService } from "./services.styles";
const Services = () => {
  return (
    <SectionService id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Our Services</h3>
          <p>
            We offer a wide range of software development services to help you
            achieve your business goals.
          </p>
        </header>

        <div className="row">
          <div
            className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-analytics-outline"
                  style={{ color: "#ff689b" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="">Custom Software Development</a>
              </h4>
              <p className="description">
                We can design, develop and deploy software tailored to your
                specific business needs, whether you need a mobile app, web
                application or desktop software.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-5 wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-bookmarks-outline"
                  style={{ color: "#e9bf06" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="">Product Development</a>
              </h4>
              <p className="description">
                We can help you turn your idea into a successful product by
                providing end-to-end product development services, from ideation
                to launch and beyond.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-paper-outline"
                  style={{ color: "#3fcdc7" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="">UI/UX Design</a>
              </h4>
              <p className="description">
                We can create a visually appealing and user-friendly interface
                for your software, which can enhance user engagement and
                satisfaction.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-5 wow bounceInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-speedometer-outline"
                  style={{ color: "#41cf2e" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="">Performance Optimization</a>
              </h4>
              <p className="description">
                We can help you improve the performance and scalability of your
                software, which can enhance user experience and reduce
                maintenance costs.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-world-outline"
                  style={{ color: "#d6ff22" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="">Cloud Computing</a>
              </h4>
              <p className="description">
                We can help you migrate your software to the cloud, which can
                provide you with greater flexibility, scalability, and
                cost-effectiveness.
              </p>
            </div>
          </div>
          {/* <div
            className="col-md-6 col-lg-5 wow bounceInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-clock-outline"
                  style={{ color: "#4680ff" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="">Eiusmod Tempor</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </SectionService>
  );
};

export default Services;
