
// chrome.browserAction.onClicked.addListener(function(tab) {
//     var output = document.getElementById('output');
//     chrome.tabs.executeScript({
//       code: 'output.innerHTML="asda"; document.body.style.backgroundColor="red"'
//     }); 
//   });


  output = document.getElementById('output');
  chrome.tabs.executeScript({
    code: 'console.log(window.getSelection().toString())'
  }); 



document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    var btn1 = document.getElementById('btn1');
    var output = document.getElementById('output');
    btn1.addEventListener('click', function() { 
        output.innerHTML += ' click ';
        const convert = function(){
          var select = window.getSelection();

        }
        

        
        debugger;
        var txt = "Съешь ещё этих мягких французских булок, да выпей же чаю!";
        console.log(transliterate(txt));
        console.log(transliterate(transliterate(txt), true));
        var delaj = function(selection,tag){
            var getTXT = function(selection,tag){
              // txt = window.getSelection().toLocaleLowerCase();
              var txt = selection.toString();
              var lang = {eng:0,rus:0, is (){ if (this.rus === this.eng ) return false ; else if (this.eng<this.rus) return "rus" ; else return "eng"}}
              var len = txt.length
              for (var i = 0; i < 9; i++) {
                if (i== len) break;
                if (eng.indexOf(txt[i])) lang.eng++;
                if (rus.indexOf(txt[i])) lang.rus++;
              }
              if (lang.kolik()) return  transliterate(txt, (lang.eng == "eng"))
            }
            aa = getTXT(selection,tag)
            console.log()
        }
        steCode = "(" + delaj.toString() + ")() "

        chrome.tabs.executeScript({
          code: 'console.log(window.getSelection(),document.activeElement);'+ "(" + delaj.toString() + ")() "
        }); 


    });

    //Если с английского на русский, то передаём вторым параметром true.
       transliterate = (
        function() {
          
            rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g)
            eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g)
          ;
          return function(text, engToRus) {
            var x;
            for(x = 0; x < rus.length; x++) {
              text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
              text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
            }
            return text;
          }
        }
      )();
       txt = "Съешь ещё этих мягких французских булок, да выпей же чаю!";




      btn3 = document.getElementById('btn3');
      btn3.addEventListener('click', function(){
        

      })  //onclick btn3
    


}, false);


