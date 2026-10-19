# VEMAT website

Statische site (HTML, CSS, JavaScript). Geen build-stap nodig: de map kan direct naar Cloudflare Pages of een andere statische host.

## Pagina's
Home, Commerciële ontwikkeling, Management & leiderschap, Advies, Interim management, Over Frank, Cases, Contact, Bedankt, Privacy, Algemene voorwaarden, 404.

## Opdrachtgevers: logo's toevoegen
Opdrachtgevers staan nu als nette tekst in een raster (op de homepage, sectie `#opdrachtgevers`, en op de Cases-pagina). Officiële logo's zijn niet aangeleverd en worden niet nagemaakt. Vervang per opdrachtgever de tekst (`<span>Naam</span>` in een `<li class="client">`) door `<img src="assets/logos/naam.svg" alt="Naam" height="32" loading="lazy">`.

## Praktijkverhalen (slider op /cases/)
De slider leest alle verhalen uit `assets/js/cases-data.js`. Een nieuw verhaal toevoegen = een blok kopiëren in dat bestand en invullen (uitleg staat bovenin het bestand). De slider past zichzelf aan, de pagina hoeft niet gewijzigd te worden.

- Afbeelding toevoegen: zet een geoptimaliseerde .webp in `assets/cases/` en vul `image` en `imageAlt` in. Zolang `image` leeg is, toont de slide de naam of het logo.
- Volgorde: via `order`.
- Verwijderd LinkedIn-bericht: haal het blok weg of vervang de `url`. De slider blijft werken.
- Er wordt niets van LinkedIn geladen tot een bezoeker op de knop klikt.
- Let op: de HTML van de pagina bevat voor zoekmachines een kopie van de verhalen. Wijzig je alleen `cases-data.js`, dan toont de site direct de nieuwe versie, maar die kopie wordt pas bijgewerkt als de pagina opnieuw wordt gegenereerd.

## Testimonials toevoegen
Plaats bevestigde quotes als:
```html
<figure class="testimonial"><blockquote>&ldquo;Quote&rdquo;</blockquote><cite>Naam, functie</cite></figure>
```
op de homepage (onder de opdrachtgevers) of op de Cases-pagina.

## Video
`assets/video/vemat-explainer.mp4` met poster. De video laadt pas na een klik. Vervang het bestand met dezelfde naam om de video te wisselen.

## Lettertypen
Zelf gehost (Newsreader en Hanken Grotesk, `assets/fonts`). Er worden geen externe lettertypediensten geladen.

## Formulier
Verzendt via Formspree naar `bedankt/`. Zie `PROJECTDOCUMENTATIE.md`.

## Redirects
Zie `REDIRECTS.md` en `_redirects` (Cloudflare Pages).
