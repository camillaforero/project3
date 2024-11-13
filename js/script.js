async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");

  const customMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }
  ];

  const chicago = { lat: 41.8781, lng: -87.6298 };
  const map = new Map(document.getElementById("map"), {
    center: chicago,
    zoom: 12,
    styles: customMapStyle,
  });

  const places = [
    {
      position: { lat: 41.942919290983, lng: -87.74616715055154},
      title: "Poncitlan Taqueria",
      description: "If you ever crave Mexican Tortas, I recommend heading over here because the torta de Chorizo is incredible!",
      color: "#d5a6bd"
    },
    {
      position: { lat: 41.853704891552155, lng: -87.63493870791658 },
      title: "Bonchon",
      description: "The fried chicken here is incredible. Some sides I recommend are the popcorn shrimp, pork buns, and fries.",
      color: "#e06666"
    },
    {
      position: { lat: 41.88157911153859, lng: -87.62388676140414 },
      title: "Osaka Sushi and Fresh Fruit Smoothies.",
      description: "I used to come here ALL the time as a kid, and although now less so, I always love to stop by and grab a mango & lychee smoothie with tapioca. Their sushi and miso soup are so yum!",
      color: "#a64d79"
    }
  ];
