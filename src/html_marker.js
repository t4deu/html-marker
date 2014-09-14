function HtmlMarker(options) {
  this.position = options.position;
  this.html = options.html;
  this.setMap(options.map);
}

HtmlMarker.prototype = new google.maps.OverlayView();

HtmlMarker.prototype.draw = function() {
  var me = this;
  if (!this.div) {
    // Create a overlay text DIV
    this.div = document.createElement('DIV');
    // Create the DIV representing our HtmlMarker
    this.div.className = 'html-marker';//this.className;
    this.div.innerHTML = this.html;
    this.div.style.position = 'absolute';
    this.div.style.paddingLeft = '0px';
    this.div.style.cursor = 'pointer';

    google.maps.event.addDomListener(this.div, "click", function(event) {
      google.maps.event.trigger(me, "click");
    });

    // Then add the overlay to the DOM
    var panes = this.getPanes();
    panes.overlayImage.appendChild(this.div);
  }

  // Position the overlay 
  var point = this.getProjection().fromLatLngToDivPixel(this.position);
  if (point) {
    this.div.style.left = point.x + 'px';
    this.div.style.top = point.y + 'px';
  }
};

HtmlMarker.prototype.remove = function() {
  // Check if the overlay was on the map and needs to be removed.
  if (this.div) {
    this.div.parentNode.removeChild(this.div);
    this.div = null;
  }
};

HtmlMarker.prototype.getPosition = function() {
  return this.position;
};

HtmlMarker.prototype.getMarkerElement = function() {
  return this.div;
};
