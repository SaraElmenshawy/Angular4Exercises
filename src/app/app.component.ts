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
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  monEtre = ['Je suis', 'Tu es', 'Elle/Il est', 'Nous somme', 'Vous etes', 'Elles/Ils sont'];
  myObject= {
  Etre: 'Etre [To Be]',
  Avoir : 'Avoir [To Have]'
  };
}
