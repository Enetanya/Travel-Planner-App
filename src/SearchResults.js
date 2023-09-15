import React, { useState } from 'react';


function SearchComponent() {
  const [countryQuery, setCountryQuery] = useState('');
  const [weatherQuery, setWeatherQuery] = useState('');
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (apiName, query) => {
    try {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      let apiUrl = '';
      switch (apiName) {
        case 'country':
          apiUrl = `https://restcountries.com/v3.1/name/${query}?fields=name,official,unMember,currencies,capital,region`;
          break;
        case 'weather':
          apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=a35814ec507bb3c9716297d56bfb03d2`;
          break;
        default:
          console.error('Invalid API name');
          return;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Not found');
        } else {
          throw new Error(`API request failed with status: ${response.status}`);
        }
      }

      const data = await response.json();

      // Update the results based on the API response
      setResults((prevResults) => ({
        ...prevResults,
        [apiName]: data,
      }));
    } catch (error) {
      console.error('Error searching:', error);
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    //clear search fields and results
    setCountryQuery('');
    setWeatherQuery('');
    setResults({});
    setError(null);
  };
 
  const handlePrint = () => {
    window.print(); // This will trigger the browser's print dialog
  };

  return (
    <div>
      <button onClick={handlePrint}>Print Page</button>
      <br/>
      <br/>
      {/* Input element for Country API */}
      <input
        type="text"
        placeholder="Enter Country Name"
        value={countryQuery}
        onChange={(e) => setCountryQuery(e.target.value)}
        onBlur={() => handleSearch('country', countryQuery)}
      />
      {/* Input element for Weather API */}
      <input
        type="text"
        placeholder="Enter a Location Name"
        value={weatherQuery}
        onChange={(e) => setWeatherQuery(e.target.value)}
        onBlur={() => handleSearch('weather', weatherQuery)}
      />
      {/* Display search results */}
      <div className="search-results">
        {/* Display results for the 'country' API */}
        <h2>Country Search Results:</h2>
<ul>
  {results.country && results.country.length > 0 ? (
    <li>
      <strong>Country:</strong> {results.country[0].name?.common}<br />
      <strong>Official Name:</strong> {results.country[0].name?.official}<br />
      <strong>United Nation Member:</strong> {results.country[0].unMember ? 'true' : 'false'}<br />
      <strong>Currency:</strong> {Object.keys(results.country[0].currencies)[0]} : {results.country[0].currencies[Object.keys(results.country[0].currencies)[0]]?.name}<br />
      <strong>Capital:</strong> {results.country[0].capital[0]}<br />
      <strong>Region:</strong> {results.country[0].region}<br />
    </li>
  ) : (
    <li>Country information will display here if available. Remember to click outside the box after you input the search request. </li>
  )}
</ul>

        {/* Display results for the 'weather' API */}
        <h2>Weather Search Results:</h2>
<ul>
  {results.weather ? (
    <li>
      <strong>Location</strong>: {weatherQuery.charAt(0).toUpperCase()+ weatherQuery.slice(1)}<br/>
      <strong>Temperature:</strong> {results.weather.main?.temp}  °F<br />
      <strong>Feels like:</strong> {results.weather.main?.feels_like} °F<br />
      <strong>Pressure:</strong> {results.weather.main?.pressure}<br />
      <strong>Humidity:</strong> {results.weather.main?.humidity}<br />
      <strong>Sea level:</strong> {results.weather.main?.sea_level}<br />
      <strong>Ground level:</strong> {results.weather.main?.grnd_level}<br />
      <strong>Visibility:</strong> {results.weather?.visibility}<br />
      <strong>Wind speed:</strong> {results.weather.wind?.speed}<br />
      <strong>Sunrise:</strong> {results.weather.sys?.sunrise}<br />
      <strong>Sunset:</strong> {results.weather.sys?.sunset}<br />
      <strong>Timezone:</strong> {results.weather?.timezone}<br />
    </li>
  ) : (
    <li>Weather information will display here if available. Remember to click outside the box after you input the search request. </li>
    )} 

</ul>
<hr></hr>
{/*Clear button*/}
<button onClick={handleClear}>Clear Search Results</button>
        {/* Display error message */}
        {error && <p>Error: {error}</p>}
      </div>

      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default SearchComponent;