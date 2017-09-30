# Ionic 3 examples of using Google Maps API
Some examples of how to use google maps javascript API on a Ionic application and use HTML5 geolocation.

![alt text](https://www.google.com/images/branding/product/2x/maps_96in128dp.png)

## Starting
1. First you need to visit the google maps javascript API (https://developers.google.com/maps/documentation/javascript/) then get your key.
2. Second you need the api in your `src/index.html`, this `https://maps.googleapis.com/maps/api/js?key=YOUR-KEY-HERE`.

## Using Google Maps Javascript API

1. First example: 

- On the html page i just put this div:

```
<div #map id="map"></div>
```
- Some css 
```
 #map {
        height: 100%;
 }
```
- On typescript step, i have to do something first. Declare a google variable.
```
 declare const google;
```
- Then i can use it.
```
 @ViewChild('map') mapElement: ElementRef;
 map: any;

ionViewDidLoad() {
    let posMaceio = { lat: -9.648139, lng: -35.717239 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 8,
        center: posMaceio,
        mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);
}
```
- I hope you enjoyed the first example

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.




