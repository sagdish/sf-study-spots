export default {
  mapStyles: [
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#444444"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            },
            {
                saturation: "-10"
            },
            {
                lightness: "-22"
            },
            {
                gamma: "3.37"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                color: "#f2f2f2"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                lightness: "-31"
            },
            {
                saturation: "-43"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "on"
            },
            {
                gamma: "2.05"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: 45
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                color: "#1377b7"
            },
            {
                visibility: "on"
            }
        ]
    }
  ]
}