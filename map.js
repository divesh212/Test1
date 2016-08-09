var myMap,gMap;

$(document).ready(function() {
    alert("Varun Forked this")
});

function initMap(){
    myMap=document.getElementById('map');
    gMap= new google.maps.Map(myMap,{
        center : {lat: 28.8, lng: 77.1},
        zoom : 10
    });


    gMap.addListener('center_changed', function () {
        var el= document.getElementById('centerdata');
        el.innerHTML= 'lat:'+gMap.getCenter().lat()+ 'long:'+gMap.getCenter().lng();
    });
    document.getElementById("Cb").addEventListener("click", gotoCb);
    document.getElementById("Home").addEventListener("click", gotoHome);
    document.getElementById("College").addEventListener("click", gotoCollege);
}



function gotoCollege() {
    var myCollege = {lat:28.719586, lng:77.0661438 };
    var marker3 = new google.maps.Marker({
        position: myCollege,
        map: gMap,
        title: 'Hello World!'
    });
    marker3.setMap(gMap);
    gMap.panTo(marker3.getPosition());
}

function gotoHome() {
    var myHome = {lat:28.619517, lng:77.108764 };
    var marker2 = new google.maps.Marker({
        position: myHome,
        map: gMap,
        title: 'Hello World!'
    });
    marker2.setMap(gMap);
    gMap.panTo(marker2.getPosition());

}

function gotoCb(argument) {
    var myCb = {lat:28.697082 , lng: 77.142419};
    var marker = new google.maps.Marker({
        position: myCb,
        map: gMap,
        title: 'Hello World!'
    });
    marker.setMap(gMap);
    gMap.panTo(marker1.getPosition());
}
function currentLocation() {
    navigator.geolocation.getCurrentPosition(function (pos) {
        var hereMarker=new google.maps.Marker({
            position: {lat: pos.coords.latitude, lng:pos.coords.longitude},
            map: gMap,
            title: 'Haha'
        });
        hereMarker.setMap(gMap);
        gMap.panTo(hereMarker.getPosition());
    })
}
