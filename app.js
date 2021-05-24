const btn = document.querySelector("#checked");
const theme = document.querySelector("#light-theme");


btn.addEventListener("click", function () {
    // console.log(theme.getAttribute("href"))
    if (theme.getAttribute("href") == "darkStyle.css") {
        theme.href = "lightStyle.css";
        console.log("light")
    } else {
        theme.href = "darkStyle.css";
        console.log("dark")
    }
});

