import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() public serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() public blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();
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
    this.blueprintAdded.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    })
  }

}
