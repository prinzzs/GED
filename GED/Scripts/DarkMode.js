function backgroundColor() {
    let checkBox = document.getElementById("inCheck");

    let root = document.documentElement;
    let primaryColor = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    let secondaryColor = getComputedStyle(root).getPropertyValue("--secondary-color").trim();
    let bodyColor = getComputedStyle(root).getPropertyValue("--body-color").trim();
    let darkBodyColor = getComputedStyle(root).getPropertyValue("--dark-body-color").trim();

    if(checkBox.checked) {
        root.style.setProperty("--primary-color", secondaryColor);
        root.style.setProperty("--secondary-color", primaryColor);
        root.style.setProperty("--body-color", darkBodyColor)
        root.style.setProperty("--dark-body-color", bodyColor)
        localStorage.setItem("bgColor", "dark")
    } else {
        root.style.setProperty("--secondary-color", primaryColor);
        root.style.setProperty("--primary-color", secondaryColor);
        root.style.setProperty("--dark-body-color", bodyColor)
        root.style.setProperty("--body-color", darkBodyColor)
        localStorage.setItem("bgColor", "light");
    }
}

window.addEventListener("load", () => {
    let checkBox = document.getElementById("inCheck");

    let root = document.documentElement;
    let primaryColor = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    let secondaryColor = getComputedStyle(root).getPropertyValue("--secondary-color").trim();
    let bodyColor = getComputedStyle(root).getPropertyValue("--body-color").trim();
    let darkBodyColor = getComputedStyle(root).getPropertyValue("--dark-body-color").trim();

    if(localStorage.getItem("bgColor") === "dark") {
        root.style.setProperty("--primary-color", secondaryColor);
        root.style.setProperty("--secondary-color", primaryColor);
        root.style.setProperty("--body-color", darkBodyColor)
        root.style.setProperty("--dark-body-color", bodyColor)

        checkBox.checked = true;
    } else if(localStorage.getItem("bgColor") === "light") {
        root.style.setProperty("--secondary-color", secondaryColor);
        root.style.setProperty("--primary-color", primaryColor);
        root.style.setProperty("--dark-body-color", darkBodyColor)
        root.style.setProperty("--body-color", bodyColor)
    }
})