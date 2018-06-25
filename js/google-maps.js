"use strict";

function initMap() {
    var mapCanvas = document.getElementById("map-canvas");
    var mapOptions = {
        zoom: 15,
        center: {
            lat: 29.42082229999999,
            lng: -98.49001320000002
        }
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var geo = new google.maps.Geocoder();

    geo.geocode({address: "424 E Nueva St, San Antonio"}, function (response, status) {
        if (status === "OK") {
            console.log(response[0].geometry.location.lat());
            console.log(response[0].geometry.location.lng());
            console.log(response);
        } else {
            alert("invalid address!");
        }
    });

    var rosarios = new google.maps.Marker({
        position: {
            lat: 29.4154031,
            lng: -98.4895912
        },
        map: map
    });
    var ritas = new google.maps.Marker({
        position: {
            lat: 29.424703,
            lng: -98.48999029999999
        },
        map: map
    });



    var infoWindow = new google.maps.InfoWindow({
        content: 'Rosario\'s'
    });

    infoWindow.open(map, rosarios);

    var infoWindow = new google.maps.InfoWindow({
        content: 'Rita\'s'
    });

    infoWindow.open(map, ritas);
}