export const content = document.getElementById("content");

export function header(content, className, innerHTML) {
  const header = document.createElement("div");
  header.setAttribute("class", `header ${className}`);
  header.innerHTML = innerHTML;
  content.appendChild(header);
}

export function image(source) {
  const image = document.createElement("img");
  image.setAttribute("src", source);
  content.appendChild(image);
}
export function foot(classFoot, innerHTML) {
  const foot = document.createElement("div");
  foot.setAttribute("class", `${classFoot}`);
  foot.innerHTML = innerHTML;
  content.appendChild(foot);
}
