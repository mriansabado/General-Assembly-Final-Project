const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#light-theme");


btn.addEventListener("click", function () {
    // console.log(theme.getAttribute("href"))
    if (theme.getAttribute("href") == "./lightStyle.css") {
        theme.href = "./darkStyle.css";
    } else {
        theme.href = "./lightStyle.css";
    }
});

