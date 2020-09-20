import React from "react"

import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import Liner from "../components/TextBlock/Liner"

import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"

import makerImg from "../images/maker.svg"
import tokens from "../images/tokens.svg"

import { IconContext } from "react-icons"
import { MdDone } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <Packages
        title="Features"
        para="Pay or Send money with your Preferred Crypto Token or USD. all at genuine & live conversion rates of market"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Faster">
            <ul>
              <li>
                <MdDone />
                Transfer your Money (& crypto) Faster
              </li>

              <br />
              <li>
                for Social Human beings StablePay uses layer 2 technology to
                give you the most Simple, Trust-based & Seamlessly Swift
                experience with your transactions.
              </li>
            </ul>
          </Package>
          &nbsp; &nbsp; &nbsp;
          <Package title="Social-friendly ">
            <ul>
              <li>
                <MdDone />
                For Social Human beings
              </li>
              <br />
              <li>
                Now you can Split-bills, all in everything at one cozy
                platform/space.
              </li>
            </ul>
          </Package>
          &nbsp; &nbsp; &nbsp;
          <Package title="Secure as Vault">
            <ul>
              <li>
                <MdDone />
                Your privacy and data are self-owned
              </li>
              <li>
                <MdDone />
                Secure as Gold-Vaul{" "}
              </li>
              <br />
              <li>
                Now for the first time, you can Experience the most Simple,
                Secure & Socially Classic Experience with your favorite Crypto.
              </li>
            </ul>
          </Package>
          <br />
        </IconContext.Provider>
      </Packages>

      <TextBlock id="about" title="Supported by ">
        <img src={makerImg} alt="MakerDAO" height="150" width="150" />
        <br />
        <br />
        <br />
        <br />
        <Liner />
        <br />
        <br />

        <img src={tokens} alt="tokens" width="350" />
      </TextBlock>

      {/* <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      /> */}
    </Layout>
  </>
)
