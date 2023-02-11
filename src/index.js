// /*get the content*/
import { content, header, image, foot } from "./dom";
// /*first one */
// header(content, "newClass", "fuck i hope this work");

// /*second one */

// image("../piza.jpg");

// /*third one */

// foot("seif", "i hope this works too?");

const butt1 = document.querySelector(".butt1");
const butt2 = document.querySelector(".butt2");
const butt3 = document.querySelector(".butt3");

butt1.addEventListener("click", () => {
  const div = content.querySelectorAll("div,img");
  for (let i = 0; i < div.length; i++) {
    div[i].remove();
  }
  header("newClass", "fuck i hope this work");
});

butt2.addEventListener("click", () => {
  const div = content.querySelectorAll("div,img");
  for (let i = 0; i < div.length; i++) {
    div[i].remove();
  }
  image("../piza.jpg");
});

butt3.addEventListener("click", () => {
  const div = content.querySelectorAll("div,img");
  for (let i = 0; i < div.length; i++) {
    div[i].remove();
  }
  foot("seif", "i hope this works too?");
});
