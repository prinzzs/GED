function backgroundColor() {
    let checkBox = document.getElementById("inCheck");

    let root = document.documentElement;
    let primaryColor = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    let secondaryColor = getComputedStyle(root).getPropertyValue("--secondary-color").trim();

    if(checkBox.checked) {
        root.style.setProperty("--primary-color", secondaryColor);
        root.style.setProperty("--secondary-color", primaryColor);
        localStorage.setItem("bgColor", "dark")
    } else {
        root.style.setProperty("--secondary-color", primaryColor);
        root.style.setProperty("--primary-color", secondaryColor);
        localStorage.setItem("bgColor", "light");
    }
}

window.addEventListener("load", () => {
    let checkBox = document.getElementById("inCheck");

    let root = document.documentElement;
    let primaryColor = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    let secondaryColor = getComputedStyle(root).getPropertyValue("--secondary-color").trim();

    if(localStorage.getItem("bgColor") === "dark") {
        root.style.setProperty("--primary-color", secondaryColor);
        root.style.setProperty("--secondary-color", primaryColor);
        checkBox.checked = true;
    } else if(localStorage.getItem("bgColor") === "light") {
        root.style.setProperty("--secondary-color", secondaryColor);
        root.style.setProperty("--primary-color", primaryColor);
    }
})