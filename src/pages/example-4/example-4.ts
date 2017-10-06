import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare const google;

@IonicPage()
@Component({
  selector: 'page-example-4',
  templateUrl: 'example-4.html',
})
export class Example_4Page {
  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.startMap();
  }

  startMap() {
    let posMaceio = { lat: -9.616139, lng: -35.817239 }
    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
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
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found. ');


        let marker = new google.maps.Marker({
          position: pos,
          map: map
        });
        map.setCenter(pos);
      }, () => {
        this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }




  }


  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }


}
