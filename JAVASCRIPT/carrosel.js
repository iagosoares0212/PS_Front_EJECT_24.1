const controle = document.querySelectorAll(".controle");
let currentItem = 0;
const item = document.querySelectorAll(".item");
const maxItems = item.length;

controle.forEach(controle => {
    controle.addEventListener("click", () => {
        const esquerda = controle.classList.contains("left");
        if(esquerda) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if(currentItem >= maxItems) {
            currentItem = 0
        }
        if(currentItem < 0) {
            currentItem = maxItems - 1
        }
        itens.foreach(item => item.classList.remove("current_item"))
    });
    itens[currentItem].scrollIntoView({
        inline : "center"
    })
});