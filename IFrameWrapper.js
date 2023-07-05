import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import { IFrame } from "./Iframe";

class IFrameWrapper extends reactToWebComponent(IFrame, React, ReactDOM, {
  shadow: "open",
  props: ["name", "title", "src", "height"],
}) {
  static getMetaConfig = () => ({
    controlName: "react-iframe",
    version: "1.3",
    description: "Iframe component which renders content from a source URL",
    iconUrl: "one-line-text",
    groupName: "Visual",
    fallbackDisableSubmit: false,
    properties: {
      src: {
        type: "string",
        title: "Source URL",
        description:
          "URL of the content to display. Note that some sites may not allow content to be rendered in an iframe",
      },
      height: {
        type: "string",
        title: "Height",
        description: "Height of the component",
      },
    },
    standardProperties: {
      readOnly: true,
      required: true,
      description: true,
    },
  });
}

customElements.define("nintex-react-iframe", IFrameWrapper);
