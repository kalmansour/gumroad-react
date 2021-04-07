import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const Overlay = () => {
  return (
    <div style={{ marginLeft: 200, marginRight: 200 }}>
      <Tabs defaultActiveKey="overlay" id="uncontrolled-tab-example">
        <Tab eventKey="overlay" title="Overlay">
          <h6>Overlay Content</h6>
        </Tab>
        <Tab eventKey="embed" title="Embed">
          <div style={{ marginTop: 20 }}>
            <p>Embed Content Here</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Overlay;
