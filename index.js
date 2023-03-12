import { defineCustomElements } from "./node_modules/vidstack/elements.d.ts";

defineCustomElements();
console.log("hello world");
let btn = document.querySelector("#clickme");
btn.addEventListener("click", () => {
  alert("Clicked");
});
