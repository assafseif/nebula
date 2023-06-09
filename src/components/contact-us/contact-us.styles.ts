import styled from 'styled-components';


export const SectionContact = styled.section`
box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
padding: 60px 0;
overflow: hidden;

 .section-header {
  padding-bottom: 30px;
}

 .contact-about h3 {
  font-size: 36px;
  margin: 0 0 10px 0;
  padding: 0;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #007bff;
}

 .contact-about p {
  font-size: 14px;
  line-height: 24px;
  font-family: "Montserrat", sans-serif;
  color: #888;
}

 .social-links {
  padding-bottom: 20px;
}

 .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #fff;
  color: #007bff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  border: 1px solid #007bff;
}

 .social-links a:hover {
  background: #007bff;
  color: #fff;
}

 .info {
  color: #283d50;
}

 .info i {
  font-size: 32px;
  color: #007bff;
  float: left;
  line-height: 1;
}

 .info p {
  padding: 0 0 10px 36px;
  line-height: 28px;
  font-size: 14px;
}

 .form #sendmessage {
  color: #007bff;
  border: 1px solid #007bff;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

 .form #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

 .form #sendmessage.show,
 .form #errormessage.show,
 .form .show {
  display: block;
}

 .form .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

 .form input,
 .form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

 .form button[type="submit"] {
  background: #007bff;
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
  transition: 0.3s;
}

 .form button[type="submit"]:hover {
  background: #0067d5;
  cursor: pointer;
}



`




