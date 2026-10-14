# Website Van Engelen Management, Advies en Training: projectlevering

Gebouwd door Studio JAPI. Deze uitleg is geschreven voor iemand die niet kan
programmeren: geen technische voorkennis nodig.

## 1. Wat zit er in deze ZIP?

Een complete, kant-en-klare website van 10 pagina's. Alles is statische
HTML, CSS en JavaScript: geen WordPress, geen installatie, geen
abonnement nodig om de site te bekijken. Elke pagina (behalve de
homepage) staat in een eigen map met een `index.html`-bestand, zodat de
uiteindelijke webadressen geen `.html` bevatten (bijvoorbeeld
`vemat.nl/diensten/` in plaats van `vemat.nl/diensten.html`).

```
index.html                         → Homepage (incl. veelgestelde vragen)
diensten/index.html                → Overzicht van alle diensten
training/index.html                → Dienstpagina: Training
advies/index.html                  → Dienstpagina: Advies
management/index.html              → Dienstpagina: Interim management
over-ons/index.html                → Over Van Engelen / Frank van Engelen
contact/index.html                 → Contactpagina met formulier
privacy/index.html                 → Privacyverklaring (definitieve tekst)
algemene-voorwaarden/index.html    → Algemene voorwaarden (definitieve tekst)
404.html                           → Foutpagina voor niet-bestaande links
sitemap.xml                        → Voor Google en andere zoekmachines
robots.txt                         → Instructies voor zoekmachines
_redirects                         → Doorverwijzingen van oude website-adressen
assets/css/styles.css              → Alle vormgeving (kleuren, lettertypen, lay-out)
assets/js/main.js                  → Alle interactie (menu, FAQ, animaties, etc.)
assets/images/                     → Logo en de 6 foto's van Frank die nu op de site staan
favicon.ico, favicon-*.png,
apple-touch-icon.png               → Icoon in het browsertabblad en in Google
```

## 2. Direct bekijken

Deze versie gebruikt **nette webadressen zonder `.html`**
(`/diensten/` in plaats van `/diensten.html`), opgebouwd met bewust
*pad-relatieve* links (geen vaste adressen die met een `/` beginnen).
Daardoor werkt de site overal correct, ongeacht waar hij precies
wordt bekeken:

- **Rechtstreeks vanaf uw computer**: dubbelklik op `index.html`.
  Navigatie, opmaak en animaties werken direct.
- **Via een preview-submap**, bijvoorbeeld een GitHub Pages-link als
  `https://studiojapi.github.io/vanEngelen/`: werkt ook correct,
  inclusief alle styling, scripts en nette webadressen binnen die
  submap.
- **Via een lokale webserver**, voor wie dat prefereert: open een
  terminal in de map met deze bestanden en typ
  `python3 -m http.server 8000`, ga dan naar `http://localhost:8000/`.
- **Live op `vemat.nl`** (zie punt 6): werkt vanzelfsprekend ook,
  inclusief de nette `/diensten/`-achtige adressen.

## 3. Foto's: echte foto's van Frank staan nu op de site

Van Engelen heeft 7 eigen foto's aangeleverd; 6 daarvan zijn bijgesneden,
gecomprimeerd naar WebP en op de site geplaatst, op elke plek waar
eerder een placeholder-vlak stond (hero-foto, de drie dienstenfoto's,
de portretfoto op "Over ons", en een sfeerfoto bij het citaat op de
homepage). Zie `FOTOS-NODIG.md` voor het volledige overzicht van welke
foto waar staat. Er staat nergens meer een placeholder op de site.

## 4. Wat is er anders dan de huidige website (vemat.nl)?

- **Vormgeving**: een strakke, moderne uitstraling met sans-serif
  lettertypen (IBM Plex Sans voor koppen, Inter voor lopende tekst),
  zachte afgeronde vormen in plaats van strak vierkant, en de rode
  VEMAT-huisstijlkleur (met een subtiele kleurovergang) die duidelijk
  door de hele site terugkomt, in plaats van het standaardsjabloon van
  de huidige site.
- **Structuur**: elke dienst (Training, Advies, Interim management)
  heeft een eigen, volwaardige pagina. Er is een opnieuw ontworpen
  "Diensten"-overzichtspagina met grote, afwisselende contentsecties,
  en de veelgestelde vragen staan als sectie op de homepage in plaats
  van op een aparte pagina.
- **Interactie en beweging**: de gewone muisaanwijzer met vloeiende
  hover-animaties op foto's, knoppen en kaarten, scrollanimaties door
  de hele site (secties die in beeld bewegen, staggered animaties, een
  subtiel parallax-effect), een "meebewegend" verhaal bij de drie
  diensten op de homepage (scroll er doorheen), en een uitklapbare FAQ.
  Alle animaties houden rekening met bezoekers die "verminderde
  beweging" hebben ingesteld, en werken ook prettig op mobiel en
  tablet.
- **Webadressen**: nette URL's zonder `.html` (zie punt 2), met
  automatische doorverwijzingen vanaf de oude adressen (zie
  `REDIRECTS.md`). De links werken overal correct: rechtstreeks vanaf
  schijf, via een preview-submap of op het uiteindelijke domein.
- **Vindbaarheid**: elke pagina heeft een eigen titel, omschrijving en
  gestructureerde data voor Google (en voor AI-zoekassistenten zoals
  ChatGPT of Perplexity), nu bijgewerkt naar de nieuwe webadressen. Zie
  `SEO-GEO-OVERZICHT.md` voor details.

## 5. Wat moet er nog gebeuren voordat de site live kan?

Zie **`PROJECTDOCUMENTATIE.md`** (hoofdstuk 8) voor het volledige
overzicht van open punten. De meeste eerdere open punten zijn inmiddels
afgehandeld: de foto's staan erop, en telefoonnummer, adres, KvK-nummer,
de Privacyverklaring en de Algemene voorwaarden zijn allemaal verwerkt
met de door Van Engelen aangeleverde, definitieve gegevens. Nog open:

- Een korte bevestiging van Van Engelen dat de bedrijfsnaam inclusief
  "BV" correct is (de aangeleverde PDF's gebruiken zelf geen
  rechtsvorm achter de naam, zie `PROJECTDOCUMENTATIE.md` hoofdstuk 8).
- Een testbericht via het contactformulier (de Formspree-koppeling
  `mgaonjzo` staat erin; controleer na livegang eenmalig of de mail
  aankomt en bevestig eventueel het e-mailadres in Formspree).

## 6. De website online zetten

Deze site is gebouwd volgens de Studio JAPI-standaardstack:

1. Zet alle bestanden in een GitHub-repository.
2. Koppel die repository aan **Cloudflare Pages** (gratis hosting).
   Cloudflare Pages serveert elke map met een `index.html` automatisch
   onder de nette URL (bijvoorbeeld `/diensten/`), dus daarvoor is
   verder niets extra's nodig.
3. Koppel het domein `vemat.nl` aan de Cloudflare Pages-site.
4. De doorverwijzingen in `_redirects` worden automatisch ingelezen
   door Cloudflare Pages: zowel de oude vemat.nl-adressen als de vorige
   `.html`-adressen van deze website worden met een 301-redirect naar
   de nieuwe, nette URL's gestuurd. Zie `REDIRECTS.md` voor het
   overzicht.

## 7. Het contactformulier

Het formulier op `/contact/` is gekoppeld aan **Formspree** (formulier
`mgaonjzo`). Bij verzenden blijft de bezoeker op de site: het bericht
gaat op de achtergrond naar Formspree en daarna wordt de bezoeker
doorgestuurd naar de bedankpagina `/bedankt/`. Bij een fout verschijnt
een melding onder het formulier. Er zit een verborgen spamveld
(`_gotcha`) in. Zonder JavaScript werkt het formulier ook, dan toont
Formspree zelf een bevestiging.

Na livegang: stuur eenmalig een testbericht en controleer dat de mail
aankomt (bevestig bij de eerste keer het e-mailadres in Formspree).
De bedankpagina staat op `noindex` en niet in de sitemap.

## 8. Analytics en Search Console (optioneel, aan te raden)

Voeg na livegang Google Search Console toe (gratis). Als er later
Google Analytics of andere tracking wordt toegevoegd, is een
cookiebeleid en cookiemelding nodig; die zijn nu bewust niet gebouwd
omdat de site geen cookies gebruikt.

## 9. Vragen?

Neem contact op met Studio JAPI (Jasper van Rooij / Pim van Workum)
voor aanpassingen, uitbreidingen of hulp bij het live zetten.
