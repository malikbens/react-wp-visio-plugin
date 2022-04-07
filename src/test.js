import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import React from 'react'

const api = new WooCommerceRestApi({
  url: "http://example.com",
  consumerKey: "ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  consumerSecret: "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  version: "wc/v3"
});

export default function test() {
  return (
    <div>test</div>
  )
}
