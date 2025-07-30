import { Options, App } from "@4site/engrid-scripts"; // Uses ENGrid via NPM
// import { Options, App } from "../../engrid/packages/scripts"; // Uses ENGrid via Visual Studio Workspace

import "./sass/main.scss";
import { customScript } from "./scripts/main";

if (
  App.getPageType() == "DONATION" &&
  App.getPageNumber() < App.getPageCount()
) {
  // If this is a donation page and not the thank you page, add an exit intent lightbox
  (window as any).EngridExitIntent = {
    enabled: true,
    title: "Did you forget something?",
    text: "Your support will help NPCA continue to protect and conserve our national parks, ensuring that future generations can experience and enjoy the parks that mean so much to us.",
    buttonText: "Finish my donation",
    buttonLink: ".body-main",
    cookieName: "engrid-exit-intent-lightbox",
    cookieDuration: 1,
    triggers: {
      visibilityState: true,
      mousePosition: true,
    },
  };
}

const options: Options = {
  applePay: false,
  CapitalizeFields: true,
  ClickToExpand: true,
  CurrencySymbol: "$",
  DecimalSeparator: ".",
  ThousandsSeparator: ",",
  MediaAttribution: true,
  SkipToMainContentLink: true,
  SrcDefer: true,
  ProgressBar: true,
  Debug: App.getUrlParameter("debug") == "true" ? true : false,
  onLoad: () => customScript(App),
  // NeverBounceAPI: "public_cf1e44ca6007081517c18fd147362623",
  // NeverBounceDateFormat: "YYYYMMDD",
  // NeverBounceDateField: "supporter.NOT_TAGGED_168",
  // NeverBounceStatusField: "supporter.NOT_TAGGED_169",
  onResize: () => console.log("Starter Theme Window Resized"),
};
new App(options);
