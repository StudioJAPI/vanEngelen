# Van Engelen — Homepage-concept (Studio JAPI)

Salesconcept: één nieuwe homepage om tijdens een verkoopgesprek naast de
bestaande site (vemat.nl) te leggen. Geen volledige website — alleen de
homepage, maar wel op het niveau van een volledig uitgewerkte maatwerksite.

## Bedrijf
- **Naam:** Van Engelen Management, Advies en Training
- **Bronwebsite:** https://vemat.nl/
- **Eigenaar/directeur:** Frank van Engelen
- **Branche:** sales- en communicatietraining, advies, interim management
- **Doelgroep:** MKB tot multinational, junior tot senior professionals

## Designrichting
Zakelijk, energiek en persoonlijk. De identiteit van het bestaande logo
(een rode/zwarte brush-stroke) is doorgetrokken als terugkerend grafisch
motief: een handgetekende markeer-onderstreping onder koppen en als
divider. Dit verbindt de "sales op gevoel"-identiteit visueel door de
hele pagina, in plaats van een generieke iconen-en-cards-opbouw.

De Training-dienst krijgt visueel meer gewicht dan Advies en Management,
omdat dat ook inhoudelijk de kern van het bedrijf is (zo staat het ook op
de bestaande site).

## Kleuren
Aangeleverd via het logo, en 1-op-1 overgenomen als merkkleuren:
- `#E51922` — primair rood
- `#191917` — inkt (bijna zwart, voor donkere secties en tekst)
- `#FFFFFF` — wit

Zelf toegevoegd voor een compleet, bruikbaar systeem:
- `#B3121A` — donkerder rood (hover-status)
- `#F7F5F3` — warm off-white (sectie-achtergrond)
- `#EFEBE6` — iets donkerder variant daarvan
- `#6B6864` — gedempte tekstkleur
- `#E4E0DA` — randkleur

Alle kleurcombinaties zijn gecontroleerd op leesbaarheid (WCAG AA).

## Fonts
- **Bricolage Grotesque** — koppen (karakteristiek, geen standaard
  SaaS-font, past bij de energieke branding)
- **Inter** — lopende tekst (zeer leesbaar)
- **IBM Plex Mono** — kleine labels/eyebrows

Fonts worden geladen via Google Fonts (vereist een internetverbinding
bij het openen van de homepage). Dit was nog niet uit de bestaande site
te achterhalen; **definitief te bevestigen** met de klant, of eventueel
later lokaal te bundelen voor een volledig offline-werkende site.

## Gebruikte content (afkomstig van vemat.nl)
- Bedrijfsintro en de drie dienstomschrijvingen (Training, Advies,
  Management), ingekort en herverdeeld over de nieuwe structuur
- Het citaat van Frank van Engelen ("Als ik uw product kan ervaren...")
- De "Waarom Van Engelen"-tekst over hard skills vs. soft skills
- De persoonlijke, gedreven tone of voice ("tomeloze passie", "will to
  win", persoonlijke band, altijd bereikbaar)

De Klanten- en Partners-pagina's van de bestaande site waren lege
placeholder-pagina's zonder content — daar is dus niets van overgenomen
omdat er niets stond. Zie "Ontbrekende informatie" hieronder.

## Gebruikte foto's
Alle drie de door Studio JAPI aangeleverde beelden zijn **echte,
bruikbare beelden** — geen tijdelijke stockfoto's:
- `hero-dealsluiting.webp` — Frank van Engelen sluit een deal af met een
  opdrachtgever. Gebruikt in de hero en bij het citaat/portret-blok.
- `training-sessie.webp` — een live groepstraining ("Rollenspel 2 —
  Account Leadership"). Gebruikt bij de Training-dienst en als
  full-width bewijssectie.
- `logo-van-engelen.webp` — het bestaande logo. Gebruikt in header,
  footer en als favicon.

Er zijn geen tijdelijke/gegenereerde beelden gebruikt in dit concept.

## Primaire CTA
E-mail: **frank@vemat.nl** (aangeleverd door Studio JAPI/de klant).
Secundaire CTA: "Vul het contactformulier in" — dit is in dit concept
een demo-link (zie hieronder), omdat er geen formulierdienst is
gekoppeld.

## Demo-functionaliteit en placeholders
Omdat dit alleen een homepage-concept is, zijn de volgende links
gemarkeerd met `data-demo-link` in de code en tonen ze bij een klik een
duidelijke melding in plaats van een kapotte 404-pagina:
- Interne navigatie naar Klanten, Partners, en de individuele
  dienstpagina's (Training/Advies/Management als aparte pagina's)
- Het contactformulier-veld
- De LinkedIn-social-link (geen URL aangeleverd)

Werkende links: het e-mailadres (`mailto:frank@vemat.nl`), alle
interne anchor-links binnen de homepage zelf (#diensten, #training,
#over-frank, #contact), en het mobiele menu.

## Onderdelen die later gekoppeld moeten worden
- Een echte formulierdienst voor het contactformulier
- Een echte LinkedIn-URL (of andere social kanalen)
- Eventuele definitieve pagina's voor Klanten, Partners, en losse
  dienstpagina's

## Ontbrekende informatie (later nodig voor definitieve website)
- Telefoonnummer en fysiek adres (niet gevonden op de bestaande site;
  alleen e-mail is nu aangeleverd en verwerkt)
- Definitieve bevestiging van de fonts (niet betrouwbaar te achterhalen
  uit de oude site, nu een bewuste ontwerpkeuze)
- Testimonials, klantlogo's, certificeringen of resultaatcijfers: de
  Klanten- en Partners-pagina's op de bestaande site waren leeg, dus is
  hier bewust niets over verzonnen
- Een reserverings- of boekingssysteem is niet van toepassing op dit
  bedrijf (dienstverlening, geen losse boekbare afspraken op de site)

## Techniek
Pure HTML, CSS en vanilla JavaScript. Geen build-stap, geen frameworks.
`index.html` direct openen is voldoende. Responsive getest van 320px
tot 3840px. `prefers-reduced-motion` wordt gerespecteerd.

**Belangrijke keuze:** er is bewust gekozen voor content die nooit
afhankelijk is van JavaScript om zichtbaar te worden (geen
scroll-reveal-animaties die content kunnen "vastzetten" op onbekende
hardware tijdens een salesgesprek). De enige animatie is een korte,
puur CSS-gebaseerde intro-animatie op de hero, die nooit kan "vastlopen".
