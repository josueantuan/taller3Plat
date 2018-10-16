import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-m',
  templateUrl: './mapa-m.component.html',
  styleUrls: ['./mapa-m.component.css']
})
export class MapaMComponent implements OnInit {
  lat: number = -0.174399;
  lng: number = -78.483414;
  constructor() { }

  ngOnInit() {
  }

}
