onload = function(){
   
  document.getElementById('btn1').addEventListener('click', function(e) { 
      chrome.tabs.executeScript({
          code: ` ( ${delaj.toString()} )() `
        }); 
        console.log('---- %c END CLICK Btn 1','background: #222; color: #f00','\n\n\n')
  });
  
  var getLang = function(txt,activeEl){
      var doTranslit = function(text, engToRus) {
        for (var x = 0; x < rus.length; x++) {
          text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
          text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
        }
        return text;
      };
      var rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g)
      var eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g)

      var lang = {eng:0,rus:0, is(){ if (this.rus === this.eng ) return false ; else if (this.eng<this.rus) return "rus" ; else return "eng"}}
      var len = txt.length
      for (var i = 0; i < 9; i++) {
        if (i== len) break;
        if (eng.indexOf(txt[i]) >= 0) lang.eng++;
        if (rus.indexOf(txt[i]) >= 0) lang.rus++;
      }
      if (lang.is()) return  doTranslit(txt, (lang.is() == "eng"))
  }
  var delaj = function(){
      var txt = window.getSelection().toString().toLocaleLowerCase();
      if (!txt.length) return;
      var activeEl = document.activeElement;
      aa = getLang(txt,activeEl)
      activeEl.value = activeEl.value.replace(txt,aa)
  };

////minizirovana f()
/*
  (function(){var a=function(c){for(var e=function(l,m){for(var n=0;n<f.length;n++)l=l.split(m?g[n]:f[n]).join(m?f[n]:g[n]),l=l.split(m?g[n].toUpperCase():f[n].toUpperCase()).join(m?f[n].toUpperCase():g[n].toUpperCase());return l},f="\u0449   \u0448  \u0447  \u0446  \u044E  \u044F  \u0451  \u0436  \u044A  \u044B  \u044D  \u0430 \u0431 \u0432 \u0433 \u0434 \u0435 \u0437 \u0438 \u0439 \u043A \u043B \u043C \u043D \u043E \u043F \u0440 \u0441 \u0442 \u0443 \u0444 \u0445 \u044C".split(/ +/g),g="shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g),h={eng:0,rus:0,is(){return this.rus!==this.eng&&(this.eng<this.rus?"rus":"eng")}},j=c.length,k=0;9>k&&!(k==j);k++)0<=g.indexOf(c[k])&&h.eng++,0<=f.indexOf(c[k])&&h.rus++;if(h.is())return e(c,"eng"==h.is())};(function(){var c=window.getSelection().toString().toLocaleLowerCase();if(c.length){var d=document.activeElement;aa=a(c,d),d.value=d.value.replace(c,aa)}})()})();
*/

}//, false);
//(function(){console.log(document.activeElement)})()

