import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

const Contact = ({ title, subtitle, id }) => {
  return (
    <ContactWrapper id="contact">
      <div className="content-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>

        <a href="/join">
          <Button cta="Join list" />
        </a>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;

  .content-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    h2 {
      text-align: left;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        text-align: center;
      }
    }
  }
`

export default Contact
