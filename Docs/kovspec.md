Követelményspecifikáció
=========================

Áttekintés
----------
Egy olyan weboldalt fejlesztünk, amely segítségével kérdőívek kitöltése valósítható meg egyszerűen és az eltárolt adatokat adatbázisban tároljuk el a későbbi feldolgozhatóság végett.

Jelenlegi helyzet
-----------------

Rendszerünk célja, hogy a weboldalt használók tudását olyan módon mérjük fel, hogy egy kérdésre a válaszukat nem lehet a válaszadás időpontjában ellenőrizni. Célunk az lenne, hogy úgy gyűjtsünk adatot a felhasználóktól, hogy egy adott témában a tudásukat felmérve válaszoljanak olyan kérdésekre, amire választ csak a jövőben találhat bárki. A lényege a projektnek, hogy olyan adatokat gyűjtsünk ami sport, politikai vagy egyéb területeken tudja megvizsgálni hogy egyes embereknek mennyire van szüksége ismeretekre az adott témában, hogy megmondhassa mi fog történni a jövőbe.

Vágyálomrendszer leírása
---------

A projekt célja hogy egy olyan weboldalt hozzon létre, amelyen egy olyan kérdőívet tölthetünk ki amely háttértudást tekintve két fajta kérdéstípust tartalmaz. Azaz tartalmaz olyan kérdéseket amelyek a felhasználó háttértudását térképezik fel amelyet adott esetben időkorlát mellett kell megválaszolniuk, illetve olyan kérdések amelyek a felhasználó becslés képességeit mérik fel. Ezek a kérdések legyenek témák szerint rendezve és ennek megfelelő sorrendben és módon jelenjenek meg.

Funkcionális követelmények
-----

A kezelő felületnek jól átláthatónak, letisztultnak és esztétikusnak kell lennie. A könnyen beállítható kell legyen az, hogy a felhasználó ránézésre meg tudja-e állapítani vagy nem, hogy az adott kérdés a  háttértudását vagy a becslőképességét kívánja e felmérni. Az egyes kérdés témákhoz legkevesebb két háttértudást felmérő kérdés és egy becslőképességet felmérő kérdés tartozzon. A háttértudást felmérő kérdésekhez tartozzon időkorlát. A bekért és eltárolt adatok szám formátumúak legyenek.

A rendszerre vonatkozó szabályok 
--------
A web felület szabványos eszközökkel készüljön, html/css/javascript. A képek jpeg és png formátumúak lehetnek. A felhasználókat azonosító web oldalak esetében szükséges jogszabályokat be kell tartani: GDPR, ...

Jelenlegi üzleti folyamatok modellje
------------------------------------

A mai világban az adatgyűjtés, és tudáshoz hozzájutás egyszerűvé vált, így az egyes tudásfelmérő tesztek könnyen kijátszhatók. Álltalában, pl. sporttal kapcsolatban olyanoktól várunk el jövőbeli sportesemények eredményét hitelesen, akik tájékozottak az adott témában, és sok múlbeli tapasztalatuk van. Mi olyan adatokat szeretnénk gyűjteni, ami megcáfolhaja, esetleg megerősítheti a hasonló véleményeket akár sprtban, akár politikában vagy bármeny más témában.

Igényelt üzleti folyamatok 
---------
- Online megjelenés 
- Kérdések megjelenítése kategóriánként
- Óra megjelenítése

Követelmények listája 
------
| ID | Leírás |
|----| ------ |
|F1| Könnyen kezelhető   |
|F2| Váaszolás bevivetli mező segítségével  |
|F3| Időkorlát a háttértduásra irányuló kérdéseknél|
|F4| Vizuális megkülömböztetés a kérdéstípusok között|
|F5| A kérdések sorrendje kategóriánkénti történjen|

Fogalomtár
-----

- Kategória:  Egynemű csoport, amely személyekből, tárgyakból vagy dolgokból áll. Minden ilyen csoport hasonló jellemzők vagy típus alapján különválasztható egy másiktól.

- Kérdőív: Több azonos témájú kérdésből álló űrlap, melyet a felhasználó tölt ki.

- GDPR:	A GDPR a General Data Protection Regulation kezdőbetűiből képzett mozaikszó, magyarul általános adatvédelmi rendelet. 2018 májusától lépett életbe az EU 28 tagállamában, így Magyarországon is, és alapjaiban forgatja fel a korábbi adatvédelmi rutint. Nem véletlen, hogy a legszigorúbb rendeletek között tartják számon: a NAIH (Nemzeti Adatvédelmi Hivatal) akár 20 millió euróig (6 milliárd Ft) terjedő büntetést is kiszabhat azokra, akik nem tartják be az adatvédelmi szabályokat.
