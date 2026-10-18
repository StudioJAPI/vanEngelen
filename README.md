# VEMAT website

Statische site (HTML, CSS, JavaScript). Geen build-stap nodig: de map kan direct naar Cloudflare Pages of een andere statische host.

## Pagina's
Home, Commerciële ontwikkeling, Management & leiderschap, Advies, Interim management, Over Frank, Cases, Contact, Bedankt, Privacy, Algemene voorwaarden, 404.

## Opdrachtgevers: logo's toevoegen
Opdrachtgevers staan nu als nette tekst in een raster (op de homepage, sectie `#opdrachtgevers`, en op de Cases-pagina). Officiële logo's zijn niet aangeleverd en worden niet nagemaakt. Vervang per opdrachtgever de tekst (`<span>Naam</span>` in een `<li class="client">`) door `<img src="assets/logos/naam.svg" alt="Naam" height="32" loading="lazy">`.

## Cases toevoegen
Op `cases/index.html` staat het blok "Uitgewerkte cases volgen". Vervang dat door per case:
```html
<article class="case">
  <div><h3>Titel</h3><p>Organisatie</p></div>
  <div><h4>Uitdaging</h4><p>...</p></div>
  <div><h4>Aanpak</h4><p>...</p></div>
  <div><h4>Resultaat</h4><p>...</p></div>
</article>
```
Voeg alleen bevestigde cases toe.

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
