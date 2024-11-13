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

