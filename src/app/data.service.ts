import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  Avoir= [
    'jai', 'tu as', 'elle/ill a', 'Nous avon', 'vous avez', 'elles/ils ons'
  ];


  myData() {
    return 'This is my data, man!';
  }

}
