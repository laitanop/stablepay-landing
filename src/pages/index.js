import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"
import makerImg from "../images/maker.svg"
import tokens from "../images/tokens.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlock id="about" title="Supported by ">
        <img src={makerImg} alt="MakerDAO" height="150" width="150" />
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="StablePay a social payment app for DeFI built in Layer 2."
        subtitle=""
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Speedy"
            content="Super-fast"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Affordable"
            content="Low cost transactions fee"
          />
          <Perk
            img={perk3Img}
            alt="Easily split bill with friends "
            title="Social"
            content="Easily split bill with friends from your address book"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Featured"
        para="Earn rewards when making instant peer to peer payments"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Our solutions">
            <ul>
              <li>
                <MdDone />
                Rewards on transfers.
              </li>
              <li>
                <MdDone />
                Get your transfers and donations in yield earning tokens.
              </li>
              <li>
                <MdDone />
                No matter what token they send you, you will receive payment in
                the token of your choice.
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="Join to our waiting list" cta="Join list!" />
            </Link>
          </Package>
          <br />
          <Package title="DeFi composability in Layer 2" active={true}>
            <img src={tokens} alt="tokens" />
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
    </Layout>
  </>
)
