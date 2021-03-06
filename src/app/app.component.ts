import { Component } from '@angular/core';
import { DataService } from './data.service' ;

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 // template: '<h1>Hello WOrld</h1>',
  template: `
  <h1 [ngStyle]="titlsStyles">Bonjour le monde</h1>
  <p>{{myObject.Etre}}</p>
  <div *ngIf="monEtre; then temp1 else temp2"></div>
  <ng-template #temp1>Repetez-moi</ng-template>
  <ng-template #temp2>No Etre</ng-template>
  <ul>
    <li *ngFor="let arr of monEtre">{{ arr }}
    </li>
  </ul>

  <button (click)="myEvent($event)">Display Verb</button>
  <div [hidden]= "edit">
  <img [src] = "angularLogo"/>
  </div>

  <p>{{ someProperty }}</p>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
 constructor(private dataService: DataService) {

  }
 someProperty = [];


  angularLogo= 'http://1.bp.blogspot.com/-Zi023Bis7Es/UnBiSAHuWZI/AAAAAAAAAHE/lxcmIQjP5e8/s1600/etre2.png';
  titlsStyle= 'red';
  titlsStyles= {
  'color': 'pink',
    'font-size': '4em'
  };
  monEtre = ['Je suis', 'Tu es', 'Elle/Il est', 'Nous somme', 'Vous etes', 'Elles/Ils sont'];
  myObject= {
  Etre: 'Etre [To Be]',
  Avoir : 'Avoir [To Have]'
  };
  edit= true;
  myEvent(event) {
   this.edit = false;
  }
   ngOnInit() {
    console.log(this.dataService.Avoir);

    this.someProperty = this.dataService.Avoir;
  }
}
