import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 // template: '<h1>Hello WOrld</h1>',
  template: `
  <h1>Bonjour le monde</h1>
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
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  angularLogo= 'http://1.bp.blogspot.com/-Zi023Bis7Es/UnBiSAHuWZI/AAAAAAAAAHE/lxcmIQjP5e8/s1600/etre2.png';
  monEtre = ['Je suis', 'Tu es', 'Elle/Il est', 'Nous somme', 'Vous etes', 'Elles/Ils sont'];
  myObject= {
  Etre: 'Etre [To Be]',
  Avoir : 'Avoir [To Have]'
  };
  edit= true;
  myEvent(event) {
   this.edit = false;
  }
}
