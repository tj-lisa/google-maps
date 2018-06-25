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

    var rosario = new google.maps.Marker({
        position: {
            lat: 29.4154031,
            lng: -98.4895912
        },
        map: map
    });
    var rita = new google.maps.Marker({
        position: {
            lat: 29.424703,
            lng: -98.48999029999999
        },
        map: map
    });



    var rosarioInfo = new google.maps.InfoWindow({
        content: "<h1>Rosario's</h1>\n" +
        "<h3>Great Margaritas!</h3>\n" +
        "<h3>Live Music!</h3>\n" +
        "<h3>Open Late</h3>"


    });

    google.maps.event.addListener(rosario, "click", function(){
        // console.log("Fire");
        rosarioInfo.open(map, rosario);
    })

    // infoWindow.open(map, rosarios);

    var ritaInfo = new google.maps.InfoWindow({
        content: "<h1>Rita's</h1>\n" +
        "<h3>Great Margaritas!</h3>\n" +
        "<h3>Live Music!</h3>\n" +
        "<h3>Open Late</h3>"
    });

    google.maps.event.addListener(rita, "click", function(){
        // console.log("Fire");
        ritaInfo.open(map, rita);
    })
    // infoWindow.open(map, ritas);
}