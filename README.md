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
index.html                 → Homepage (incl. veelgestelde vragen)
diensten/index.html        → Overzicht van alle diensten
training/index.html        → Dienstpagina: Training
advies/index.html          → Dienstpagina: Advies
management/index.html      → Dienstpagina: Interim management
over-ons/index.html        → Over Van Engelen / Frank van Engelen
contact/index.html         → Contactpagina met formulier
privacy/index.html         → Privacyverklaring (concept, nog aan te vullen)
cookiebeleid/index.html    → Cookiebeleid (concept, nog aan te vullen)
404.html                   → Foutpagina voor niet-bestaande links
sitemap.xml                → Voor Google en andere zoekmachines
robots.txt                 → Instructies voor zoekmachines
_redirects                 → Doorverwijzingen van oude website-adressen
assets/css/styles.css      → Alle vormgeving (kleuren, lettertypen, lay-out)
assets/js/main.js          → Alle interactie (menu, FAQ, animaties, etc.)
assets/images/             → Logo (de foto's staan er nog, zie punt 3)
```

## 2. Direct bekijken: let op, dit vraagt een kleine extra stap

Deze versie gebruikt **nette webadressen zonder `.html`**
(`/diensten/` in plaats van `/diensten.html`). Dat werkt alleen goed via
een webserver, niet door `index.html` rechtstreeks te dubbelklikken
vanaf uw computer: de browser kan dan de stijl, scripts en de meeste
links niet meer vinden.

Om de site lokaal te bekijken zoals hij straks online zal werken, zijn
er twee simpele opties:

1. **Snelste optie, met Python** (vaak al op de computer aanwezig):
   open een terminal in de map met deze bestanden en typ
   `python3 -m http.server 8000`. Ga daarna in de browser naar
   `http://localhost:8000/`.
2. **Zonder terminal**: sleep de map met deze bestanden in
   [Cloudflare Pages](https://pages.cloudflare.com) (zie punt 5) en
   bekijk de gratis preview-link die u daarvan terugkrijgt. Dat is
   meteen de manier waarop de site ook echt online komt te staan.

Eenmaal online (of via zo'n lokale server) werkt alles: navigatie,
animaties, het formulier en de nette webadressen.

## 3. Foto's: nu zichtbaar als duidelijke placeholders

Op verzoek zijn alle foto's op de site vervangen door een herkenbaar
leeg vlak met een camera-icoon en het label "Foto volgt", zodat voor
iedereen die de site bekijkt meteen duidelijk is waar nog een echte
foto moet komen. Dit geldt voor de hero-foto op de homepage, de drie
foto's bij de diensten, en de portretfoto op de "Over ons"-pagina. De
eerder aangeleverde en bijgesneden foto's staan nog gewoon in
`assets/images/`, zodat Studio JAPI ze er later eenvoudig weer kan
inzetten, maar ze worden nu nergens meer getoond.

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
  `REDIRECTS.md`).
- **Vindbaarheid**: elke pagina heeft een eigen titel, omschrijving en
  gestructureerde data voor Google (en voor AI-zoekassistenten zoals
  ChatGPT of Perplexity), nu bijgewerkt naar de nieuwe webadressen. Zie
  `SEO-GEO-OVERZICHT.md` voor details.

## 5. Wat moet er nog gebeuren voordat de site live kan?

Zie **`FOTOS-NODIG.md`** voor de ontbrekende foto's en
**`PROJECTDOCUMENTATIE.md`** voor het volledige overzicht van open
punten, onder andere:

- Definitieve foto's ter vervanging van de placeholder-vlakken (zie
  punt 3 hierboven en `FOTOS-NODIG.md`).
- Telefoonnummer, adres en eventueel KvK-nummer (stonden niet op de
  huidige website, alleen `frank@vemat.nl` is bevestigd).
- Een werkende koppeling voor het contactformulier (nu staat er een
  tijdelijke placeholder-link naar Formspree, zie punt 7 hieronder).
- De definitieve tekst voor de privacyverklaring en het cookiebeleid
  (nu een eerlijk gelabeld concept).

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

## 7. Het contactformulier activeren

Het formulier op `/contact/` is voorbereid voor **Formspree** (een
betrouwbare, externe formulierdienst: geen eigen server nodig). Om het
echt te laten werken:

1. Maak een gratis of betaald account op formspree.io.
2. Maak daar een nieuw formulier aan en kopieer de unieke link die
   Formspree geeft (ziet er ongeveer zo uit:
   `https://formspree.io/f/abc1234`).
3. Open `contact/index.html` in een teksteditor, zoek naar
   `FORMSPREE_ENDPOINT` en vervang de hele `action="..."`-waarde door
   de link van Formspree.

Zonder deze stap toont het formulier een nette melding dat het nog
niet gekoppeld is, en blijft e-mail naar `frank@vemat.nl` het
alternatief.

## 8. Analytics en Search Console (optioneel, aan te raden)

Voeg na livegang Google Analytics 4 en Google Search Console toe
(beide gratis). Zodra dat gebeurt, moet `cookiebeleid/index.html`
worden aangevuld: zie de opmerking die al op die pagina staat.

## 9. Vragen?

Neem contact op met Studio JAPI (Jasper van Rooij / Pim van Workum)
voor aanpassingen, uitbreidingen of hulp bij het live zetten.
