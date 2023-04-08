import React from "react";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>About Our Company</h3>
          <p>
            At Our Company, we strive to provide the best software solutions to
            meet your needs. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
              Our team of experienced developers and designers are dedicated to
              delivering high-quality software that is both reliable and
              user-friendly. We work closely with our clients to ensure that
              their specific needs are met, and we take pride in our ability to
              provide customized solutions that exceed expectations.
            </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon">
                <i className="fa fa-cogs"></i>
              </div>
              <h4 className="title">
                <a href="">Customized Solutions</a>
              </h4>
              <p className="description">
                We specialize in developing software solutions that are tailored
                to your specific needs. Our team works closely with you to
                understand your requirements and provide customized solutions
                that exceed expectations.
              </p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon">
                <i className="fa fa-shield"></i>
              </div>
              <h4 className="title">
                <a href="">Reliable and Secure</a>
              </h4>
              <p className="description">
                At Our Company, we take security seriously. We use the latest
                encryption and security technologies to ensure that your data is
                protected and your software is reliable.
              </p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon">
                <i className="fa fa-users"></i>
              </div>
              <h4 className="title">
                <a href="">Customer-Centric Approach</a>
              </h4>
              <p className="description">
                Our team is dedicated to providing the best possible customer
                experience. We work closely with our clients to ensure that
                their needs are met and that they are satisfied with our
                services.
              </p>
            </div>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <Image
              src="/img/about-img.svg"
              width="1000"
              height="0"
              className="img-fluid"
              alt="About Our Company"
            />
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
            <Image
              src="img/about-extra-1.svg"
              width="1000"
              height="0"
              className="img-fluid"
              alt="Our Values"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Our Values</h4>
            <p>
              At Our Company, we believe in transparency, integrity, and
              collaboration. We value our clients and strive to build long-term
              relationships based on trust and mutual respect. Our team is
              committed to delivering high-quality software solutions that meet
              your needs and exceed your expectations.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <Image
              src="/img/about-extra-2.svg"
              width="1000"
              height="0"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Who We Are</h4>
            <p>
              We are a software development company that is passionate about
              delivering cutting-edge technology solutions to businesses of all
              sizes. Our team of experienced developers, designers, and project
              managers are committed to delivering high-quality software
              products that meet our clients&apos; unique needs and exceed their
              expectations.
            </p>
            <p>What We Do</p>
            <p>
              Our team specializes in building custom software solutions for a
              variety of industries, including healthcare, finance, and
              e-commerce. We work closely with our clients to understand their
              business goals and develop a tailored software solution that helps
              them achieve those goals. Our services include software
              development, web design, mobile app development, and more.
            </p>
            <p>Why Choose Us</p>
            <p>
              We believe that our success is tied to our clients&apos; success.
              That&apos;s why we go above and beyond to ensure that every project we
              work on is completed on time, on budget, and to the highest
              quality standards. Our team is committed to providing exceptional
              customer service and support throughout the entire development
              process and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
