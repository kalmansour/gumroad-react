// Libraries
import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsClipboard } from "react-icons/bs";
import { CgCopy } from "react-icons/cg";
import styled from "styled-components";
// import { ImEmbed2 } from "react-icons/im";

const Overlay = () => {
  const [product, setProduct] = useState("Buy my product");
  const [payment, setPayment] = useState("");
  const [singleProduct, setSingleProduct] = useState("");
  const [copy, setCopy] = useState(false);

  const code = `<script src="https://gumroad.com/js/gumroad.js"></script>
  <a class="gumroad-button" href="https://gum.co/demo${payment}" ${singleProduct}>${product}</a>`;

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const togglePayment = () => {
    setPayment(payment === "" ? "?wanted=true" : "");
  };

  const toggleSingleProduct = () => {
    setSingleProduct(
      singleProduct === "" ? "data-gumroad-single-product='true'" : ""
    );
  };

  const overlayTitle = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span className="fa fa-list-alt fa-fw"></span>
      <CgCopy size="5em" />
      <h5>Overlay</h5>
      <p>Inline purchases without leaving your site</p>
    </div>
  );

  // const embedTitle = (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "center",
  //       textAlign: "center",
  //     }}
  //   >
  //     <span className="fa fa-list-alt fa-fw"></span>
  //     <ImEmbed2 size="5em" />
  //     <h5>Embed</h5>
  //     <p>Inline purchases without leaving your site</p>
  //   </div>
  // );

  return (
    <Container>
      <Tabs defaultActiveKey="overlay" id="uncontrolled-tab-example">
        <Tab eventKey="overlay" title={overlayTitle} subtitle="inline">
          <Tab.Content>
            <ProductBox>
              <h6>Button Text:</h6>
              <input
                placeholder="Buy my product"
                value={product}
                type="text"
                className="form-control"
                onChange={handleChange}
                style={{ width: "50%" }}
              />
              <div class="form-check">
                <input
                  class="form-check-input"
                  value={payment}
                  type="checkbox"
                  id="flexCheckAuto"
                  onClick={togglePayment}
                />
                <label class="form-check-label" for="flexCheckAuto">
                  Auto-trigger the payment form
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={singleProduct}
                  id="flexCheckAllow"
                  onClick={toggleSingleProduct}
                />
                <label class="form-check-label" for="flexCheckAllow">
                  Allow single-product purchases only
                </label>
              </div>
            </ProductBox>
            <div
              class="demo border"
              style={{
                height: 500,
                backgroundColor: "#f5f5f5",
                // position: "relative",
                // top: 300,
              }}
            >
              <div
                style={{
                  marginTop: 30,
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  class="btn btn-light"
                  placeholder="Buy my product"
                  value={product}
                  style={{
                    margin: 50,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                    border: "solid",
                    borderWidth: "1px",
                    borderColor: "grey",
                    justifyContent: "center",
                  }}
                  readonly="readonly"
                />
                <h6>Copy and paste this code into your website</h6>
                <h8>
                  We highly recommend you have an SSL certificate to increase
                  buyer confidence.
                </h8>
                <div
                  class="demo border"
                  style={{ backgroundColor: "white", width: 500, height: 100 }}
                >
                  <textarea
                    placeholder={code}
                    style={{ width: 500, height: 80, resize: "none" }}
                    readonly="readonly"
                  />
                  <CopyToClipboard
                    text={code}
                    onCopy={() => setCopy({ copy: true })}
                  >
                    <BsClipboard class="float-right" size="2em" />
                  </CopyToClipboard>
                  {copy ? <span style={{ color: "red" }}>Copied.</span> : null}
                </div>
              </div>
            </div>
          </Tab.Content>
        </Tab>
        {/* <Tab eventKey="embed" title={embedTitle}>
          <Tab.Content>
            <div class="demo border" style={{ height: 400 }}>
              <p>Embed Content Here</p>
            </div>
          </Tab.Content>
        </Tab> */}
      </Tabs>
    </Container>
  );
};

export default Overlay;

const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  width: 700px;
`;

const ProductBox = styled.div`
  background-color: white;
  border: solid lightgray;
  border-width: 0px 1px;
`;
