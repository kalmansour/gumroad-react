// Libraries
import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Icons
import { BsClipboard } from "react-icons/bs";
import { CgCopy } from "react-icons/cg";
import { ImEmbed2 } from "react-icons/im";

// Styles
import {
  Container,
  ProductBox,
  ButtonTitle,
  InputProductText,
  ClipboardContainer,
  ProductPreview,
  DirectionsText,
  RecommendedText,
  CodeBox,
  CodeArea,
  EmbedBox,
  LoadingPreview,
} from "./styles";

const Widget = () => {
  const [product, setProduct] = useState("Buy my product");
  const [payment, setPayment] = useState("");
  const [singleProduct, setSingleProduct] = useState("");
  const [embedProduct, setEmbedProduct] = useState("");

  const [copy, setCopy] = useState(false);

  const overlayCode = `<script src="https://gumroad.com/js/gumroad.js"></script>
  <a class="gumroad-button" href="https://gum.co/demo${payment}" ${singleProduct}>${product}</a>`;

  const embedCode = `<script src="https://gumroad.com/js/gumroad-embed.js"></script>
  <div class="gumroad-product-embed" data-gumroad-product-id="demo" ${embedProduct}><a href="https://gumroad.com/l/demo">Loading...</a></div>`;

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

  const toggleEmbedProduct = () => {
    setEmbedProduct(embedProduct === "" ? "data-outbound-embed='true'" : "");
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
        width: 334,
      }}
    >
      <span className="fa fa-list-alt fa-fw"></span>
      <ImEmbed2 size="5em" />
      <h5 style={{ color: "darkslategray" }}>Embed</h5>
      <p style={{ color: "#a2a2a2" }}> Embedded products on your site</p>
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
              <a href="https://gumroad.com/l/demo">
                <ProductPreview
                  type="text"
                  placeholder="Buy my product"
                  value={product}
                  readonly="readonly"
                />
              </a>
              <DirectionsText>
                Copy and paste this code into your website
              </DirectionsText>
              <RecommendedText>
                We highly recommend you have an SSL certificate to increase
                buyer confidence.
              </RecommendedText>
              <CodeBox>
                <CodeArea placeholder={overlayCode} readonly="readonly" />
                <CopyToClipboard
                  text={overlayCode}
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
            <EmbedBox>
              <div
                class="form-check"
                style={{
                  paddingTop: "15px",
                  marginLeft: "20px",
                  color: "#a2a2a2",
                }}
              >
                <input
                  class="form-check-input"
                  value={embedProduct}
                  type="checkbox"
                  id="flexCheckAuto"
                  onClick={toggleEmbedProduct}
                />
                <label class="form-check-label" for="flexCheckAuto">
                  Redirect to Gumroad (recommended to maximize conversions for
                  non-HTTPS websites)
                </label>
              </div>
            </EmbedBox>
            <ClipboardContainer>
              <LoadingPreview>Loading...</LoadingPreview>
              <DirectionsText>
                Copy and paste this code into your website
              </DirectionsText>
              <RecommendedText>
                We highly recommend you have an SSL certificate to increase
                buyer confidence.
              </RecommendedText>
              <CodeBox>
                <CodeArea placeholder={embedCode} readonly="readonly" />
                <CopyToClipboard
                  text={embedCode}
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
      </Tabs>
    </Container>
  );
};

export default Widget;
