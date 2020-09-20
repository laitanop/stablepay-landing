import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"

import Button from "../components/Button/button"

const Join = () => {
  return (
    <div>
      <a href="/">
        <Button cta="back to StablePay" />
      </a>

      <ReactTypeformEmbed url="https://stablepay.typeform.com/to/Owk8khe6" />
    </div>
  )
}

export default Join
