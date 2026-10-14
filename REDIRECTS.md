# Redirectplan: oude site naar nieuwe site

Deze nieuwe website gebruikt nette URL's zonder `.html`-extensie
(bijvoorbeeld `/diensten/` in plaats van `/diensten.html`), opgebouwd
als een map met een `index.html` per pagina. Dat betekent dat er nu
twee generaties oude adressen zijn die moeten worden doorgestuurd:

1. De oorspronkelijke vemat.nl-structuur (vóór de eerste herbouw van de
   site door Studio JAPI), die een paginastructuur per map gebruikte
   (bijvoorbeeld `/Training/`).
2. De vorige versie van déze website, die nog `.html`-adressen gebruikte
   (bijvoorbeeld `/diensten.html`).

Om te voorkomen dat bezoekers en zoekmachines op een foutmelding
uitkomen, worden beide generaties met een permanente (301) redirect
doorgestuurd naar hun nieuwe tegenhanger. Dit is al kant-en-klaar
verwerkt in het bestand `_redirects` in deze ZIP (Cloudflare Pages leest
dit bestand automatisch in: er hoeft niets handmatig te worden
ingesteld, zolang de site op Cloudflare Pages wordt gehost).

## Overzicht: oorspronkelijke vemat.nl-structuur

| Oude URL | Nieuwe URL | Toelichting |
|---|---|---|
| `/Home/` | `/` | Homepage |
| `/Management/` | `/management/` | Dienstpagina Interim management |
| `/Advies/` | `/advies/` | Dienstpagina Advies |
| `/Training/` | `/training/` | Dienstpagina Training |
| `/Over-van-Engelen/` | `/over-ons/` | Over-ons-pagina |
| `/Partners/` | `/over-ons/` | Was een lege sjabloonpagina zonder content op de oude site; verwijst nu naar Over ons |
| `/Klanten/` | `/over-ons/` | Was een lege sjabloonpagina zonder content op de oude site; verwijst nu naar Over ons |
| `/Contact/` | `/contact/` | Contactpagina |

## Overzicht: vorige versie van deze website (`.html`-adressen)

| Oude URL | Nieuwe URL | Toelichting |
|---|---|---|
| `/index.html` | `/` | Homepage |
| `/diensten.html` | `/diensten/` | Dienstenoverzicht |
| `/training.html` | `/training/` | Dienstpagina Training |
| `/advies.html` | `/advies/` | Dienstpagina Advies |
| `/management.html` | `/management/` | Dienstpagina Interim management |
| `/over-ons.html` | `/over-ons/` | Over-ons-pagina |
| `/contact.html` | `/contact/` | Contactpagina |
| `/privacy.html` | `/privacy/` | Privacyverklaring |
| `/faq.html` | `/#faq` | De FAQ is geen aparte pagina meer, maar een sectie op de homepage |

Overige, onbekende adressen komen uit op `/404.html`: een nette
foutpagina met links terug naar de site.

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
