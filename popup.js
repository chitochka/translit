
// chrome.browserAction.onClicked.addListener(function(tab) {
//     var output = document.getElementById('output');
//     chrome.tabs.executeScript({
//       code: 'output.innerHTML="asda"; document.body.style.backgroundColor="red"'
//     }); 
//   });


  // output = document.getElementById('output');
  // chrome.tabs.executeScript({
  //   code: 'console.log(window.getSelection().toString())'
  // }); 



document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.getElementById('btn1');
    var output = document.getElementById('output');
    btn1.addEventListener('click', function() { 


        var delaj = function(){
            var txt = window.getSelection().toString().toLocaleLowerCase();
            var activeEl = document.activeElement;
            var rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g)
            var eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g)
            
            var doTranslit = function(text, engToRus) {
              var x;
              for(x = 0; x < rus.length; x++) {
                text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
                text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
              }
              return text;
            };
            
            var getLang = function(txt,activeEl){
              var lang = {eng:0,rus:0, is (){ if (this.rus === this.eng ) return false ; else if (this.eng<this.rus) return "rus" ; else return "eng"}}
              var len = txt.length
              for (var i = 0; i < 9; i++) {
                if (i== len) break;
                if (eng.indexOf(txt[i]) >= 0) lang.eng++;
                if (rus.indexOf(txt[i]) >= 0) lang.rus++;
              }
              if (lang.is()) return  doTranslit(txt, (lang.is() == "eng"))
            }
            aa = getLang(txt,activeEl)
            console.log('\n\n aa',aa)
            console.log("------KONEC-----")
        }

        debugger;
        chrome.tabs.executeScript({
          code: ` ( ${delaj.toString()} )() `
        }); 


    });

}, false);


