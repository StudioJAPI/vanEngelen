# SEO &amp; GEO-overzicht

Dit document legt uit wat er technisch is gedaan om de website goed
vindbaar te maken — zowel in traditionele zoekmachines (Google, Bing;
"SEO") als in AI-zoeksystemen en chatbots (ChatGPT, Perplexity,
Google AI Overviews; "GEO" — Generative Engine Optimization).

## 1. Techniek per pagina

Elke van de 11 pagina's heeft:

- Een unieke `<title>` en `<meta name="description">`, geschreven voor
  mensen (niet volgepropt met zoekwoorden) maar wel met de
  belangrijkste term voor die pagina (bijv. "interim management",
  "salestraining").
- Precies één `<h1>` per pagina, met daaronder een logische opbouw van
  `<h2>`/`<h3>`.
- Een `<link rel="canonical">` die naar de definitieve URL wijst (voorkomt
  dubbele-content-problemen).
- Open Graph- en Twitter-tags, zodat gedeelde links op LinkedIn,
  WhatsApp en social media er netjes uitzien met titel, omschrijving
  en afbeelding.
- Zichtbare broodkruimels (`Home / Diensten / Training`) op elke
  onderliggende pagina, zowel voor bezoekers als machine-leesbaar via
  structured data (zie hieronder).

## 2. Gestructureerde data (structured data / JSON-LD)

Dit is de belangrijkste techniek voor GEO: het geeft zoekmachines én
AI-systemen een machine-leesbare samenvatting van wie Van Engelen is
en wat ze doen, los van de opgemaakte tekst.

- **Organization / ProfessionalService** (op elke pagina): naam,
  logo, beschrijving, oprichter (Frank van Engelen), contact-e-mail.
- **Service** (op de drie dienstpagina's): naam en beschrijving van
  Training, Advies en Interim management, gekoppeld aan de
  aanbieder.
- **BreadcrumbList** (op alle onderliggende pagina's): de
  paginahiërarchie.
- **FAQPage** (op de FAQ-pagina): alle vragen en antwoorden in een
  vorm die Google rechtstreeks als uitklapbaar zoekresultaat kan
  tonen, en die AI-assistenten direct kunnen citeren.

Alle JSON-LD-blokken zijn gecontroleerd op geldige syntax.

## 3. Eerlijkheid als GEO-strategie

AI-zoeksystemen citeren bij voorkeur bronnen die concreet en
verifieerbaar zijn. Daarom:

- Bevat de site geen verzonnen klantaantallen, certificeringen,
  beoordelingen of resultaten — alleen wat daadwerkelijk bekend is
  (zoals "ruim 15 jaar ervaring").
- Zijn onbekende antwoorden in de FAQ expliciet gemarkeerd als "nog te
  verifiëren met de klant" in plaats van verzonnen te worden. Dat is
  beter voor vertrouwen én voorkomt dat een AI-systeem een verzonnen
  feit herhaalt alsof het waar is.

## 4. Technische bestanden

- **`sitemap.xml`** — lijst van alle 10 publieke pagina's (exclusief
  404), voor Google Search Console.
- **`robots.txt`** — staat alle zoekmachines toe en verwijst naar de
  sitemap.
- **`_redirects`** — zorgt dat oude URL's van vemat.nl niet op een
  foutmelding uitkomen (zie `REDIRECTS.md`).

## 5. Prestaties (Core Web Vitals)

- Eén lettertype-familie via één Google Fonts-verzoek, met
  `preconnect` naar de lettertype-servers.
- Afbeeldingen zijn gecomprimeerd naar WebP en voorzien van
  `width`/`height`-attributen, zodat de pagina niet "springt" tijdens
  het laden (voorkomt een slechte Cumulative-Layout-Shift-score).
- Geen externe JavaScript-frameworks of trackingscripts: de site
  bestaat uit één CSS- en één JS-bestand, beide klein en zonder
  externe afhankelijkheden (behalve de Google Fonts-lettertypen).
- Alle motion/animaties respecteren `prefers-reduced-motion` en
  gebruiken CSS in plaats van zware JavaScript-animatiebibliotheken.

## 6. Wat nog moet gebeuren na livegang

- Domein indienen bij Google Search Console en Bing Webmaster Tools.
- Google Business Profile aanmaken/koppelen (lokale SEO) — hiervoor is
  een adres nodig, dat nu nog ontbreekt (zie `PROJECTDOCUMENTATIE.md`).
- Na een paar weken de Core Web Vitals controleren via
  PageSpeed Insights / Search Console, nu de site écht online staat.
