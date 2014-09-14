html-marker
===========

A google map html marker, allow use html tags instead icon images


Usage:

    <script>
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new HtmlMarker({
      html: '<img class="marker-icon" src="marker.png" /> <p>Marker</p>',
      position: new google.maps.LatLng(-25.363882, 131.044922),
      map: map
    });
    </script>
