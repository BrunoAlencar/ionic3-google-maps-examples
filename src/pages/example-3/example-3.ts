import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare const google;

@IonicPage()
@Component({
  selector: 'page-example-3',
  templateUrl: 'example-3.html',
})
export class Example_3Page {


  @ViewChild('map') mapElement: ElementRef;
  map: any;

  labels: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  labelIndex = 0;

  polylines: Array<object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.startMap();
  }

  startMap() {
    let posMaceio = { lat: -9.616139, lng: -35.817239 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });

    google.maps.event.addListener(this.map, 'click', (event) => {
      this.addMarker(event.latLng, this.map);
      this.addPolyLine(event.latLng);
    });
    // this.map.setCenter(posMaceio);

  }

  addMarker(location, map) {
    let marker = new google.maps.Marker({
      position: location,
      label: this.labels[this.labelIndex++ % this.labels.length],
      map: map
    });
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
}
