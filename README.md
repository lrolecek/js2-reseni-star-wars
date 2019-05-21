# Úkol 5 - Star Wars API

Nechám na tobě, zda si pro splnění tohoto úkolu vytvoříš nějakou třídu (nebo jen funkce) v samostatném modulu, které pak budeš volat, nebo zda celý program napíšeš přímo do hlavního souboru *index.js*. Když oddělíš funkce do samostatného modulu, bude program čistší a čitelnější.

*Dole na této stránce je [návod na instalaci](#Návod-na-instalaci-startovního-balíčku-pro-úkol), jak si tento startovní balíček pro domácí úkol zprovoznit u sebe na počítači. Prosím přečti si ho, trochu se změnil postup, jak budeme startovní balíčky stahovat/instalovat.*


## "Povinná" část úkolu

**Celý úkol je dobrovolný**, takže nemá cenu rozlišovat mezi povinnou a bonusovou částí, ale ber to tak, že "povinný" úkol 1 bys měla zvládnout v každém případě. Nevíš-li jak, **ptej se**. Toto je opravdu základ, bez jehož pochopení budeš mít potíže v druhé půlce kurzu.

1. **Seznam filmů**

   Použij [Star Wars API](https://swapi.co) a získej z něho a následně zobraz na stránce seznam Star Wars filmů.

   Endpoint pro stažení dat je `https://swapi.co/films/`

   Udělej `fetch` na tuto adresu a odpověď ze serveru zpracuj jako JSON data. Na hlavní stránce https://swapi.co/ napiš do vstupního pole `films`, klikni na tlačítko **Request** a podívej se, v jakém formátu seznam filmů dostaneš.

   Uvidíš, že ve vráceném objektu je vlastnost `results`, která obsahuje pole všech filmů (v datech chybí epizoda 8, ale nebudeme slovíčkařit).

   Toto pole vypiš do stránky dovnitř prvku `<div id="films"></div>`.

   Z každého filmu vypiš číslo epizody, název filmu, rok vydání a jméno režiséra. V datech ze serveru není rok vydání samostatně uveden, ale je tam hodnota `release_date`, která obsahuje datum vydání ve formátu '1975-05-25'. Když z tohoto textového řetězce získáš pouze první 4 znaky, máš rok vydání. Použij metodu `slice` textového řetězce - [dokumentace na MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice).

   Pro každý jednotlivý film použij následující šablonu:

   ```html
   <div class="film">
     <div class="film__episode">4</div>
     <div class="film__data">
       <div class="film__name">A New Hope</div>
       <div class="film__year">1977</div>
       <div class="film_director">George Lucas</div>
     </div>
   </div>
   ```

   Nezapomeň, že do stránky vypisujeme HTML obsah, takže musíš použít vlastnost `innerHTML` cílového objektu nebo třeba metodu `insertAdjacentHTML` ([dokumentace na MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)).


## Bonusové úkoly

2. **Filmy seřaď vzestupně podle čísla epizody.**

   Pro řazení použij metodu pole `.sort`. Dokumentaci k metodě sort [najdeš na MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) nebo se podívej na [návod zde](https://thomlom.dev/what-you-should-know-about-js-arrays/). Případně se můžeš mrknout na [video o metodě sort](https://www.youtube.com/watch?v=kGCQJdikZCo&list=PLTCx5oiCrIJ4t6lZhFqH3SHI74QI_HjDn&index=8&t=4764s) z kurzu JavaScript 1.


3. **Přidej tlačítka pro řazení**

   Do HTML přidej tlačítka, která ti umožní přepínat mezi řazením seznamu filmů vzestupně nebo setupně podle čísla epizody nebo podle roku vydání.

   Na vzhledu tlačítek nezáleží, ale chceš-li využít v CSS připravený vzhled, použij pro ně následující HTML kód:

   ```html
   <div class="sort-buttons">
     <button id="sort-episode-up" class="button"><i class="fas fa-long-arrow-alt-up"></i> epizoda</button>
     <button id="sort-episode-down" class="button"><i class="fas fa-long-arrow-alt-down"></i> epizoda</button>
     <button id="sort-year-up" class="button"><i class="fas fa-long-arrow-alt-up"></i> rok</button>
     <button id="sort-year-down" class="button"><i class="fas fa-long-arrow-alt-down"></i> rok</button>
   </div>
   ```


4. **Během čekání na odpověď zobraz indikátor načítání**

   Získat data ze Star Wars API chvíli trvá. Záleží na tom, jak jsi program napsala, ale možná sis všimla, že než se data na stránce zobrazí, je tam znatelná prodleva.

   Před započetím stahováním dat zobraz na stránce indikátor načítání - může to být animovaný gif točícího se kolečka nebo klidně jen text *Načítám data...*

   Až budou data načtená (nebo dojde-li k chybě), indikátor znovu schovej.

## Návod na instalaci startovního balíčku pro úkol

1. Vytvoř si na svém GitHubu nový repozitář a nějak si ho pojmenuj (např. *ukol5-star-wars*).
2. Při vytváření nového repozitáře **nezaškrtávej** volbu **Initialize this repository with README**.
3. Objeví se tvůj nový prázdný repozitář, kde máš hned na úvodní stránce několik možností. Vyber poslední z nich **Import code from another repository** - klikni na tlačítko **Import code**.
4. Na následující obrazovce do pole **Your old repository’s clone URL** zadej `https://github.com/lrolecek/javascript2-start` a klikni na zelené tlačítko **Begin import**.
5. Chvilku to potrvá, ale nakonec se objeví hlášení, že je vše hotovo. Kliknutím na odkaz se jménem tvého repozitáře ho otevřeš.
6. V repozitáři s naimportovaným kódem klikni na zelené tlačítko **Clone or download** a vyber volbu **Open in desktop**, aby se ti repozitář zkopíroval k tobě na disk.
7. V aplikaci GitHub Desktop kliknutím na **Open in VS Code** otevřeš složku s projektem v editoru.
8. V editoru otevři terminál (příkazový řádek) - klávesovou zkratkou `Ctrl ~` nebo v menu volbou `Terminal > New Terminal`.
9. Spusť `npm install`, aby se ti nainstaloval Webpack, Babel, a vše potřebné.

## Práce na projektu a spouštění

1. HTML a CSS upravuj v kořenové složce projektu v souboru **index.html**
2. JavaScript edituj uvnitř složky **/src**, výchozí soubor se vždy jmenuje **index.js**, ale podle potřeby můžeš vytvářet další *.js* soubory a do indexu je importovat.
3. Pomocí příkazu `npm run serve` v terminálu spustíš sekvenci příkazů, která zkompiluje tvůj zdrojový kód, spustí lokální webový server a otevře tvůj projekt v prohlížeči.
4. Webový server automaticky čeká na jakékoliv změny v javascriptovém kódu. Pokud v editoru upravíš svůj program, proběhne automatická kompilace a samo se obnoví okno prohlížeče. V případě, že budeš měnit HTML nebo CSS, musíš obnovení okna provést ručně.
5. Běžící server v terminálu ukončíš stiskem `Ctrl C`.
