# Football-library-project
final project in the course "flerplattformsapplikationer med webbtekniker".

# Om projektet

Football Library är en webbapplikation utvecklad i React som gör det möjligt för användare att söka efter fotbollslag och spelare genom externa API.

Applikationen presenterar information om fotbollslag och spelare i ett modernt och responsivt gränssnitt. Användaren kan söka efter lag, visa spelartrupper, spara favoriter och utforska fotbollsdata från olika länder. Men även få en inblick i årets VM där man kan se information om de regerande mästarna samt spelschema inför VM.

Projektets målgrupp är fotbollsintresserade användare som vill utforska information om lag och spelare på ett enkelt och användarvänligt sätt, perfekt inför VM.

# Funktioner 
Söka efter fotbollslag
Visa information om lag
Visa spelartrupper
Spara favoritlag och favoritspelare
Information om VM
Spelschema för VM
Visa landsflaggor för lag
Responsiv design 
Modernt användargränssnitt med React Bootstrap

# Tekniker och bibliotek

Frontend:
React
React Router DOM
React Bootstrap
Bootstrap 
CSS

API:
Sports API Pro (fotbollsdata)
REST Countries API (landsinformation och flaggor)

# Val av ramverk

Inför projektet jämfördes React med Vue och Angular.

React

React valdes eftersom det bygger på återanvändbara komponenter, har ett stort ekosystem och erbjuder hög flexibilitet vid utveckling av moderna webbapplikationer. React fungerar även väl tillsammans med bibliotek som React Router och React Bootstrap samt så är det de ramverk vi känner oss trygga med.

Vue

Vue är lätt att lära sig och har en enkel syntax. Däremot är communityn och ekosystemet mindre än Reacts, vilket innebär färre resurser och tredjepartsbibliotek.

Angular

Angular är ett komplett ramverk med många inbyggda funktioner. För detta projekt ansågs Angular dock vara mer komplext än nödvändigt och ha en högre inlärningströskel än React.

Motivering

React valdes eftersom det gav en bra balans mellan flexibilitet, prestanda och användarvänlighet. Den komponentbaserade strukturen gjorde det enkelt att dela upp projektet i mindre delar, exempelvis navbar, sökfunktion, resultatvisning, modaler och favoritsystem. En stor faktor till att React valdes är även då detta tagits upp under kursens gång.
Ramverket har ett stort community-stöd, hög popularitet bland utvecklare och stor flexibilitet vid utveckling av webbapplikationer. Tidigare jämförelsestudier visar att React är det mest använda av de tre jämförda alternativen (React, Vue och Angular) och att det fungerar väl tillsammans med externa bibliotek, vilket passade projektets behov[1]. 

# Installation

Klona projektet:

git clone <repository-url>

Navigera till projektmappen:

cd football-library

Installera beroenden:

npm install

Starta utvecklingsservern:

npm run dev

# Hur applikationen fungerar
Användaren skriver in namnet på ett lag eller en spelare i sökfältet.
Ett API-anrop skickas till Sports API Pro.
Resultaten bearbetas och visas på sidan.
För varje lag hämtas landsflaggan via REST Countries API baserat på lagets landskod.
Användaren kan visa mer information om lag och spelare samt spara dem som favoriter.

# API
Sports API Pro
Används för att hämta:

Fotbollslag
Spelare
Trupper
Laginformation

REST Countries API
Används för att hämta:

Landsinformation
Nationella flaggor

# Utvecklare

Projektet utvecklades som ett grupparbete inom kursen Flerplattformsapplikationer med webbtekniker.
Gruppmedlemmar:

Anton 
Emil
Malte

# Referenser 
[1] C. Ybrahim, Performance Comparison of Angular, React and Vue, Karlstads universitet, 2023. Tillgänglig: https://www.diva-portal.org/smash/get/diva2:1772190/FULLTEXT01.pdf 
