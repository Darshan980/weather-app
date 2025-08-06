// OpenWeatherMap API configuration
const API_KEY = '27e4124beb4cd16b69646f0c76f79e08'; // Your OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');
const weatherDetails = document.getElementById('weatherDetails');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const apiNotice = document.getElementById('apiNotice');

// Check if we're in demo mode
const isDemoMode = API_KEY === 'YOUR_API_KEY_HERE';

// Show demo notice if in demo mode
if (isDemoMode) {
    apiNotice.style.display = 'block';
    console.log('Demo mode enabled - using mock data');
}

// Event listeners
getWeatherBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

// Main function to fetch weather data
async function getWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    // Show loading state
    showLoading();

    if (isDemoMode) {
        // Use demo data
        setTimeout(() => {
            const mockData = {
                name: city,
                sys: { country: 'Demo' },
                main: { 
                    temp: Math.floor(Math.random() * 30) + 5, // Random temp between 5-35°C
                    humidity: Math.floor(Math.random() * 40) + 40 // Random humidity 40-80%
                },
                weather: [{ 
                    description: ['sunny', 'cloudy', 'rainy', 'partly cloudy'][Math.floor(Math.random() * 4)]
                }],
                wind: { 
                    speed: (Math.random() * 10 + 2).toFixed(1) // Random wind speed 2-12 m/s
                }
            };
            
            displayWeather(mockData);
        }, 1500);
        return;
    }

    // Use real API
    try {
        const apiUrl = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        console.log('Fetching from:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            const errorData = await response.text();
            console.log('Error response:', errorData);
            
            if (response.status === 404) {
                throw new Error('City not found');
            } else if (response.status === 401) {
                // API key invalid - fall back to demo mode
                console.warn('API key invalid, falling back to demo mode');
                showError('API key invalid. Using demo data instead.');
                setTimeout(() => {
                    const mockData = {
                        name: city,
                        sys: { country: 'Demo' },
                        main: { 
                            temp: Math.floor(Math.random() * 30) + 5,
                            humidity: Math.floor(Math.random() * 40) + 40
                        },
                        weather: [{ 
                            description: ['sunny', 'cloudy', 'rainy', 'partly cloudy'][Math.floor(Math.random() * 4)]
                        }],
                        wind: { 
                            speed: (Math.random() * 10 + 2).toFixed(1)
                        }
                    };
                    displayWeather(mockData);
                }, 2000);
                return;
            } else {
                throw new Error(`API Error: ${response.status} - ${errorData}`);
            }
        }

        const data = await response.json();
        console.log('Weather data received:', data);
        displayWeather(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Fall back to demo mode on any error
        showError('Connection error. Using demo data instead.');
        setTimeout(() => {
            const mockData = {
                name: city,
                sys: { country: 'Demo' },
                main: { 
                    temp: Math.floor(Math.random() * 30) + 5,
                    humidity: Math.floor(Math.random() * 40) + 40
                },
                weather: [{ 
                    description: ['sunny', 'cloudy', 'rainy', 'partly cloudy'][Math.floor(Math.random() * 4)]
                }],
                wind: { 
                    speed: (Math.random() * 10 + 2).toFixed(1)
                }
            };
            displayWeather(mockData);
        }, 2000);
    }
}

// Display weather information
function displayWeather(data) {
    resetButton();
    hideError();
    
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
    
    weatherDetails.style.display = 'block';
}

// Show error message
function showError(message) {
    resetButton();
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    weatherDetails.style.display = 'none';
}

// Hide error message
function hideError() {
    errorMessage.style.display = 'none';
}

// Show loading state
function showLoading() {
    hideError();
    weatherDetails.style.display = 'none';
    getWeatherBtn.innerHTML = '<span class="loading"></span>';
    getWeatherBtn.disabled = true;
}

// Reset button to normal state
function resetButton() {
    getWeatherBtn.innerHTML = 'Get Weather';
    getWeatherBtn.disabled = false;
}