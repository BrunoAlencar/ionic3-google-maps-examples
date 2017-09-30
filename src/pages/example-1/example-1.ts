import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare const google;

@IonicPage()
@Component({
  selector: 'page-example-1',
  templateUrl: 'example-1.html',
})
export class Example_1Page {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    // start my map
    let posMaceio = { lat: -9.648139, lng: -35.717239 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 8,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);
  }

}
