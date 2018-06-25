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

    geo.geocode({address: "101 Alamo Plaza, San Antonio"}, function (response, status) {
        if (status === "OK") {
            console.log(response[0].geometry.location.lat());
            console.log(response[0].geometry.location.lng());
            console.log(response);
        } else {
            alert("invalid address!");
        }
    });


    var rosarios = {
        marker: {
            position: {
                lat: 29.4154031,
                lng: -98.4895912
            },
            animation: google.maps.Animation.DROP,
            map: map
        },
        infoWindow: {
            content: "<h1>Rosario's</h1>\n" +
            "<h3>Great Margaritas!</h3>\n" +
            "<h3>Live Music!</h3>\n" +
            "<h3>Open Late</h3>"
        }
    };

    var ritas = {
        marker: {
            position: {
                lat: 29.424703,
                lng: -98.48999029999999
            },
            animation: google.maps.Animation.DROP,
            map: map
        },
        infoWindow: {
            content: "<h1>Rita's</h1>\n" +
            "<h3>Great Margaritas!</h3>\n" +
            "<h3>Live Music!</h3>\n" +
            "<h3>Open Late</h3>"
        }
    };

    var mcdonalds = {
        marker: {
            position: {
                lat: 29.423843,
                lng: -98.48746210000002
            },
            animation: google.maps.Animation.DROP,
            map: map
        },
        infoWindow: {
            content: "<h1>McDonalds's</h1>\n" +
            "<h3>Bad service!</h3>\n" +
            "<h3>Good fries!</h3>\n" +
            "<h3>Open always.</h3>"
        }
    };


    var restaurants = [
        rosarios, ritas, mcdonalds
    ];

    restaurants.forEach( function (restaurant) {
        var tempMarker = new google.maps.Marker(restaurant.marker);
        var infoBox = new google.maps.InfoWindow(restaurant.infoWindow);
        google.maps.event.addListener(tempMarker, "click", function(){
            console.log('hello');
            infoBox.open(map, tempMarker);
        })
    })

}