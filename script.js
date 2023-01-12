console.log('oi, eu sou a sua extenção fb-ads-finder');

replaceText(document.body);

function replaceText(element){

    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText) //recursivamente vai chamando as funções para os filhos dos elementos
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/COVID/gi)) {
            //element.parentElement.style.backgroundColor = 'pink';
            element.parentElement.classList.add("chamativo");
            element.parentElement.classList.add("rainbow");
        }
        /* Exemplo replace text
        if (element.nodeType === Text.TEXT_NODE) {
            element.textContent = element.textContent.replace(/COVID/gi, 'OLÁ MUNDO!');
            element.parentElement.style.backgroundColor = 'pink';
        } */
    }
}
    
    
    /* Exemplo replace text
    if (element.nodeType === Text.TEXT_NODE) {
        element.textContent = element.textContent.replace(/COVID/gi, 'OLÁ MUNDO!');
        element.parentElement.style.backgroundColor = 'pink';
    } */



