let elements = document.getElementsByTagName("td");

let value = document.getElementsByTagName("input")[0];

// elements[0].addEventListener("click", function () {
//     value.value += "";
// });

for (let i = 0; i < elements.length; i++) {
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
