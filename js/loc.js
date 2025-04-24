/* const locations = [
    { name: "Los Angeles", address: "1701 E. Cesar E. Chavez Ave, Suite 305, Los Angeles, CA 90033" },
    { name: "Thousand Oaks", address: "3095 Old Conejo Rd, Suite 200, Thousand Oaks, CA 91320" },
    { name: "Northridge", address: "18433 Roscoe Blvd, Suite 104, Northridge, CA 91325" },
    { name: "Santa Clarita", address: "21050 Centre Pointe Parkway, Santa Clarita, CA 91350" },
    { name: "Ventura", address: "1500 Palma Dr, Suite 187, Ventura, CA 93003" },
    { name: "Huntington Park", address: "5725 S Soto St, Huntington Park, CA 90255" },
    { name: "Moorpark", address: "145 Park Lane, Suite 200, Moorpark, CA 93021" },
    { name: "Palmdale", address: "520 W Palmdale Blvd Unit A, Palmdale, CA 93551" },
    { name: "San Bernardino", address: "980 N D St, San Bernardino, CA 92410" },
    { name: "Long Beach", address: "3490 Linden Ave, Ste 2, Long Beach, CA 90807" },
    { name: "Huntington Beach", address: "17822 Beach Blvd Suite 300, Huntington Beach, CA 92647" },
    { name: "Anaheim", address: "3400 West Ball Rd Suite 204, Anaheim, CA 92804" },
    { name: "Santa Ana", address: "1211 N Broadway, Santa Ana, CA 92701" },
    { name: "Santa Barbara", address: "504 W. Pueblo St Suite 301, Santa Barbara, CA 93105" },
    { name: "Chino", address: "5632 Philadelphia St, Suite 202, Chino, CA 91710" },
    { name: "Norwalk", address: "13132 Studebaker Road, Suite 7, Norwalk, CA 90650" },
    { name: "Montebello", address: "101 E. Beverly Blvd. Ste 204, Montebello, CA 90640" },
    { name: "Beaverton", address: "16100 Northwest Cornell Road Suite 100, Beaverton, OR 97006" },
    { name: "Beverly Hills", address: "9150 Wilshire Blvd., Suite 205, Beverly Hills, CA 90212" },
    { name: "Bakersfield", address: "3543 San Dimas St, Ste A, Bakersfield, CA 93301" }
];

// Function to get coordinates from OpenStreetMap
async function getCoordinates(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        } else {
            console.error("Address not found:", address);
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        return null;
    }
}

// Function to populate locations with coordinates
async function populateLocations() {
    for (let i = 0; i < locations.length; i++) {
        const coords = await getCoordinates(locations[i].address);
        if (coords) {
            locations[i].lat = coords.lat;
            locations[i].lon = coords.lon;
        }
    }
}

// Haversine formula to calculate distance
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Find the nearest location
function findNearest(lat, lon) {
    let nearest = locations[0];
    let minDistance = getDistance(lat, lon, nearest.lat, nearest.lon);

    locations.forEach(location => {
        let distance = getDistance(lat, lon, location.lat, location.lon);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = location;
        }
    });

    highlightNearest(nearest);
}

// Highlight the nearest location
function highlightNearest(nearest) {
    document.querySelectorAll(".location-card").forEach(card => card.style.border = "none"); // Reset styles
    document.querySelectorAll(".location-card").forEach(card => {
        if (card.querySelector("h3").textContent === nearest.name) {
            card.style.border = "3px solid red";
        }
    });

    alert(`أقرب موقع: ${nearest.name}`);
}

// Get location from user input
function findNearestFromInput() {
    const lat = parseFloat(document.getElementById("latitude").value);
    const lon = parseFloat(document.getElementById("longitude").value);

    if (isNaN(lat) || isNaN(lon)) {
        alert("يرجى إدخال موقع صحيح!");
        return;
    }

    findNearest(lat, lon);
}

// Get user's current location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById("latitude").value = position.coords.latitude;
            document.getElementById("longitude").value = position.coords.longitude;
            findNearest(position.coords.latitude, position.coords.longitude);
        }, error => {
            alert("تعذر الحصول على موقعك: " + error.message);
        });
    } else {
        alert("المتصفح لا يدعم تحديد الموقع الجغرافي.");
    }
}

// Initialize locations with coordinates
populateLocations();

*/


// new code
const locations = [
    { "name": "Los Angeles", "lat": 34.0522, "lon": -118.2437, "address": "1701 E. Cesar E. Chavez Ave, Suite 305, Los Angeles, CA 90033" },
    { "name": "Thousand Oaks", "lat": 34.1706, "lon": -118.8376, "address": "3095 Old Conejo Rd, Suite 200, Thousand Oaks, CA 91320" },
    { "name": "Northridge", "lat": 34.2381, "lon": -118.5301, "address": "18433 Roscoe Blvd, Suite 104, Northridge, CA 91325" },
    { "name": "Santa Clarita", "lat": 34.3917, "lon": -118.5426, "address": "21050 Centre Pointe Parkway, Santa Clarita, CA 91350" },
    { "name": "Ventura", "lat": 34.2746, "lon": -119.2290, "address": "1500 Palma Dr, Suite 187, Ventura, CA 93003" },
    { "name": "Huntington Park", "lat": 33.9817, "lon": -118.2251, "address": "5725 S Soto St, Huntington Park, CA 90255" },
    { "name": "Moorpark", "lat": 34.2856, "lon": -118.8820, "address": "145 Park Lane, Suite 200, Moorpark, CA 93021" },
    { "name": "Palmdale", "lat": 34.5794, "lon": -118.1165, "address": "520 W Palmdale Blvd Unit A, Palmdale, CA 93551" },
    { "name": "San Bernardino", "lat": 34.1083, "lon": -117.2898, "address": "980 N D St, San Bernardino, CA 92410" },
    { "name": "Long Beach", "lat": 33.7701, "lon": -118.1937, "address": "3490 Linden Ave, Ste 2, Long Beach, CA 90807" },
    { "name": "Huntington Beach", "lat": 33.6595, "lon": -117.9988, "address": "17822 Beach Blvd Suite 300, Huntington Beach, CA 92647" },
    { "name": "Anaheim", "lat": 33.8366, "lon": -117.9143, "address": "3400 West Ball Rd Suite 204, Anaheim, CA 92804" },
    { "name": "Santa Ana", "lat": 33.7455, "lon": -117.8677, "address": "1211 N Broadway, Santa Ana, CA 92701" },
    { "name": "Santa Barbara", "lat": 34.4208, "lon": -119.6982, "address": "504 W. Pueblo St Suite 301, Santa Barbara, CA 93105" },
    { "name": "Chino", "lat": 34.0122, "lon": -117.6889, "address": "5632 Philadelphia St, Suite 202, Chino, CA 91710" },
    { "name": "Norwalk", "lat": 33.9022, "lon": -118.0817, "address": "13132 Studebaker Road, Suite 7, Norwalk, CA 90650" },
    { "name": "Montebello", "lat": 34.0095, "lon": -118.1053, "address": "101 E. Beverly Blvd. Ste 204, Montebello, CA 90640" },
    { "name": "Beaverton", "lat": 45.4871, "lon": -122.8037, "address": "16100 Northwest Cornell Road Suite 100, Beaverton, OR 97006" },
    { "name": "Beverly Hills", "lat": 34.0736, "lon": -118.4004, "address": "9150 Wilshire Blvd., Suite 205, Beverly Hills, CA 90212" },
    { "name": "Bakersfield", "lat": 35.3733, "lon": -119.0187, "address": "3543 San Dimas St, Ste A, Bakersfield, CA 93301" },
  
    // New locations from your page
    { "name": "Glendale", "lat": 34.1425, "lon": -118.2551, "address": "1560 E. Chevy Chase Dr., Suite 330, Glendale, CA 91206" },
    { "name": "San Luis Obispo", "lat": 35.2828, "lon": -120.6596, "address": "862 Meinecke Avenue, Suite 202, San Luis Obispo, CA 93405" },
    { "name": "Alhambra", "lat": 34.0950, "lon": -118.1270, "address": "330 S. Garfield Avenue, Suite 268, Alhambra, CA 91801" },
    { "name": "Culver City", "lat": 34.0219, "lon": -118.3965, "address": "9808 Venice Boulevard, Suite 707, Culver City, CA 90232" },
    { "name": "Upland", "lat": 34.0973, "lon": -117.6503, "address": "984 West Foothill Boulevard, Suite B, Upland, CA 91786" },
    { "name": "Yuma", "lat": 32.6927, "lon": -114.6277, "address": "350 West Catalina Drive, Yuma, AZ 85364" }
  ];
  

const locationsOLD = [
    {"name": "Los Angeles", "lat": 34.0522, "lon": -118.2437, "address": "1701 E. Cesar E. Chavez Ave, Suite 305, Los Angeles, CA 90033"},
    {"name": "Thousand Oaks", "lat": 34.1706, "lon": -118.8376, "address": "3095 Old Conejo Rd, Suite 200, Thousand Oaks, CA 91320"},
    {"name": "Northridge", "lat": 34.2381, "lon": -118.5301, "address": "18433 Roscoe Blvd, Suite 104, Northridge, CA 91325"},
    {"name": "Santa Clarita", "lat": 34.3917, "lon": -118.5426, "address": "21050 Centre Pointe Parkway, Santa Clarita, CA 91350"},
    {"name": "Ventura", "lat": 34.2746, "lon": -119.2290, "address": "1500 Palma Dr, Suite 187, Ventura, CA 93003"},
    {"name": "Huntington Park", "lat": 33.9817, "lon": -118.2251, "address": "5725 S Soto St, Huntington Park, CA 90255"},
    {"name": "Moorpark", "lat": 34.2856, "lon": -118.8820, "address": "145 Park Lane, Suite 200, Moorpark, CA 93021"},
    {"name": "Palmdale", "lat": 34.5794, "lon": -118.1165, "address": "520 W Palmdale Blvd Unit A, Palmdale, CA 93551"},
    {"name": "San Bernardino", "lat": 34.1083, "lon": -117.2898, "address": "980 N D St, San Bernardino, CA 92410"},
    {"name": "Long Beach", "lat": 33.7701, "lon": -118.1937, "address": "3490 Linden Ave, Ste 2, Long Beach, CA 90807"},
    {"name": "Huntington Beach", "lat": 33.6595, "lon": -117.9988, "address": "17822 Beach Blvd Suite 300, Huntington Beach, CA 92647"},
    {"name": "Anaheim", "lat": 33.8366, "lon": -117.9143, "address": "3400 West Ball Rd Suite 204, Anaheim, CA 92804"},
    {"name": "Santa Ana", "lat": 33.7455, "lon": -117.8677, "address": "1211 N Broadway, Santa Ana, CA 92701"},
    {"name": "Santa Barbara", "lat": 34.4208, "lon": -119.6982, "address": "504 W. Pueblo St Suite 301, Santa Barbara, CA 93105"},
    {"name": "Chino", "lat": 34.0122, "lon": -117.6889, "address": "5632 Philadelphia St, Suite 202, Chino, CA 91710"},
    {"name": "Norwalk", "lat": 33.9022, "lon": -118.0817, "address": "13132 Studebaker Road, Suite 7, Norwalk, CA 90650"},
    {"name": "Montebello", "lat": 34.0095, "lon": -118.1053, "address": "101 E. Beverly Blvd. Ste 204, Montebello, CA 90640"},
    {"name": "Beaverton", "lat": 45.4871, "lon": -122.8037, "address": "16100 Northwest Cornell Road Suite 100, Beaverton, OR 97006"},
    {"name": "Beverly Hills", "lat": 34.0736, "lon": -118.4004, "address": "9150 Wilshire Blvd., Suite 205, Beverly Hills, CA 90212"},
    {"name": "Bakersfield", "lat": 35.3733, "lon": -119.0187, "address": "3543 San Dimas St, Ste A, Bakersfield, CA 93301"}
];

// Fetch coordinates from OpenStreetMap
async function getCoordinates(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        } else {
            console.error("Address not found:", address);
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        return null;
    }
}

// Populate locations with coordinates
async function populateLocations() {
    for (let i = 0; i < locations.length; i++) {
        const coords = await getCoordinates(locations[i].address);
        if (coords) {
            locations[i].lat = coords.lat;
            locations[i].lon = coords.lon;
        }
    }
}

// Haversine formula to calculate distance
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Find the nearest location
function findNearest(lat, lon) {
    let nearest = locations[0];
    let minDistance = getDistance(lat, lon, nearest.lat, nearest.lon);

    locations.forEach(location => {
        let distance = getDistance(lat, lon, location.lat, location.lon);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = location;
        }
    });

    highlightNearest(nearest, minDistance);
}

// Highlight the nearest location and show the result in a card
function highlightNearest(nearest, distance) {
    document.querySelectorAll(".location-card").forEach(card => card.style.border = "none"); // Reset styles
    document.querySelectorAll(".location-card").forEach(card => {
        if (card.querySelector("h3").textContent === nearest.name) {
            card.style.border = "3px solid red"; // Highlight nearest location
        }
    });

    // Display the nearest location in a Bootstrap-styled card
    document.getElementById("nearest-location").innerHTML = `
        <div class="card mt-4 shadow-lg">
            <div class="card-body">
                <h4 class="card-title text-primary">${nearest.name}</h4>
                <p class="card-text">${nearest.address}</p>
                <p class="text-muted">Distance: <strong>${distance.toFixed(2)} km</strong></p>
                <a href="https://maps.google.com/?q=${encodeURIComponent(nearest.address)}" target="_blank" class="btn btn-info">View on Map</a>
            </div>
        </div>
    `;
}

// Get location from user input
function findNearestFromInput() {
    const lat = parseFloat(document.getElementById("latitude").value);
    const lon = parseFloat(document.getElementById("longitude").value);

    if (isNaN(lat) || isNaN(lon)) {
        alert("يرجى إدخال موقع صحيح!");
        return;
    }

    findNearest(lat, lon);
}

// Get user's current location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById("latitude").value = position.coords.latitude;
            document.getElementById("longitude").value = position.coords.longitude;
            findNearest(position.coords.latitude, position.coords.longitude);
        }, error => {
            alert("تعذر الحصول على موقعك: " + error.message);
        });
    } else {
        alert("المتصفح لا يدعم تحديد الموقع الجغرافي.");
    }
}

// Initialize locations with coordinates
populateLocations();
