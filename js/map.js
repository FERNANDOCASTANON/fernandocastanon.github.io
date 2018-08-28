function initMap(){
    var options = {
      zoom: 8,
      center: {lat:34.0407, lng:-118.2468}
    }
    var map = new google.maps.Map(document.getElementById("map"), options);

    // listen for click on map
    google.maps.event.addListener(map, "click", function(event){
      // add marker
      addMarker({coords:event.latLng});
    })

     // array of markers
     var markers = [
       {
         coords:{lat:34.0522, lng:-118.2437},
         iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
         content: "<h1>Los Angeles is where Fernando lives</h1>"
       },
       {
         coords:{lat:34.4208, lng:-119.6982},
         content: "<h1>Apple Valley, California</h1>"
       },
       {
         coords:{lat:34.5008, lng:-117.1859}
       }
     ];

     // loop through markers

     for(var i = 0; i < markers.length; i++){
       addMarker(markers[i]);
     }

     function addMarker(props){
       var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        if(props.iconImage){
          marker.setIcon(props.iconImage)
        }

        // check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content: props.content
          });

          marker.addListener("click", function(){
            infoWindow.open(map, marker);
          })
        }
     }
  }
