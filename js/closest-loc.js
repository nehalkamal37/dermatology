// قائمة المواقع المتاحة (تحديثها حسب الحاجة)
const locations = [
    { name: "عيادة 1", lat: 25.276987, lon: 55.296249 },
    { name: "عيادة 2", lat: 24.774265, lon: 46.738586 },
    { name: "عيادة 3", lat: 30.044420, lon: 31.235712 },
    { name: "عيادة 4", lat: 21.389082, lon: 39.857911 },
    { name: "عيادة 5", lat: 35.689487, lon: 139.691711 }
];

// دالة لحساب المسافة بين نقطتين باستخدام Haversine Formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // نصف قطر الأرض بالكيلومترات
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // المسافة بالكيلومترات
}

// دالة البحث عن أقرب موقع
function findNearest() {
    const lat = parseFloat(document.getElementById("latitude").value);
    const lon = parseFloat(document.getElementById("longitude").value);
    
    if (isNaN(lat) || isNaN(lon)) {
        alert("يرجى إدخال موقع صحيح!");
        return;
    }

    let nearest = locations[0];
    let minDistance = getDistance(lat, lon, locations[0].lat, locations[0].lon);

    locations.forEach(location => {
        let distance = getDistance(lat, lon, location.lat, location.lon);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = location;
        }
    });

    document.getElementById("nearest-location").innerHTML = 
        `أقرب موقع: <strong>${nearest.name}</strong> على بعد <strong>${minDistance.toFixed(2)} كم</strong>`;
}

// دالة لجلب موقع المستخدم الحالي
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById("latitude").value = position.coords.latitude;
            document.getElementById("longitude").value = position.coords.longitude;
            findNearest();
        }, error => {
            alert("تعذر الحصول على موقعك: " + error.message);
        });
    } else {
        alert("المتصفح لا يدعم تحديد الموقع الجغرافي.");
    }
}
