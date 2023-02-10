(() => {
  "use strict";
  const e = document.getElementById("content");
  !(function (e, t, n) {
    const i = document.createElement("div");
    i.setAttribute("class", "header newClass"),
      (i.innerHTML = "fuck i hope this work"),
      e.appendChild(i);
  })(e),
    (function (t) {
      const n = document.createElement("img");
      n.setAttribute("src", "../piza.jpg"), e.appendChild(n);
    })(),
    (function (t, n) {
      const i = document.createElement("div");
      i.setAttribute("class", "seif"),
        (i.innerHTML = "i hope this works too?"),
        e.appendChild(i);
    })();
})();
