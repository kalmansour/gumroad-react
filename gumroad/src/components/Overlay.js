import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsClipboard } from "react-icons/bs";

const Overlay = () => {
  const [product, setProduct] = useState("Buy my product");
  const [copy, setCopy] = useState(false);

  const code = `<script src="https://gumroad.com/js/gumroad.js"></script>
  <a class="gumroad-button" href="https://gum.co/demo">${product}</a>)`;

  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  return (
    <div style={{ marginLeft: 200, marginRight: 200 }}>
      <Tabs defaultActiveKey="overlay" id="uncontrolled-tab-example">
        <Tab eventKey="overlay" title="Overlay" subtitle="inline">
          <Tab.Content>
            <div
              class="demo border"
              style={{ height: 200, backgroundColor: "white" }}
            >
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
                  type="checkbox"
                  // value=""
                  id="flexCheckAuto"
                />
                <label class="form-check-label" for="flexCheckAuto">
                  Auto-trigger the payment form
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  // value=""
                  id="flexCheckAllow"
                  // checked
                />
                <label class="form-check-label" for="flexCheckAllow">
                  Allow single-product purchases only
                </label>
              </div>
            </div>
            <div
              class="demo border"
              style={{ height: 500, backgroundColor: "#f5f5f5" }}
            >
              <div
                style={{
                  marginTop: 30,
                  textAlign: "center",
                  alignItems: "center",
                  // justifyContent: "center",
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
                    readonly
                    style={{ width: 400 }}
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
        <Tab eventKey="embed" title="Embed">
          <Tab.Content>
            <div class="demo border" style={{ height: 400 }}>
              <p>Embed Content Here</p>
            </div>
          </Tab.Content>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Overlay;
