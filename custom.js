const GA_ID = "UA-175565856-1";
const GA_DIST = "https://www.googletagmanager.com/gtag/js?" + GA_ID;

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", GA_ID);

addScript(GA_DIST);
