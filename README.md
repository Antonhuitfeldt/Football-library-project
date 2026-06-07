# Football-library-project
final project in the course "flerplattformsapplikationer med webbtekniker".

## Om projektet

Football Library är en webbapplikation utvecklad i React som gör det möjligt för användare att söka efter fotbollslag och spelare genom externa API.

Applikationen presenterar information om fotbollslag och spelare i ett modernt och responsivt gränssnitt. Användaren kan söka efter lag, visa spelartrupper, spara favoriter och utforska fotbollsdata från olika länder. Men även få en inblick i årets VM där man kan se information om de regerande mästarna samt spelschema inför VM.

Projektets målgrupp är fotbollsintresserade användare som vill utforska information om lag och spelare på ett enkelt och användarvänligt sätt, perfekt inför VM.

## Funktioner 
- Söka efter fotbollslag
- Visa information om lag
- Visa spelartrupper
- Spara favoritlag och favoritspelare
- Information om VM
- Spelschema för VM
- Visa landsflaggor för lag
- Responsiv design 
- Modernt användargränssnitt med React Bootstrap

## Tekniker och bibliotek

**Frontend**
- React
- React Router DOM
- React Bootstrap
- Bootstrap 
- CSS

**API**
- Sports API Pro (fotbollsdata)
- REST Countries API (landsinformation och flaggor)

## Val av ramverk

I projektet valdes React som JavaScript-bibliotek för att bygga applikationens användargränssnitt. Inför valet jämfördes React med Vue och Angular utifrån projektets behov, gruppens tidigare erfarenheter, ramverkens komplexitet och möjligheten att bygga en komponentbaserad webbapplikation.

React valdes eftersom det bygger på återanvändbara komponenter, vilket passade projektets struktur väl. Reacts dokumentation beskriver hur användargränssnitt kan delas upp i mindre, återanvändbara och kombinerbara komponenter [1]. Detta passade applikationen eftersom den består av flera separata delar, exempelvis navbar, sökfunktion, resultatvisning, modaler och favoritsystem. Med React kunde dessa delar delas upp i tydliga komponenter, vilket gjorde koden mer strukturerad och lättare att vidareutveckla. React fungerade även bra tillsammans med bibliotek som React Router och React Bootstrap, vilket passade projektets behov. En annan viktig anledning var att React hade tagits upp under kursens gång, vilket gjorde att gruppen redan hade viss erfarenhet av ramverket.

Vue jämfördes med React eftersom det också är komponentbaserat och känt för att vara relativt lätt att lära sig. Vue valdes däremot bort eftersom gruppen hade mer erfarenhet av React och eftersom React har ett större ekosystem och bredare community-stöd. Detta gör det enklare att hitta resurser, exempel och tredjepartsbibliotek under utvecklingen [2], [3].

Angular valdes också bort eftersom det är ett mer omfattande ramverk med många inbyggda funktioner. Det kan vara en fördel i större projekt, men för detta projekt ansågs Angular vara mer komplext än nödvändigt och ha en högre inlärningströskel än React och Vue [3], [4].

Sammanfattningsvis valdes React eftersom det gav bäst balans mellan flexibilitet, användarvänlighet och projektets tekniska behov. Jämfört med Vue hade React fördelen att gruppen redan hade erfarenhet av det och att ekosystemet är större. Jämfört med Angular var React mindre komplext och bättre anpassat till projektets omfattning. Valet stöds av Stack Overflows utvecklarundersökning där React är ett av de mest använda webbramverken [2], av översiktliga jämförelser som lyfter Reacts flexibilitet och breda användning [3], samt av tidigare jämförelser mellan React, Vue och Angular [4].

## Installation

```bash
# 1. Klona projektet
git clone <repository-url>

# 2. Gå in i projektmappen
cd Football-library-project

# 3. Installera beroenden
npm install

# 4. Skapa en .env-fil
VITE_SPORTS_API_PRO_KEY = din_api_kod

# 5. Starta utvecklingsservern
npm run dev
```

## Hur applikationen fungerar
Användaren skriver in namnet på ett lag eller en spelare i sökfältet.
Ett API-anrop skickas till Sports API Pro.
Resultaten bearbetas och visas på sidan.
För varje lag hämtas landsflaggan via REST Countries API baserat på lagets landskod.
Användaren kan visa mer information om lag och spelare samt spara dem som favoriter.

## API
### Sports API Pro
Används för att hämta:

- Fotbollslag
- Spelare
- Trupper
- Laginformation

### REST Countries API
Används för att hämta:

- Landsinformation
- Nationella flaggor

## Utvecklare

Projektet utvecklades som ett grupparbete inom kursen Flerplattformsapplikationer med webbtekniker.
Gruppmedlemmar:

Anton 
Emil
Malte

## Referenser

[1] React, “Describing the UI,” React Documentation. Tillgänglig: https://react.dev/learn/describing-the-ui

[2] Stack Overflow, “2025 Developer Survey: Technology,” Stack Overflow, 2025. Tillgänglig: https://survey.stackoverflow.co/2025/technology

[3] GeeksforGeeks, “React vs Angular vs Vue – Which Framework is the Best?,” GeeksforGeeks. Tillgänglig: https://www.geeksforgeeks.org/blogs/react-vs-angular-vs-vue-which-framework-is-the-best/

[4] C. Ybrahim, Performance Comparison of Angular, React and Vue, Karlstads universitet, 2023. Tillgänglig: https://www.diva-portal.org/smash/get/diva2:1772190/FULLTEXT01.pdf 
