# Projectdocumentatie: Van Engelen Management, Advies en Training

Studio JAPI, website-herontwerp, opgeleverd als volledige, statische
meerpaginawebsite.

## 1. Samenvatting van het project

Dit is de vierde fase van het project. In de eerste fase is een losse
sales-homepage gebouwd om aan de klant te laten zien hoe hun site beter
zou kunnen. De tweede fase verving dat concept door een volwaardige,
meerpaginawebsite: elf pagina's, een eigen ontwerprichting, een reeks
daadwerkelijk gebouwde signature interactions, volledige SEO/GEO-
voorbereiding en een QA-ronde met geautomatiseerde schermafbeeldingen op
mobiel, tablet en desktop. In de derde fase is het hele visuele ontwerp
op verzoek van de klant grondig herzien: nieuwe, strakkere typografie,
een veel sterker aanwezige rode huisstijlkleur, een volledig opnieuw
ontworpen dienstenpagina en merkbaar meer scroll- en interactie-
animaties door de hele site heen (zie hoofdstuk 4 en 5). In deze vierde
fase is, op basis van verdere feedback, de aangepaste cursor weer
verwijderd (gewone muisaanwijzer), is er meer lopende tekst toegevoegd,
is er een kleurovergang en zijn er zachter afgeronde vormen toegepast,
en is vervolgens de hele site herstructureerd: de veelgestelde vragen
staan nu als sectie op de homepage in plaats van op een eigen pagina,
alle foto's zijn vervangen door duidelijk gelabelde placeholder-vlakken
(zie `FOTOS-NODIG.md`), de site gebruikt nu overal nette URL's zonder
`.html` via een map-per-pagina-structuur (bijvoorbeeld `/diensten/` in
plaats van `/diensten.html`) met bijbehorende 301-redirects,
canonicals, sitemap en structured data, en de uitlijning van de
dienstenpagina is gecorrigeerd (zie hoofdstuk 3, 7 en 9).

## 2. Bronnen die zijn geanalyseerd

1. **De bestaande website** (vemat.nl): alle acht pagina's zijn
   bezocht en de tekst is geëxtraheerd: Home, Management, Advies,
   Training, Over van Engelen, Partners, Klanten, Contact.
2. **Het eerdere homepage-concept** (fase 1): gebruikt als
   inspiratiebron, maar bewust niet gekopieerd. De vormgeving is
   ingrijpend herzien (zie hoofdstuk 4).

### Wat we uit de bestaande website hebben gehaald

- Bedrijfsnaam, tagline ("Van Engelen. Verrassend Effectief!"),
  kernboodschap per dienst.
- Frank van Engelen als eigenaar/directeur, met zijn letterlijke
  citaat: *"Als ik uw product kan ervaren of beleven, dan kan ik het
  verkopen."*
- Ruim 15 jaar ervaring, klanten variërend van MKB tot multinational.
- De kernfilosofie: evenveel aandacht voor soft skills als hard
  skills; de waarde van een externe, onbevooroordeelde blik.
- Specifieke inhoud per dienst (zie hoofdstuk 3).

### Wat ontbrak op de bestaande website

- Telefoonnummer, adres, KvK-nummer: nergens vermeld; contact loopt
  volledig via een webformulier.
- Namen van klanten, partners, testimonials, cijfers/resultaten,
  certificeringen: niets van dit alles was aanwezig. De pagina's
  "Partners" en "Klanten" waren nog lege sjabloonpagina's.
- Een portretfoto van Frank van Engelen specifiek (de site gebruikte
  een Open Graph-afbeelding met zijn naam in de bestandsnaam, maar
  deze kon niet via deze omgeving worden opgehaald vanwege
  netwerkbeperkingen in de sandbox, zie `FOTOS-NODIG.md`).

**Conform de opdracht is niets van het bovenstaande verzonnen.** Waar
informatie ontbreekt, is dit op de site zelf of in de documentatie
expliciet gemarkeerd (bijvoorbeeld: "nog te verifiëren met de klant",
"foto ter illustratie").

## 3. Sitemap (9 publieke pagina's + foutpagina, nette URL's zonder `.html`)

Sinds fase 4 gebruikt de site een map-per-pagina-structuur
(`<pagina>/index.html`), waardoor elke publieke URL geen `.html`-
extensie meer heeft. De veelgestelde vragen zijn geen eigen pagina
meer, maar een sectie (`/#faq`) op de homepage:

```
/                  index.html              Homepage (incl. veelgestelde vragen)
/diensten/         diensten/index.html     Dienstenoverzicht
/training/         training/index.html     Dienst: Training
/advies/           advies/index.html       Dienst: Advies
/management/       management/index.html   Dienst: Interim management
/over-ons/         over-ons/index.html     Over ons / Frank van Engelen
/contact/          contact/index.html      Contact + formulier
/privacy/          privacy/index.html      Privacyverklaring (concept)
/cookiebeleid/     cookiebeleid/index.html Cookiebeleid (concept)
/404.html          404.html                Foutpagina (uitzondering: blijft op deze locatie, standaard bij Cloudflare Pages)
```

Alle oude `.html`-adressen van deze website (inclusief `/faq.html`) en
de nog oudere vemat.nl-adressen worden met een 301-redirect naar hun
nieuwe, nette tegenhanger gestuurd via het `_redirects`-bestand (zie
`REDIRECTS.md`). Canonical URL's, `sitemap.xml`, de structured data
(JSON-LD) en alle interne links/navigatie/knoppen/CTA's zijn
bijgewerkt naar deze nieuwe structuur. Deze opzet (`SLUGS`-structuur in
de generator) is consequent en uitbreidbaar: een nieuwe pagina in de
toekomst krijgt automatisch dezelfde map-per-pagina-opzet.

**Bewuste keuze:** geen aparte "Partners" of "Klanten"-pagina's, omdat
deze op de bestaande site leeg waren en er geen content voor is
aangeleverd. Beter geen pagina dan een lege pagina, conform de
instructie om geen paginavulling te verzinnen. De oude URL's hiervoor
verwijzen door naar "Over ons" (zie `REDIRECTS.md`).

## 4. Ontwerprichting (herzien in fase 3)

### Van redactioneel naar strak, rood en dynamisch

De tweede fase koos een rustige, redactionele richting: een serif
kop-lettertype (Fraunces), rood dat alleen spaarzaam als accent werd
ingezet, en nagenoeg geen scrollanimaties. Na beoordeling door de klant
bleek dit onvoldoende onderscheidend en te stil voor een bureau dat
zich met grote organisaties en multinationals wil meten. In fase 3 is
het ontwerp daarom grondig herzien, met vier concrete wijzigingen:

- **Typografie**: Fraunces is volledig vervangen door **IBM Plex Sans**
  (koppen, met strakke, licht negatieve letterspatiëring) gecombineerd
  met **Inter** (lopende tekst). Beide zijn strakke, moderne
  sans-serifs zonder ronde of speelse vormen, met een duidelijk
  hiërarchisch verschil tussen grote titels, subtitels en body-tekst.
  Dit is consequent doorgevoerd op elke pagina, inclusief navigatie,
  knoppen, formulieren en footer.
- **Kleurgebruik**: de rode huisstijlkleur (#E51922) wordt nu veel
  sterker en op veel meer plekken ingezet: primaire CTA-knoppen,
  hover-effecten, actieve navigatie-elementen, formulier-focusstijlen,
  grote cijfers en iconen, decoratieve lijnen en vormen, en hele
  rode secties (de contact-call-to-action-band en de donkerrode
  secties op de dienstenpagina). De basis blijft bewust neutraal
  (inkt, papier, steengrijs), zodat de site geen volledig rode
  website wordt: rood geeft karakter en herkenbaarheid, niet de
  hoofdkleur van elke pagina.
- **Beweging**: er is een volledig nieuw scroll-reveal-systeem
  gebouwd, met staggered animaties per sectie, richtinggevoelige
  reveals (van links, rechts of met een lichte schaalbeweging) en een
  subtiele parallaxbeweging op hero- en dienstenfoto's. Alles
  respecteert `prefers-reduced-motion` en is uitgeschakeld op
  touchscreens waar het niet past. **Update fase 4:** de aangepaste
  cursor (zie fase 3) is op verzoek van de klant weer volledig
  verwijderd; bezoekers zien nu overal de gewone systeemmuisaanwijzer.
- **Structuur**: haarlijnen en witruimte blijven behouden waar ze
  werken, maar zijn aangevuld met grotere, afwisselende contentblokken
  op de dienstenpagina (zie hoofdstuk 5) in plaats van de eerdere,
  eenvoudige kaartjeslayout. Nummering (01/02/03) wordt nog altijd
  alleen gebruikt waar daadwerkelijk sprake is van een volgorde, nooit
  als pure decoratie.

Alle bovenstaande wijzigingen zijn doorgevoerd op alle pagina's, met
behoud van de bestaande inhoud, functionaliteit en SEO/GEO-opzet uit
fase 2. **Update fase 4:** daarnaast is een subtiele kleurovergang
("gradient") toegepast op de rode huisstijlkleur (knoppen, rode
secties) in plaats van een volledig vlakke roodtint, en zijn vormen
(knoppen, kaarten, hero-afbeelding) iets ronder gemaakt in plaats van
strak rechthoekig, op verzoek van de klant.

## 5. De signature interactions (bijgewerkt in fase 3)

Dit zijn geen losse suggesties, maar daadwerkelijk gebouwde onderdelen
van de site (`assets/js/main.js` + `assets/css/styles.css`):

1. **Gewone systeemmuisaanwijzer**: de aangepaste cursor uit fase 3 is
   in fase 4 op verzoek van de klant volledig verwijderd (zowel de
   CSS als de bijbehorende JavaScript-logica), zodat bezoekers overal
   de standaard muisaanwijzer van hun eigen besturingssysteem zien.
2. **Scroll-reveal-systeem (nieuw)**: secties, tekstblokken en
   dienstenkaarten verschijnen vloeiend in beeld tijdens het scrollen,
   met gestaffelde vertragingen per groep en richtinggevoelige
   varianten. De basisstatus van elk element is altijd volledig
   zichtbaar: alleen wanneer JavaScript succesvol is geladen, wordt de
   animatie geactiveerd. Hierdoor kan content nooit per ongeluk
   onzichtbaar blijven.
3. **Subtiele parallax**: hero- en dienstenfoto's bewegen licht
   (maximaal enkele pixels) tegen de scrollrichting in, voor een
   gevoel van diepte. Uitgeschakeld bij `prefers-reduced-motion` en op
   aanraakschermen.
4. **Sticky scroll-vertelling voor de drie diensten** (homepage): de
   foto blijft op zijn plek staan terwijl de bezoeker door de
   tekstblokken van Training, Advies en Interim management scrollt; de
   foto wisselt mee met het onderdeel dat in beeld is. Op mobiel valt
   dit automatisch terug op een normale, gestapelde weergave.
5. **Magnetische knoppen**: de belangrijkste call-to-action-knoppen
   bewegen licht met de muis mee binnen hun eigen grenzen, voor een
   subtiele, premium aanvoelende interactie.
6. **Uitklapbare FAQ met eigen iconografie**: een plus/min-icoon
   gebouwd in pure CSS (geen plaatje), dat soepel roteert bij het
   openen; blijft volledig leesbaar als JavaScript om wat voor reden
   dan ook niet laadt. **Update fase 4:** de FAQ staat niet langer op
   een eigen pagina, maar als sectie onderaan de homepage
   (`/#faq`), met behoud van dezelfde interactie en van de FAQPage-
   structured data (nu gecombineerd met de Organization-data op de
   homepage).
7. **Volledig herontworpen dienstenpagina**: in plaats van drie
   eenvoudige kaarten naast elkaar bestaat de dienstenpagina nu uit
   grote, afwisselende contentsecties per dienst (Training, Advies,
   Interim management), elk met een groot rood nummer, een
   hoekaccent in de huisstijlkleur en een eigen scroll-reveal-richting
   (van links of rechts), afgesloten met een opvallende, volledig rode
   call-to-action-sectie die direct naar het contactformulier leidt.
8. **Foto-placeholders**: op verzoek van de klant tonen alle
   content-foto's op de site nu een duidelijk herkenbaar leeg vlak met
   camera-icoon en omschrijvend label (bijvoorbeeld "Foto volgt:
   teamoverleg") in plaats van een echte afbeelding. De onderliggende
   interacties (de meebewegende foto-wissel bij de drie diensten op de
   homepage, hover-effecten) werken identiek met deze placeholders als
   met echte foto's, zodat er niets opnieuw gebouwd hoeft te worden
   zodra de definitieve foto's binnenkomen (zie `FOTOS-NODIG.md`).

Alle interacties zijn gebouwd volgens één harde regel: **content mag
nooit afhankelijk zijn van JavaScript om zichtbaar te worden.** Als
JavaScript om wat voor reden dan ook niet laadt, blijft elke pagina
volledig leesbaar en bruikbaar (geverifieerd tijdens QA).

## 6. Toegankelijkheid

- Eén `<h1>` per pagina (automatisch gecontroleerd over alle pagina's).
- Zichtbare focusstijl bij toetsenbordnavigatie (`:focus-visible`).
- Werkende "Direct naar inhoud"-skiplink.
- Het mobiele menu en de FAQ-accordeon gebruiken correcte
  `aria-expanded`/`aria-controls`-koppelingen.
- Alle content-afbeeldingen hebben beschrijvende alt-tekst; decoratieve
  elementen (zoals het logo naast de bedrijfsnaam) hebben een lege
  alt-tekst. De placeholder-vlakken (fase 4) gebruiken `role="img"` met
  een `aria-label` die het label (bijvoorbeeld "Foto volgt:
  teamoverleg") ook aan schermlezers doorgeeft, met het camera-icoon
  zelf als `aria-hidden`.
- Alle scroll-, parallax- en cursoranimaties respecteren
  `prefers-reduced-motion`: bezoekers die minder beweging willen,
  krijgen de volledige inhoud direct zichtbaar, zonder animatie.

## 7. Uitgevoerde QA

- **Geautomatiseerde schermafbeeldingen** van alle pagina's op drie
  breedtes (375 px mobiel, 820 px tablet, 1440 px desktop) via een
  headless browser, om de responsieve opmaak te controleren, inclusief
  een aparte controleronde na de herziening in fase 3 (nieuwe
  typografie, rood kleurgebruik, animaties en de herontworpen
  dienstenpagina) en opnieuw na de herstructurering in fase 4 (nette
  URL's, foto-placeholders, FAQ op de homepage, uitlijning
  dienstenpagina).
- **Fase 4, specifiek voor de nieuwe URL-structuur**: de site is lokaal
  via een echte webserver (niet door het bestand rechtstreeks te
  openen) getest, omdat alle paden zijn omgezet naar zogenoemde
  root-relative paden (`/assets/...`, `/diensten/`) die alleen via een
  webserver correct werken. Hiermee is gecontroleerd dat navigatie,
  CSS, JavaScript, afbeeldingen/placeholders en animaties op elke
  nieuwe URL (`/diensten/`, `/contact/`, enzovoort) blijven werken. Zie
  ook de toelichting in `README.md` (punt 2) over het rechtstreeks
  bekijken van de bestanden.
- **Interactietests**: mobiel menu openen/sluiten, FAQ-accordeon
  openen, cursor-hover-status, scroll-reveal-gedrag: allemaal
  gecontroleerd met een echte browser-engine (geen handmatige
  aanname).
- **Linkcontrole**: alle interne links en afbeeldingsverwijzingen op
  alle pagina's automatisch gecontroleerd op kapotte verwijzingen, geen
  gevonden.
- **Structured-datacontrole**: alle JSON-LD-blokken op alle pagina's
  gevalideerd als geldige JSON.
- **Tekstcontrole fase 3**: alle pagina's automatisch doorzocht op het
  gedachtestreepje (—); nergens meer aanwezig op de volledige website.
- **Belangrijke bug gevonden én opgelost tijdens QA (fase 2)**: de site
  gebruikte aanvankelijk absolute paden (`/assets/...`) voor
  CSS/JS/afbeeldingen. Dat werkt prima zodra de site online staat,
  maar werkte destijds **niet** wanneer iemand `index.html`
  rechtstreeks vanaf de eigen computer opende (destijds een hard
  vereiste uit de opdracht): de browser zocht dan op de verkeerde
  plek. Dit is destijds gecorrigeerd naar relatieve paden.
  **Let op, bijgewerkt in fase 4:** om de nu gevraagde nette URL's
  zonder `.html` (map-per-pagina-structuur) mogelijk te maken, gebruikt
  de site weer root-relative paden (`/assets/...`, `/diensten/`). Dit
  is een bewuste, aan de klant uitgelegde trade-off: rechtstreeks
  dubbelklikken op `index.html` werkt hierdoor niet meer, maar bekijken
  via een lokale server of via Cloudflare Pages (de uiteindelijke
  hostingomgeving) werkt volledig correct. Zie `README.md` (punt 2)
  voor de twee manieren om dit toch lokaal te bekijken.
- **Diensten-pagina: uitlijningsbug gevonden én opgelost (fase 4)**: op
  de live, eerder opgeleverde versie bleek de afbeelding bij elk
  dienstonderdeel tot aan de rand van het beeldscherm te lopen, zonder
  de linker/rechter marge die de rest van de site wel heeft, waardoor
  de pagina scheef en onbalans leek (zichtbaar op de door de klant
  meegestuurde schermafbeeldingen). Oorzaak: de contentsectie miste een
  binnencontainer met maximale breedte en zijmarge. Opgelost door een
  nieuwe binnenwrapper toe te voegen die de inhoud netjes centreert en
  inspringt, terwijl de afwisselende achtergrondkleur nog steeds de
  volle schermbreedte vult. Gecontroleerd met een nieuwe
  schermafbeelding: de marges komen nu overeen met de rest van de
  site.
- **Tweede bug gevonden én opgelost**: het mobiele menu stond in de
  broncode ín de header, en de header gebruikt een
  "backdrop-filter"-effect (het vervagingseffect achter de
  navigatiebalk). Dat effect zorgt er onbedoeld voor dat
  "vastgezette" elementen daarbinnen niet meer het hele scherm
  bestrijken, maar beperkt blijven tot de hoogte van de balk zelf.
  Het mobiele menu is daarom buiten de `<header>` geplaatst, waarna
  het weer het volledige scherm vult zoals bedoeld.
- **Derde bug gevonden én opgelost**: op mobiel/tablet-breedte bleef
  de "Plan een gesprek"-knop naast het hamburgermenu-icoon staan,
  waardoor het icoon buiten beeld werd geduwd en onklikbaar was. Nu
  wordt op kleine schermen alleen het hamburgermenu getoond (de
  call-to-action staat ook in het geopende menu zelf).

## 8. Openstaande punten voor Van Engelen / Studio JAPI

Zie ook `FOTOS-NODIG.md` en het einde van `README.md`.

1. Portretfoto van Frank van Engelen.
2. Telefoonnummer, adres en (optioneel) KvK-nummer.
3. Koppeling van het contactformulier aan een echte Formspree-endpoint.
4. Definitieve, juridisch gecontroleerde tekst voor privacyverklaring
   en cookiebeleid.
5. Beslissing of/wanneer Google Analytics 4, Search Console en Google
   Business Profile worden gekoppeld (zie `SEO-GEO-OVERZICHT.md`).
6. Eventueel: een "Klanten" of "Partners"-pagina, zodra hier echte
   content voor beschikbaar is.
