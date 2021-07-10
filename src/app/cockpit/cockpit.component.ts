import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() public serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueprintCreated') public blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  public ngOnInit(): void {
  }

  public onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  public onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
