# create-csv-file


<h3>Tool-kit & languages Used</h3>

* Node JS /Express
* luxon
* csv-writer
* axios

<h3>API Endpoints </h3>
<h2>The following API endpoints are available:</h2>

* POST  /create-csv: Create a csv file with data.

API Endpoint: /create-csv
To generate a CSV file, make a POST request to the /create-csv endpoint with the following parameters:

address: The address of the data source (e.g., API endpoint, database).
page_size: The number of rent listings in the csv file.

The server will retrieve data from the specified address in pages based on the provided page_size value.

listingID: The unique identifier for each record.
Name: The name associated with each listings.
dates: from current date to end date



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anujsharma2590/create-csv-file.git
   
   cd create-csv-file
   npm install
   
   npm start
   
   Open a web browser and navigate to http://localhost:7000 to access the application.
