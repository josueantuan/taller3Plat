import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-d',
  templateUrl: './mapa-d.component.html',
  styleUrls: ['./mapa-d.component.css']
})
export class MapaDComponent implements OnInit {
  lat: number = -0.174399;
  lng: number = -78.483414;
  public origin: any
  public destination: any
  constructor() { }

  ngOnInit() {
    this.getDirection()
  }
   
  getDirection() {
    this.origin = { lat: this.lat, lng: this.lng }
    this.destination = { lat: -0.167765, lng: -78.489688 } 

  }

}
