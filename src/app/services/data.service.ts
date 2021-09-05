import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data ;
  private ratio;

  constructor() { }

  setData(id) {
    this.data = id;
  }

  setRatio(e) {
    this.ratio = e;
  }

  getData() {
    return this.data;
  }

  getRatio(){
    return this.ratio;
  }

}
