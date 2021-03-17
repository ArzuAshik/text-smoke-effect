const text = document.querySelector(".text");
text.innerHTML = text.textContent.replaceAll(" ", "&");
text.innerHTML = replaceWithSpan(text.textContent);

text.textContent.repeat(/\S/g, "<span>$&</span>");

text.addEventListener("mouseover", (event) => {
    event.target.classList.add("active");
});

function replaceWithSpan(string) {
    const stringArray = string.split("");
    let result = "";
    stringArray.forEach(char => {
        const ch = char != "&" ? char : "&nbsp;";
        result += `<span>${ch}</span>`;
    })
    return result;
}