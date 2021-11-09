// import '@mdi/font/css/materialdesignicons.css';
import "./main.css";
import button from "../_includes/button/button";

async function run() {
  await button();
}

document.addEventListener("DOMContentLoaded", function (event) {
  run();
});