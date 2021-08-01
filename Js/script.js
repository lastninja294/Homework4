let elements = document.getElementsByTagName("td");

let value = document.getElementsByTagName("input")[0];

// elements[0].addEventListener("click", function () {
//     value.value += "";
// });

for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerText == "X") {
        elements[i].addEventListener("click", function () {
            value.value += "*";
        });
    }
    if (elements[i].innerText == "MC") {
        elements[i].addEventListener("click", function () {
            value.value = "";
        });
    }
    if (elements[i].innerText == "M+") {
        elements[i].addEventListener("click", function () {
            value.value = "";
        });
    }
    if (elements[i].innerText == "=") {
        elements[i].addEventListener("click", function () {
            value.value = eval(value.value);
        });
    }
    if (
        elements[i].innerHTML != "MC" &&
        elements[i].innerHTML != "X" &&
        elements[i].innerHTML != "M+" &&
        elements[i].innerHTML != "="
    ) {
        elements[i].addEventListener("click", function () {
            value.value += elements[i].innerText;
        });
    }
}
