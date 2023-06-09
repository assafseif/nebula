import styled from "styled-components";

export const SectionService =styled.section`

    padding: 60px 0 40px 0;
    box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);

  
   .box {
    padding: 30px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 0 10px 40px 10px;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
  }
  
   .box:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  
   .icon {
    position: absolute;
    left: -10px;
    top: calc(50% - 32px);
  }
  
   .icon i {
    font-size: 64px;
    line-height: 1;
    transition: 0.5s;
  }
  
   .title {
    margin-left: 40px;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
  }
  
   .title a {
    color: #111;
  }
  
   .box:hover .title a {
    color: #007bff;
  }
  
   .description {
    font-size: 14px;
    margin-left: 40px;
    line-height: 24px;
    margin-bottom: 0;
  }
  


`