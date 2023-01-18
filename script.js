console.log('Executando extenção fb-ads-finder');

//  === VARIAVEIS ===
const find_regex = /anúncios/g;
const add_text = 'marcosolha';


//  === MAIN ===
var elements = findTextInElementTree(document.body, find_regex);
transformeStyle(elements, find_regex, add_text);


//  === FUNCTIONS ===
function findTextInElementTree(element, text_in_regex) {    
    var list_elemnte_match = [];
    if (element.hasChildNodes()) {
        element.childNodes.forEach(function (node) {   // recursivamente vai chamando as funções para os filhos dos elementos
            var temp = findTextInElementTree(node, text_in_regex);
            list_elemnte_match = [...list_elemnte_match, ...temp];   // concatena o resultado dos filhos com o pai
            return list_elemnte_match;
        });
    } else if (element.nodeType === Text.TEXT_NODE) {   // verifica se nó e do tipo texto
        if (element.textContent.match(text_in_regex)) {
            return [element.parentElement];
        }
    }
    return list_elemnte_match;
}

function transformeStyle (elementes, find_regex, add_text) {

    elementes.forEach( element => {
        element.classList.add("chamativo");
        element.classList.add("rainbow");
        
        if (element.textContent.match(find_regex)) {
            const original_text = element.textContent;    
            const number_of_ads = Number( original_text.replace(/\D/g, "") );
            const dozens_ads = rage_dozens(number_of_ads);        
            element.textContent = `${original_text} ${add_text} ${dozens_ads}`;            
        }

    });
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


