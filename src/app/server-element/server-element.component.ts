import { 
  Component, 
  Input, 
  OnInit,
  OnChanges, 
  SimpleChanges, 
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is default, other choices are None, ShadowDom
})
export class ServerElementComponent implements
 OnInit, 
 OnChanges, 
 DoCheck, 
 AfterContentInit, 
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked
 {
  @Input('servElement') public element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor');
   }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('these are the changes ', changes);
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  public ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  public ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  public ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  public ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

}
