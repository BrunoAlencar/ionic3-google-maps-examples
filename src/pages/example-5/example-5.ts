import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare const google;


@IonicPage()
@Component({
  selector: 'page-example-5',
  templateUrl: 'example-5.html',
})
export class Example_5Page {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  polylines: Array<object> = [];

  watchId: any;

  options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.startMap();

    setTimeout(()=>{
      this.watchId = navigator.geolocation.watchPosition((position) => {
        this.addPolyLine({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        console.log({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }, (error) => {

      }, this.options);
    }, 3000);
  }

  startMap() {
    let posMaceio = { lat: -9.616139, lng: -35.817239 }
    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 18,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });

    let infoWindow = new google.maps.InfoWindow({ map: map });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos)
        //start position
        this.addPolyLine(pos);

        let marker = new google.maps.Marker({
          position: pos,
          map: map
        });
        map.setCenter(pos);
        this.map = map;


      }, () => {
        this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }




  }

  addPolyLine(latLng) {
    this.polylines.push(latLng);
    if (this.polylines.length > 1) {

      var flightPath = new google.maps.Polyline({
        path: this.polylines,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      flightPath.setMap(this.map);
    }

  }


  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }
}
