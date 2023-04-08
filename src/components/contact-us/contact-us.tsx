import React from "react";
import { useState } from "react";
import Image from "next/image";
import { PostApi } from "@/src/lib/Api";
import config from "@/src/conf/config";

interface FormData {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const ContactUs = () => {
  //USE STATE TO SAVE DATA
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  //STATE TO SETERROR IF EXIST
  const [error, setError] = useState<string>();

  //ON EACH CHANGE WE SAVE VALUES IN FORMDATA
  function handleChange(e: any) {
    const { name, value, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e: any) {
    //TO PREVENT RELOAD
    e.preventDefault();
    console.log(process.env.API_URL);
    PostApi(formData, "http://localhost:8080/metadata/send-email");

    setFormData((prevFormData) => {
      return {
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
      };
    });
  }

  return (
    <section id="contact">
      <div className="container-fluid">
        <div className="section-header">
          <h3>Contact Us</h3>
        </div>

        <div className="row wow fadeInUp">
          <div className="col-lg-6">
            <div className="map mb-4 mb-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "312px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5 info">
                <i className="ion-ios-location-outline"></i>
                <p>A108 Adam Street, NY 535022</p>
              </div>
              <div className="col-md-4 info">
                <i className="ion-ios-email-outline"></i>
                <p>info@example.com</p>
              </div>
              <div className="col-md-3 info">
                <i className="ion-ios-telephone-outline"></i>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form
                action=""
                method="post"
                role="form"
                className="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      value={formData.Name}
                      onChange={handleChange}
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                    value={formData.Subject}
                    onChange={handleChange}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="Message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    value={formData.Message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center">
                  <button type="submit" title="Send Message">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
