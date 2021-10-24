Funkcionális specifikáció
=========================

Áttekintés
----------
Egy olyan weboldalt fejlesztünk, amely segítségével kérdőívek kitöltése valósítható meg egyszerűen és az eltárolt adatokat számok formájában tároljuk el az adatbázisban a könnyebb feldolgozhatóság végett.

Jelenlegi helyzet
-----------------

A megrendelő szeretné, hogy a weboldalt használók tudását olyan módon mérjük fel, hogy egy kérdésre a válaszukat nem lehet a válaszadás időpontjában ellenőrizni. Célunk az lenne, hogy úgy gyűjtsünk adatot a felhasználóktól, hogy egy adott témában a tudásukat felmérve válaszoljanak olyan kérdésekre, amire választ csak a jövőben találhat bárki. A lényege a projektnek, hogy olyan adatokat gyűjtsünk ami sport, politikai vagy egyéb területeken tudja megvizsgálni hogy egyes embereknek mennyire van szüksége ismeretekre az adott témában, hogy megmondhassa mi fog történni a jövőbe.


Követelménylista
----
| ID | Leírás |
|----| ------ |
|F1| A felület lesztul kell, hogy legyen és egyértelmű kell legyen, hogy milyen sorrendben kell haladni a kérdésekkel illetve, hogy hol tartunk a kérdőív kitöltésével. |
|F2| Egyértelmű kell legyen, hogy a beviteli mező milyen értékkekel tölthető ki. |
|F3| A háttértudást felmérő kérdésekhez időkorlátot kell beállítani és ezt a tesztet kitöltőjének is megfelelően jelezni kell.|
|F4| A háttértudást illetve becslésképességet felmérő kérdéseket vizuálisan is meg kell tudni külömböztetni amennyiben ez szükséges.|
|F5| A azonos kategóriacsoportba tartozó kérdések egymás után kell, hogy megjelenjenek és egy kategórában mindek kérdés megválaszolása után jöhetnek az új kategória kérdései.|

Jelenlegi üzleti folyamatok modellje
------------------------------------

A mai világban az adatgyűjtés, és tudáshoz hozzájutás egyszerűvé vált, így az egyes tudásfelmérő tesztek könnyen kijátszhatók. Álltalában, pl. sporttal kapcsolatban olyanoktól várunk el jövőbeli sportesemények eredményét hitelesen, akik tájékozottak az adott témában, és sok múlbeli tapasztalatuk van. Mi olyan adatokat szeretnénk gyűjteni, ami megcáfolhaja, esetleg megerősítheti a hasonló véleményeket akár sprtban, akár politikában vagy bármeny más témában.

Fogalomtár
---

- HTML: A HTML (angolul: HyperText Markup Language) egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C támogatásával. Az aktuális változata az 5, ezt a verziót használjuk mi is.
- CSS: A CSS (_Cascading  Style  Sheets_) egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le. Weblapunk stílusát ezzel készítjük el.
- JavaScript: A JavaScript  programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak. A weblapunk programozásához lesz szükségünk rá.
- TypeScript: A TypeScript a Microsoft által kifejlesztett és fenntartott programozási nyelv. A JavaScript szigorú szintaktikai felülhalmaza, és
- PHP: A PHP egy általános szerveroldali szkriptnyelv dinamikus weblapok készítésére. Az első szkriptnyelvek egyike, amely külső fájl használata helyett HTML oldalba ágyazható. opcionális statikus gépelést ad a nyelvhez. A TypeScript nagy alkalmazások fejlesztésére és a JavaScript-re
- Angular: Az Angular egy TypeScript-alapú ingyenes és nyílt forráskódú webalkalmazás-keret, amelyet a Google Angular Team, valamint egyének és vállalatok közössége vezet. Az Angular egy ugyanazon csapat teljes átírása, amely felépítette az AngularJS-t. fordításra készült.

