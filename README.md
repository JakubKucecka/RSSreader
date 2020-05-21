
# RSS reader, Kučečka Jakub, 92068

RSS reader je písaný v JavaScripte. Commituje sa do master vetvy a zmeny sa prejavia v gh-pages, odkiaľ sa aj načítajú zdroje pre stránku, ktorú nájdeme na [adrese](https://jakubkucecka.github.io/RSSreader/). Repozitár je umiestnený na [githube](https://github.com/JakubKucecka/RSSreader). 

Vykonáva sa deploy pomocou TravisCI v podobe minifikácie .js, .css, .html, .jpeg a .ico súborov. CICD pipelines je vidno v súbore Gruntfile.js. Výstup TravisCI vidíme na obrázku s názvom travisCI.jpg.
![Výstup z TravisCI](https://github.com/JakubKucecka/RSSreader/blob/master/travisCI.jpg)

CORS obchádzam pomocou webu https://cors-anywhere.herokuapp.com/, kde ako parameter sa pridá daná URL, z ktorej chceme XML natiahnuť.