import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public serverElements = [{type: 'server', name: 'Testserver', content: 'Testing one, one two, one two FIVE'}];

}
