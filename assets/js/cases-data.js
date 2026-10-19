/* ==========================================================================
   VEMAT: praktijkverhalen (case-slider op /cases/)
   Hier voeg je later nieuwe verhalen toe. De slider leest deze lijst en bouwt
   zichzelf op: een zesde of zevende verhaal toevoegen is genoeg, de pagina hoeft
   nergens anders aangepast te worden.

   Velden per verhaal:
     id            unieke korte naam, zonder spaties (bijv. "troldtekt")
     order         volgorde in de slider (1, 2, 3, ...)
     category      bijv. "Klantcase", "Praktijkinzicht" of "Samenwerking"
     themes        lijstje onderwerpen (mag leeg zijn: [])
     organisation  naam van de organisatie ("" als het geen organisatie betreft)
     title         korte titel
     description   samenvatting van enkele zinnen
     image         pad naar de afbeelding, bijv. "assets/cases/troldtekt.webp"
                   (leeg laten = de slide toont netjes de naam of het logo)
     imageAlt      beschrijving van de afbeelding voor screenreaders
     logo          pad naar een logo, bijv. "assets/logos/table-du-sud.webp" (mag leeg)
     url           link naar het originele LinkedIn-bericht
     testimonial   {"quote": "...", "name": "..."}  of  null
   Gebruik alleen echte, bevestigde teksten. Dit bestand moet geldige JSON blijven
   (dubbele aanhalingstekens, geen komma achter het laatste item).
   ========================================================================== */
window.VEMAT_CASES = [
  {
    "id": "troldtekt",
    "order": 1,
    "category": "Klantcase",
    "themes": ["Persoonlijke ontwikkeling", "Teamvertrouwen"],
    "organisation": "Troldtekt A/S",
    "title": "Meer rust en vertrouwen binnen het team",
    "description": "Troldtekt zocht externe begeleiding om medewerkers verder te helpen in hun rol en in hun kennisniveau. Wat opviel was de persoonlijke aanpak: er werd echt gekeken naar de mensen in het team en hun verschillende persoonlijkheden. Dat zorgde voor meer rust in gesprekken en meer vertrouwen binnen het team.",
    "image": "assets/cases/troldtekt.webp",
    "imageAlt": "Frank van Engelen en Jurgen van Troldtekt in oranje veiligheidsvesten tussen de platen in het magazijn, met de quote: Ik merk vooral meer rust en vertrouwen binnen het team.",
    "logo": "",
    "url": "https://lnkd.in/p/edKUckT4",
    "testimonial": {
      "quote": "Geen standaardtraining, maar een aanpak die past bij wie je bent als organisatie.",
      "name": "Jurgen Bax, Troldtekt A/S"
    }
  },
  {
    "id": "praktijkinzicht",
    "order": 2,
    "category": "Praktijkinzicht",
    "themes": ["Commerciële ontwikkeling", "Klantgedrag"],
    "organisation": "",
    "title": "Snappen waarom het werkt, en wanneer niet",
    "description": "Effectieve verkooptraining draait niet alleen om nieuwe technieken, maar om begrijpen wanneer je welke inzet en waarom. Wie inzicht heeft in klantgedrag en over de juiste commerciële instrumenten beschikt, ziet gesprekken direct veranderen: meer richting en meer relevantie. Voor teams die al een goede basis hebben, ligt hier vaak de grootste winst.",
    "image": "assets/cases/praktijkinzicht.webp",
    "imageAlt": "Frank van Engelen geeft een training aan een groep in een vergaderruimte, met de tekst: Benieuwd naar jouw inzicht.",
    "logo": "",
    "url": "https://lnkd.in/p/e8if34Ky",
    "testimonial": {
      "quote": "Ik deed dit eigenlijk al… maar nu snap ik waarom het werkt en wanneer het niet werkt.",
      "name": "Deelnemer aan een recente verkooptraining"
    }
  },
  {
    "id": "table-du-sud",
    "order": 3,
    "category": "Klantcase",
    "themes": ["Salestraining", "Klantbeleving", "Teamontwikkeling"],
    "organisation": "Table du Sud",
    "title": "Beleving ook in de salesgesprekken",
    "description": "Bij Table du Sud draait alles om beleving, van het eerste contact tot het moment dat een klant zijn tafel thuis ziet staan. Diezelfde energie wilden ze voelen in hun salesgesprekken en klantcontact. Met persoonlijke feedback voor ieder teamlid, theorie die direct werd toegepast en rollenspellen. Het team richt zich nu meer op het gevoel dat het achterlaat, voert natuurlijke, persoonlijke gesprekken en heeft nieuwe energie.",
    "image": "assets/cases/table-du-sud.webp",
    "imageAlt": "Het restaurant van Table du Sud met houten wandpanelen en het logo, met de quote: Energiek. To-the-point. En precies wat ons team nodig had.",
    "logo": "assets/logos/table-du-sud.webp",
    "url": "https://lnkd.in/p/eDYgTfPt",
    "testimonial": {
      "quote": "Energiek, to-the-point en precies wat ons team nodig had. Frank weet met zijn energie en rollenspellen mensen in korte tijd grote stappen te laten zetten.",
      "name": "Eigenaar van Table du Sud"
    }
  },
  {
    "id": "studio-japi",
    "order": 4,
    "category": "Klantcase",
    "themes": ["Salestraining", "Ondernemers"],
    "organisation": "Studio JAPI",
    "title": "Van gevoel naar een stevige salesstructuur",
    "description": "Studio JAPI, een fullservice marketingbureau met een enorme drive, zat in de groeifase: mooie klanten en een duidelijke creatieve visie, maar nog zoekend in sales, positionering en structuur. Het traject was persoonlijk en afgestemd op waar de oprichters als ondernemers staan, met rollenspellen en praktijksituaties. Het team gaat nu sterker en bewuster salesgesprekken in.",
    "image": "assets/cases/studio-japi.webp",
    "imageAlt": "Frank van Engelen tussen twee oprichters van Studio JAPI, met de tekst: Groei begint zodra je durft.",
    "logo": "",
    "url": "https://lnkd.in/p/eZUjxjbE",
    "testimonial": {
      "quote": "De trainingen geven ons elke keer weer nieuwe inzichten. Vooral het oefenen en de manier waarop Frank alles vertelt is enorm waardevol. We zijn als team gegroeid in gesprekken, in zelfvertrouwen en in richting.",
      "name": "Pim van Workum en Jasper van Rooij, Studio JAPI"
    }
  },
  {
    "id": "nine-wisdoms",
    "order": 5,
    "category": "Samenwerking",
    "themes": ["Managementtraining", "Teamontwikkeling", "Gedragsinzichten"],
    "organisation": "Nine Wisdoms",
    "title": "Inzicht in de mens, vóór de training begint",
    "description": "Met het assessment van Nine Wisdoms krijgen deelnemers al voor de training inzicht in hun drijfveren, talenten en gedragspatronen. Een teamanalyse maakt talenten, verschillen en mogelijke uitdagingen zichtbaar, zodat management- en teamtrainingen beter aansluiten op de praktijk. Deelnemers krijgen er iets blijvends mee: een gebruiksaanwijzing van zichzelf en van anderen.",
    "image": "assets/cases/nine-wisdoms.webp",
    "imageAlt": "Frank van Engelen schudt lachend een hand bij de start van een nieuwe samenwerking.",
    "logo": "",
    "url": "https://lnkd.in/p/ehBnxedc",
    "testimonial": null
  }
];
