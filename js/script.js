async function initMap() {
  const mapOptions = {
      center: { lat: 41.8729, lng: -87.62793 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true,
      mapTypeControl: true,
      minZoom: 10,
      maxZoom: 16
  };

const map = new google.maps.Map(document.getElementById("map"), mapOptions);
 marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }

  if (typeof google !== "undefined") {
    initMap();
  } 
