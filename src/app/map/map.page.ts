import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  long: number;
  lat: number;
  constructor() { }

  ngOnInit() {
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          // console.log(resp.coords.longitude,resp.coords.latitude)
          // alert(resp.coords.longitude)
          this.long = resp.coords.longitude;
          this.lat = resp.coords.latitude;
        },
        err => {
          // reject(err);
          console.log(err)
        });
    });

  }

}
