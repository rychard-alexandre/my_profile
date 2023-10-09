function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/Avatar-2.png")
  } else {
    img.setAttribute("src", "./Assets/Avatar-1.png")
  }
}
