import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-mapa-s',
  templateUrl: './mapa-s.component.html',
  styleUrls: ['./mapa-s.component.css']
})
export class MapaSComponent implements OnInit {
  lat: number = -0.174399;
  lng: number = -78.483414;
  latC:any;
  lngC:any;
  constructor() { }

  ngOnInit() {
  }
  mapClicked($event: MouseEvent) {
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    console.log(this.latC,this.lngC);
  }
}
