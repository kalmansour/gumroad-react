// Libraries
import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsClipboard } from "react-icons/bs";
import { CgCopy } from "react-icons/cg";
import styled from "styled-components";
import { ImEmbed2 } from "react-icons/im";

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
      <h5 style={{ color: "darkslategray" }}>Overlay</h5>
      <p style={{ color: "#a2a2a2" }}>
        Inline purchases without leaving your site
      </p>
    </div>
  );

  const embedTitle = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span className="fa fa-list-alt fa-fw"></span>
      <ImEmbed2 size="5em" />
      <h5>Embed</h5>
      <p>Inline purchases without leaving your site</p>
    </div>
  );

  return (
    <Container>
      <Tabs defaultActiveKey="overlay" id="uncontrolled-tab-example">
        <Tab eventKey="overlay" title={overlayTitle} subtitle="inline">
          <Tab.Content>
            <ProductBox>
              <ButtonTitle>Button Text:</ButtonTitle>
              <InputProductText
                placeholder="Buy my product"
                value={product}
                type="text"
                className="form-control"
                onChange={handleChange}
              />
              <div
                class="form-check"
                style={{ margin: "15px 20px", color: "#a2a2a2" }}
              >
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
              <div
                class="form-check"
                style={{ margin: "15px 20px", color: "#a2a2a2" }}
              >
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
            <ClipboardContainer>
              <ProductPreview
                type="text"
                placeholder="Buy my product"
                value={product}
                readonly="readonly"
              />
              <DirectionsText>
                Copy and paste this code into your website
              </DirectionsText>
              <RecommendedText>
                We highly recommend you have an SSL certificate to increase
                buyer confidence.
              </RecommendedText>
              <CodeBox>
                <OverlayCode placeholder={code} readonly="readonly" />
                <CopyToClipboard
                  text={code}
                  onCopy={() => setCopy({ copy: true })}
                >
                  <BsClipboard
                    size="2em"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginRight: "10px",
                      color: "turquoise",
                    }}
                  />
                </CopyToClipboard>
                {copy ? (
                  <span style={{ color: "tomato", margin: "5px 5px" }}>
                    Copied!
                  </span>
                ) : null}
              </CodeBox>
            </ClipboardContainer>
          </Tab.Content>
        </Tab>
        <Tab eventKey="embed" title={embedTitle}>
          <Tab.Content>
            <div class="demo border" style={{ height: 400 }}>
              <p>Embed Content Here</p>
            </div>
          </Tab.Content>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Overlay;

const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
  width: 700px;
  border-radius: 5px;
`;

const ProductBox = styled.div`
  background-color: white;
  border: solid #e1e1e1;
  border-width: 0px 1px;
  height: 160px;
  border-top-right-radius: 1px;
`;

const ButtonTitle = styled.h6`
  margin-left: 20px;
  color: #858585;
`;

const InputProductText = styled.input`
  margin-left: 20px;
  width: 90%;
  color: #a2a2a2;
`;

const ClipboardContainer = styled.div`
  border: solid #e1e1e1;
  border-width: 1px 1px;
  height: 350px;
  background-color: #f5f5f5;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const ProductPreview = styled.input`
  margin: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  border: solid;
  border-color: lightgrey;
  border-width: 1px;
  justify-content: center;
  text-align: center;
  height: 50px;
  border-radius: 5px;
  font-weight: bolder;
  color: #a2a2a2;
`;

const DirectionsText = styled.h6`
  color: darkslategray;
`;

const RecommendedText = styled.p`
  color: #858585;
  font-size: 12px;
`;

const CodeBox = styled.div`
  background-color: white;
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: row;
  border: solid #e1e1e1;
  border-width: 1px 1px;
  border-radius: 5px;
`;

const OverlayCode = styled.textarea`
  width: 500px;
  height: 80px;
  resize: none;
  border-width: 0px;
  margin: 10px;
`;
