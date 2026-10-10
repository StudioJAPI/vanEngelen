# Website Van Engelen Management, Advies en Training — projectlevering

Gebouwd door Studio JAPI. Deze uitleg is geschreven voor iemand die niet kan
programmeren — geen technische voorkennis nodig.

## 1. Wat zit er in deze ZIP?

Een complete, kant-en-klare website van 11 pagina's. Alles is statische
HTML, CSS en JavaScript: geen WordPress, geen installatie, geen
abonnement nodig om de site te bekijken.

```
index.html            → Homepage
diensten.html         → Overzicht van alle diensten
training.html         → Dienstpagina: Training
advies.html           → Dienstpagina: Advies
management.html       → Dienstpagina: Interim management
over-ons.html         → Over Van Engelen / Frank van Engelen
faq.html              → Veelgestelde vragen
contact.html          → Contactpagina met formulier
privacy.html          → Privacyverklaring (concept, nog aan te vullen)
cookiebeleid.html     → Cookiebeleid (concept, nog aan te vullen)
404.html              → Foutpagina voor niet-bestaande links
sitemap.xml           → Voor Google en andere zoekmachines
robots.txt            → Instructies voor zoekmachines
_redirects            → Doorverwijzingen van de oude website-adressen
assets/css/styles.css → Alle vormgeving (kleuren, lettertypen, lay-out)
assets/js/main.js     → Alle interactie (menu, cursor, FAQ, etc.)
assets/images/        → Alle gebruikte foto's en het logo
```

## 2. Direct bekijken

Dubbelklik op `index.html`. De website opent in uw browser en werkt
volledig, ook zonder internetverbinding (de lettertypen worden dan
vervangen door een systeemlettertype — zodra de site online staat,
worden automatisch de juiste lettertypen geladen).

## 3. Wat is er anders dan de huidige website (vemat.nl)?

- **Vormgeving**: een rustige, redactionele uitstraling met een serif
  kop-lettertype (Fraunces) en een strakke, sans-serif tekst (Inter),
  in plaats van het standaardsjabloon van de huidige site.
- **Structuur**: elke dienst (Training, Advies, Interim management)
  heeft nu een eigen, volwaardige pagina in plaats van één korte
  tekstblok. Er is een duidelijke "Diensten"-overzichtspagina en een
  uitgebreide FAQ-pagina toegevoegd.
- **Interactie**: een aangepaste muiscursor, een "meebewegend" verhaal
  bij de drie diensten op de homepage (scroll er doorheen), een
  uitklapbare FAQ, en knoppen die licht met de muis meebewegen. Dit
  werkt alleen op desktop met een muis — op een telefoon of tablet
  ziet u gewoon de gewone, toegankelijke bediening.
- **Vindbaarheid**: elke pagina heeft een eigen titel, omschrijving en
  gestructureerde data voor Google (en voor AI-zoekassistenten zoals
  ChatGPT of Perplexity). Zie `SEO-GEO-OVERZICHT.md` voor details.

## 4. Wat moet er nog gebeuren voordat de site live kan?

Zie **`FOTOS-NODIG.md`** voor ontbrekende foto's en **
`PROJECTDOCUMENTATIE.md`** voor het volledige overzicht van open punten
— onder andere:

- Een eigen portretfoto van Frank van Engelen (nu wordt tijdelijk de
  aangeleverde "handdruk"-foto hergebruikt, duidelijk gelabeld als
  placeholder).
- Telefoonnummer, adres en eventueel KvK-nummer (stonden niet op de
  huidige website — alleen `frank@vemat.nl` is bevestigd).
- Een werkende koppeling voor het contactformulier (nu staat er een
  tijdelijke placeholder-link naar Formspree, zie punt 6 hieronder).
- De definitieve tekst voor de privacyverklaring en het cookiebeleid
  (nu een eerlijk gelabeld concept).

## 5. De website online zetten

Deze site is gebouwd volgens de Studio JAPI-standaardstack:

1. Zet alle bestanden in een GitHub-repository.
2. Koppel die repository aan **Cloudflare Pages** (gratis hosting).
3. Koppel het domein `vemat.nl` aan de Cloudflare Pages-site.
4. Stel in Cloudflare de doorverwijzingen in zoals beschreven in
   `REDIRECTS.md` (het bestand `_redirects` staat al klaar, Cloudflare
   Pages leest dit automatisch in).

## 6. Het contactformulier activeren

Het formulier op `contact.html` is voorbereid voor **Formspree**
(een betrouwbare, externe formulierdienst — geen eigen server nodig).
Om het echt te laten werken:

1. Maak een gratis of betaald account op formspree.io.
2. Maak daar een nieuw formulier aan en kopieer de unieke link die
   Formspree geeft (ziet er ongeveer zo uit:
   `https://formspree.io/f/abc1234`).
3. Open `contact.html` in een teksteditor, zoek naar
   `FORMSPREE_ENDPOINT` en vervang de hele `action="..."`-waarde door
   de link van Formspree.

Zonder deze stap toont het formulier een nette melding dat het nog
niet gekoppeld is, en blijft e-mail naar `frank@vemat.nl` het
alternatief.

## 7. Analytics en Search Console (optioneel, aan te raden)

Voeg na livegang Google Analytics 4 en Google Search Console toe
(beide gratis). Zodra dat gebeurt, moet `cookiebeleid.html` worden
aangevuld — zie de opmerking die al op die pagina staat.

## 8. Vragen?

Neem contact op met Studio JAPI (Jasper van Rooij / Pim van Workum)
voor aanpassingen, uitbreidingen of hulp bij het live zetten.
