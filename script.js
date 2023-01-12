console.log('Executando extenção fb-ads-finder');

replaceText(document.body);

function replaceText(element){

    const find_regex = /anúncios/g;
    const add_text = 'marcosolha';

    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText) //recursivamente vai chamando as funções para os filhos dos elementos
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(find_regex)) {

            const original_text = element.textContent;

            const number_of_ads = Number( original_text.replace(/\D/g, "") );
            const dozens_ads = rage_dozens(number_of_ads);

            element.parentElement.classList.add("chamativo");
            element.parentElement.classList.add("rainbow");
            element.textContent = `${original_text} ${add_text} ${dozens_ads}`;            
        }
    }
}
    
function rage_dozens (num) {
    var res;
    switch (true) {
        case num >= 100:
            res = 100;
            break;

        case num >= 90:
            res = 90;
            break;

        case num >= 80:
            res = 80;
            break;

        case num >= 70:
            res = 70;
            break;

        case num >= 60:
            res = 60;
            break;

        case num >= 50:
            res = 50;
            break;

        case num >= 40:
            res = 40;
            break;

        case num >= 30:
            res = 30;
            break;

        case num >= 20:
            res = 20;
            break;

        case num >= 10:
            res = 10;
            break;
        
        default:
            res = null;
            break;
    }
    return res;
}


