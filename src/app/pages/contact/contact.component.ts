import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat = -23.5538;
  lng = -46.653;
  selectedMarker;
  markers = [{ lat: -23.5538, lng: -46.653, alpha: 1 }];
  styles: any[] = [
    { elementType: 'geometry.fill', stylers: [{ color: '#750FF7' }] },
    { elementType: 'geometry.stroke', stylers: [{ color: '#000000' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#000000' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#000000' }] },
  ];


  constructor() {
  }

  ngOnInit() {
  }


  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

}
