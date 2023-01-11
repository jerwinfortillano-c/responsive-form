import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responisve-form';


  user_types: Array<{ name: string, value: string}> = [
    { name: 'Admin', value: 'Admin'},
    { name: 'User', value: 'User'}
  ];

  checked: boolean = false;
}
