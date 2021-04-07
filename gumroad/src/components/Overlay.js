import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

const Overlay = () => {
  const [product, setProduct] = useState("Buy my product");

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
                  type="button"
                  class="btn btn-light"
                  placeholder="Buy my product"
                  value={product}
                  style={{
                    width: "20%",
                    margin: 50,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                    border: "solid",
                    borderWidth: "1px",
                    borderColor: "grey",
                  }}
                />
                <h6>Copy and paste this code into your website</h6>
                <h8>
                  We highly recommend you have an SSL certificate to increase
                  buyer confidence.
                </h8>
              </div>
            </div>
          </Tab.Content>
        </Tab>
        <Tab eventKey="embed" title="Embed">
          <Tab.Content>
            <div class="demo border" style={{ height: 400 }}>
              <p>Embed Content Here</p>
            </div>{" "}
          </Tab.Content>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Overlay;
