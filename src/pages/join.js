import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"

import Button from "../components/Button/button"

const Join = () => {
  return (
    <div>
      <a href="/">
        <Button cta="back to StablePay" />
      </a>

      <ReactTypeformEmbed url="https://stablepay.typeform.com/to/ndNA9p" />
    </div>
  )
}

export default Join
