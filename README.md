# Weather App

A simple yet powerful weather web application that allows users to check real-time weather conditions by entering the name of any city. Built using HTML, CSS, and JavaScript, it fetches live weather data from the OpenWeatherMap API.

## 🔗 Live Demo
[Click here to try the Weather App](https://darshan980.github.io/weather-app/)

## Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Clean User Interface**: Simple input box and button for easy interaction
- **Comprehensive Weather Info**: Displays temperature, weather condition, humidity, and wind speed
- **Error Handling**: Shows appropriate error messages for invalid cities or API issues
- **Responsive Design**: Works well on both desktop and mobile devices
- **Demo Mode**: Includes mock data functionality for testing without an API key

## Setup Instructions

### 1. Get an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to your API keys section
4. Copy your API key

### 2. Configure the Application

1. Open `script.js` in a text editor
2. Replace `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### 3. Run the Application

1. Open `index.html` in your web browser
2. Enter a city name in the input field
3. Click "Get Weather" or press Enter
4. View the weather information displayed

## Demo Mode

If you don't have an API key yet, the application will automatically run in demo mode with mock weather data. This allows you to test the interface and functionality before setting up the API key.

## File Structure

```
weather-app/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality and API calls
└── README.md       # This file
```

## Weather Information Displayed

- **City Name**: Name and country of the searched city
- **Temperature**: Current temperature in Celsius
- **Weather Condition**: Description of current weather (e.g., clear, rain, clouds)
- **Humidity**: Humidity percentage
- **Wind Speed**: Wind speed in meters per second

## Error Handling

The application handles various error scenarios:
- Invalid or misspelled city names
- Network connectivity issues
- Invalid API key
- API rate limiting

## Browser Compatibility

This application works in all modern web browsers including:
- Chrome
- Firefox
- Safari
- Edge

## API Information

This application uses the OpenWeatherMap Current Weather Data API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Free Tier**: 1,000 calls per day
- **Response Format**: JSON
- **Temperature Unit**: Celsius (metric system)

## Customization

You can easily customize the application by:
- Modifying colors and styling in `style.css`
- Adding more weather parameters in `script.js`
- Changing the temperature unit from Celsius to Fahrenheit
- Adding weather icons or background images

## Troubleshooting

**"Invalid API key" error**: Make sure you've replaced `YOUR_API_KEY_HERE` with your actual API key from OpenWeatherMap.

**"City not found" error**: Check the spelling of the city name. Try using the full city name or include the country code.

**No response**: Check your internet connection and ensure the API key is valid and not exceeded its usage limit.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
