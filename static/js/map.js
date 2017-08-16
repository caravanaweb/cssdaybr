(function() {
  'use strict';

    function _applyStyle() {
        return [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c9323b"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9323b"
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "-1"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "0"
                    },
                    {
                        "saturation": "0"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9323b"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#99282f"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#99282f"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#99282f"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#99282f"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#99282f"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#99282f"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#090228"
                    }
                ]
            }
        ]
    }

    function BuildMap() {
        var posObj = {
            'lat': -8.061088,
            'lng': -34.872127
        };

        var position = new google.maps.LatLng(posObj.lat, posObj.lng);

        var mapContainer = document.getElementById('map-container');

        var mapOptions = {
            center: position,
            zoom: 15,
            mapTypeControl: false,
            panControl: false,
            streetViewControl: false,
            zoomControl: true,
            scrollwheel: true,
            draggable: true,
            styles: _applyStyle(),
            title: 'Você está aqui',
            zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };

        var map = new google.maps.Map(mapContainer, mapOptions);

        // Marcador personalizado;
        var customMarker = new google.maps.Marker({
            position: posObj,
            map: map,
            icon: '../startup/common-files/img/marker.svg',
            title: 'Porto Digital',
            animation: google.maps.Animation.DROP
        });

        var contentString = '<div class="map-infowindow">' +
                                '<h5>Porto Digital</h5>' + 
                                '<p>Av. Cais do Apolo, 222 - Bairro do Recife.</p>' + 
                                '<p>CEP 50030-230, Recife/PE - Brasil</p>' +
                            '</div>';
        
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        infowindow.open(map,customMarker);

        google.maps.event.addListener(customMarker, 'click', function() {
            infowindow.open(map,customMarker);
        });
    }

    window.onload = function() {
        BuildMap();
    }
})();