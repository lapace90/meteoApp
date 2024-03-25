const apiKey = 'beX7e8XRX5ikYPGn3Bv5VQ9fXyqwJ77c';
const apiUrl = 'https://api.tomorrow.io/v4/weather/forecast';
const city = '42.3478,-71.0466&apikey='

async function fetchWeatherData(city) {
    const url = `${apiUrl}?location=${city}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Récupérer les données météorologiques actuelles
        const currentTemperature = data.timelines.daily[0].values.temperatureAvg;
        const currentHumidity = data.timelines.daily[1].value.humidityAvg;
        // Mettre à jour l'interface utilisateur avec les données météorologiques
        updateUI(currentTemperature);
        updateUI(currentHumidity)
    } catch (error) {
        // Gérer les erreurs de requête
        console.error('Erreur lors de la récupération des données météorologiques:', error);
        displayError('Une erreur est survenue lors de la récupération des données météorologiques. Veuillez réessayer.');
    }
}

async function fetchWeatherData1(city) {
    const url = `${apiUrl}?location=${city}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Récupérer les données météorologiques actuelles
        const currentHumidity = data.timelines.daily[0].value.humidityAvg;
        // Mettre à jour l'interface utilisateur avec les données météorologiques
        updateUI(currentHumidity)
    } catch (error) {
        // Gérer les erreurs de requête
        console.error('Erreur lors de la récupération des données météorologiques:', error);
        displayError('Une erreur est survenue lors de la récupération des données météorologiques. Veuillez réessayer.');
    }
}

function updateUI(temperature, humidity) {
    // Mettre à jour l'interface utilisateur avec les données météorologiques
    // Par exemple, afficher la température dans un élément HTML avec l'ID "temperature"
    document.getElementById('temperature').textContent = temperature + '°C';
    document.getElementById('humidity').textContent = humidity = '%';
}

function displayError(message) {
    // Afficher un message d'erreur à l'utilisateur
    // Par exemple, afficher le message dans un élément HTML avec l'ID "error-message"
    document.getElementById('error-message').textContent = message;
}

// Appel de la fonction fetchWeatherData() lorsque l'utilisateur soumet le formulaire de recherche
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});
