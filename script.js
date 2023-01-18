console.log('Executando extenção fb-ads-finder');

//  === VARIAVEIS ===
var find_regex = /anúncios/g;
var add_text = 'marcosolha';


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

    var list_number_of_ads =[];

    elementes.forEach( element => {
        // Add Class Style 
        element.classList.add("chamativo");
        element.classList.add("rainbow");
        
        // Change Text Content
        if (element.textContent.match(find_regex)) {
            const original_text = element.textContent;    
            const number_of_ads = Number( original_text.replace(/\D/g, "") );
            list_number_of_ads.push(number_of_ads);  // salva para pintar a tabela de escala 
            const dozens_ads = rage_dozens(number_of_ads);       
            element.textContent = `${original_text} ${add_text} ${dozens_ads}`;            
        }
    });

    printTabelaEscala(list_number_of_ads);
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


function Categoria(escala, ocorrencia) {
    this.Escala = escala;
    this.Ocorrencia = ocorrencia;
}

function printTabelaEscala (list_number_of_ads) {
  const tabela = {};
  tabela.MenosDe10   = new Categoria( "menos de 10"   , list_number_of_ads.filter(x=> x<10           ).length);
  tabela.MaisDe10    = new Categoria( "Mais de 10"    , list_number_of_ads.filter(x=> x>=10 && x<20  ).length);
  tabela.MaisDe20    = new Categoria( "Mais de 20"    , list_number_of_ads.filter(x=> x>=20 && x<30  ).length);
  tabela.MaisDe30    = new Categoria( "Mais de 30"    , list_number_of_ads.filter(x=> x>=30 && x<40  ).length);
  tabela.MaisDe40    = new Categoria( "Mais de 40"    , list_number_of_ads.filter(x=> x>=40 && x<50  ).length);
  tabela.MaisDe50    = new Categoria( "Mais de 50"    , list_number_of_ads.filter(x=> x>=50 && x<60  ).length);
  tabela.MaisDe60    = new Categoria( "Mais de 60"    , list_number_of_ads.filter(x=> x>=60 && x<70  ).length);
  tabela.MaisDe70    = new Categoria( "Mais de 70"    , list_number_of_ads.filter(x=> x>=70 && x<80  ).length);
  tabela.MaisDe80    = new Categoria( "Mais de 80"    , list_number_of_ads.filter(x=> x>=80 && x<90  ).length);
  tabela.MaisDe90    = new Categoria( "Mais de 90"    , list_number_of_ads.filter(x=> x>=90 && x<100 ).length);
  tabela.MaisDe100   = new Categoria( "Mais de 100"   , list_number_of_ads.filter(x=> x>=100         ).length);
  console.table(tabela);
}