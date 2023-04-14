# PLDB Explorer

PLDB Explorer is a data visualization project for the Public Library of DataBases (PLDB), built using Node.js, Express, React.js, and Axios. It allows users to interactively explore and filter PLDB data, as well as sort the data based on specific criteria.

## Key Features

- PLDB Data Display: PLDB data is fetched from a JSON file and displayed in the user interface, allowing users to view relevant information.
- Data Filtering: Users can filter PLDB data based on three criteria: type, country, and open-source status.
- Language Details: Users can obtain additional details about a specific programming language by searching for the language name.
- Data Sorting: PLDB data can be sorted based on two criteria: type and country.

## Technologies Used

PLDB Explorer is built using the following technologies:

- Node.js: A JavaScript runtime environment that allows for server-side JavaScript execution.
- Express: A web application framework for Node.js that simplifies the development of RESTful APIs.
- React.js: A JavaScript library for building interactive and responsive user interfaces.
- Axios: A JavaScript library for making HTTP requests to RESTful APIs.

## Project Setup

Follow the steps below to set up and run the project locally:

- Clone the PLDB Explorer repository to your development environment.
- Navigate to the project folder in the terminal.
- Install server dependencies with the command npm install.
- Navigate to the "client" folder in the terminal.
- Install client dependencies with the command npm install.
- Go back to the main project folder with the command cd ....
- Start the server and client simultaneously with the command npm run dev.
- Open a web browser and access the address http://localhost:3000 to see the application in action.

# API Endpoints

The PLDB Explorer API has the following endpoints:

- GET /data: Returns all PLDB data in JSON format.
- GET /data/filter: Filters PLDB data based on query parameters type, country, and isOpenSource.
- GET /data/language/:name: Returns details of the programming language whose name matches the value of the name route parameter.
- GET /data/sort: Sorts PLDB data based on query parameters sortBy and sortOrder.
