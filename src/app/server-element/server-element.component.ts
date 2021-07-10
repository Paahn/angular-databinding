import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is default, other choices are None, ShadowDom
})
export class ServerElementComponent implements OnInit {
  @Input('servElement') public element: { type: string, name: string, content: string };

  constructor() { }

  public ngOnInit(): void {
  }

}
