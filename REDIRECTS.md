# Redirectplan: oude site naar nieuwe site

De huidige website (vemat.nl) gebruikt een paginastructuur per map
(bijvoorbeeld `/Training/`). De nieuwe website gebruikt platte
bestandsnamen (bijvoorbeeld `/training.html`). Om te voorkomen dat
bezoekers en zoekmachines op een foutmelding uitkomen, zijn alle oude
adressen doorgestuurd naar hun nieuwe tegenhanger.

Dit is al kant-en-klaar verwerkt in het bestand `_redirects` in deze
ZIP (Cloudflare Pages leest dit bestand automatisch in: er hoeft
niets handmatig te worden ingesteld, zolang de site op Cloudflare
Pages wordt gehost).

## Overzicht

| Oude URL | Nieuwe URL | Toelichting |
|---|---|---|
| `/Home/` | `/` | Homepage |
| `/Management/` | `/management.html` | Dienstpagina Interim management |
| `/Advies/` | `/advies.html` | Dienstpagina Advies |
| `/Training/` | `/training.html` | Dienstpagina Training |
| `/Over-van-Engelen/` | `/over-ons.html` | Over-ons-pagina |
| `/Partners/` | `/over-ons.html` | Was een lege sjabloonpagina zonder content op de oude site; verwijst nu naar Over ons |
| `/Klanten/` | `/over-ons.html` | Was een lege sjabloonpagina zonder content op de oude site; verwijst nu naar Over ons |
| `/Contact/` | `/contact.html` | Contactpagina |
| Overige onbekende adressen | `/404.html` | Nette foutpagina met links terug naar de site |

## Waarom Partners en Klanten niet zijn overgenomen

Op de huidige website waren `/Partners/` en `/Klanten/` nog lege
sjabloonpagina's ("Dit is een nieuwe pagina. Hier kunt u content
plaatsen.") zonder namen, logo's of testimonials. Om geen nepinhoud te
verzinnen, zijn deze pagina's in de nieuwe site niet teruggebouwd; de
oude adressen worden nu netjes doorgestuurd naar de "Over
ons"-pagina in plaats van op een 404 uit te komen. Zodra er echte
klant- of partnerinformatie beschikbaar is, kunnen deze pagina's
alsnog worden toegevoegd.

## Zoekmachines op de hoogte stellen

Na livegang: dien `sitemap.xml` opnieuw in via Google Search Console
en controleer na enkele weken in Search Console of de oude URL's
correct worden doorverwezen (status "permanent redirect", geen
crawlfouten).
