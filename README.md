html-marker
===========

A google map html marker, allow use html tags instead icon images


Usage:

    <script>
    var marker = new HtmlMarker({
      html: '<img class="marker-icon" src="marker.png" /> <p>Marker</p>',
      position: new google.maps.LatLng(lat, lng),
      map: map
    });
    </script>
