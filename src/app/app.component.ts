import { Component } from '@angular/core';

import { Flight } from './models/flight'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentDate = new Date();
  
  public flights: Flight[] = [
    <Flight>{
      flightNr: 'LX14',
      flightDateTime: '01.03.2021',
      destination: 'JFK',
      origin: 'ZRH',
      seatsAvailable: '43',
      standbysListed: '4'
    },
    <Flight>{
      flightNr: 'LX22',
      flightDateTime: '01.03.2021',
      destination: 'EWR',
      origin: 'ZRH',
      seatsAvailable: '12',
      standbysListed: '1'
    },
  ];
}
