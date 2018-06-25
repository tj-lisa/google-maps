"use strict";

function initMap() {
    var mapCanvas = document.getElementById("map-canvas");
    var mapOptions = {
        zoom: 5,
        center: {
            lat: 29.426791,
            lng: -98.48602
        }
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);


    var geo = new google.maps.Geocoder();

    geo.geocode({address: "910 S Alamo St"}, function (response, status) {
        if (status === "OK") {
            console.log(response[0].geometry.location.lat());
            console.log(response[0].geometry.location.lng());//getting lat & long
// map.setCenter(response[0].geometry.location);
        } else {
            alert("invalid address!");
        }
    });
}