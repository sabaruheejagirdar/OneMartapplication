const navButton = document.getElementById("navToggler");
if (navButton) {
  navButton.onclick = function () {
    const navList = document.getElementById("navList");
    if (navList) {
      if (navList.classList.contains("collapse")) {
        navList.classList.remove("collapse");
      } else {
        navList.classList.add("collapse");
      }
    }
  };
}
