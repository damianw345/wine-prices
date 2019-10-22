# Wine prices demo project

Aim of the project is fetching data from 2 remote sources and presenting the results.  
App fetches wines from DB and pulls currency rates, then recalculates wine prices accordingly in chosen currency.  
Records are presented in infinite scroll table

# Prerequisites
1. JDK 11
1. Nodejs v10.16.3 with npm
1. Angular 7

# Run project
1. Run server app `./mvnw clean spring-boot:run` from backend dir. This will also run and fill in memory H2 db 
1. Install frontend dependencies `npm install` from frontend dir
1. Run Angular app `ng s -o` from frontend dir

