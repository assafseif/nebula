import styled from "styled-components"

export const IntroSectionStyle =styled.header` 
width: 100%;
position: relative;
background: url("../img/intro-bg.png") center bottom no-repeat;
background-size: cover;
padding: 200px 0 120px 0;

   .intro-img {
    width: 50%;
    float: right;
  }
  
   .intro-info {
    width: 50%;
    float: left;
  }
  
   .intro-info h2 {
    color: #fff;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
  }
  
   .intro-info h2 span {
    color: #74b5fc;
    text-decoration: underline;
  }
  
   .intro-info .btn-get-started,
   .intro-info .btn-services {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 32px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 0 20px 20px 0;
    color: #fff;
  }
  
   .intro-info .btn-get-started {
    background: #007bff;
    border: 2px solid #007bff;
    color: #fff;
  }
  
   .intro-info .btn-get-started:hover {
    background: none;
    border-color: #fff;
    color: #fff;
  }
  
   .intro-info .btn-services {
    border: 2px solid #fff;
  }
  
   .intro-info .btn-services:hover {
    background: #007bff;
    border-color: #007bff;
    color: #fff;
  }
  


`

  
