(() => {
  "use strict";
  const e = document.getElementById("content"),
    t = document.querySelector(".butt1"),
    n = document.querySelector(".butt2"),
    c = document.querySelector(".butt3");
  t.addEventListener("click", () => {
    const t = e.querySelectorAll("div,img");
    for (let e = 0; e < t.length; e++) t[e].remove();
    !(function (t, n) {
      const c = document.createElement("div");
      c.setAttribute("class", "header newClass"),
        (c.innerHTML = "fuck i hope this work"),
        e.appendChild(c);
    })();
  }),
    n.addEventListener("click", () => {
      const t = e.querySelectorAll("div,img");
      for (let e = 0; e < t.length; e++) t[e].remove();
      !(function (t) {
        const n = document.createElement("img");
        n.setAttribute("src", "../piza.jpg"), e.appendChild(n);
      })();
    }),
    c.addEventListener("click", () => {
      const t = e.querySelectorAll("div,img");
      for (let e = 0; e < t.length; e++) t[e].remove();
      !(function (t, n) {
        const c = document.createElement("div");
        c.setAttribute("class", "seif"),
          (c.innerHTML = "i hope this works too?"),
          e.appendChild(c);
      })();
    });
})();
