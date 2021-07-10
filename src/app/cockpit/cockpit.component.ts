import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  public serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  public blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  public newServerName = '';
  public newServerContent = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  public onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    })
  }

}
