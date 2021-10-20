# Rendszerterv

A rendszer célja
---

A rendszer célja egy olyan weboldal létrehozása melyen keresztül a felhasználó kérdőívet tölthet ki melyben kéréseket tud megválaszolni egyszerűen letisztult felület mellett. A kérdésekre számértékekkel lehet majd válaszoni melyet a rendszer adatbázisban ment el, hogy  az adatok feldolgozása  könnyen elvégezhető legyen. Két fajta kérdéstípust külömböztetőnk meg jelen esetben, vannak olyan kérdések melyekre a felhsználó háttér ismerete alapján tudhatja a választ, illetve vannak olyan kérdések melyekre a felhasználó becslést ad. Azért, hogy elkerüljük azokat az eseteket melyekben a felhasználó a kérdésekre a választ az internet segítségével találja meg, az egyes kérdésekhez vagy kérdés csoportokhoz időlimitet állítunk be melynek lejárta előtt a felhasználónak választ kell adni az adott kérdésre/kérdésekre. Az ilyen típusú kérdések melyekre a felhasználó tudhatja a választ, azért van szükség, hogy a feldolgozás során a feldolgozást végző eldönthesse, hogy figyelembe akarja e venni azt az egyes kérdések kiértékelésénél, hogy az adott illető jártas volt e az adott témában vagy sem.

Követelmények
---
- A kérdések szám adatokkal megválaszolhatóak kell legyenek.
- A kérdésekre adott válaszokat adatbázisban kell eltárolni.
- Egy kapcsoló segítségével be kell lehessen állítani, hogy a tudást felmérő kérdések illetve a becslés képességet felmérő kérdések vizuálisan megkülömböztethetőek legyenek vagy sem.
- Az egyes kérdésekhez/kérdés csoportokhoz időlimitet kell beállítani amely a felhasználó számára is egyértelműen látható
- Egy admin felületet kell biztosítani az új kérdések hozzáadásanak lehetősége érdekében.
- Minden felhasználótol az adatbázisban szereplő összes kérdést meg kell kérdezni, de ezt nem feltétlen azonos sorrendben.
- A GDPR-nek való megfelelés.