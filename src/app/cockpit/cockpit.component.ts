import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated: EventEmitter<any> = new EventEmitter();
@ViewChild('serverContentBox') serverContentBox: ElementRef;

onAddServer(serverNameBox: HTMLInputElement) {
    this.serverCreated.emit({name: serverNameBox.value,
                              content: this.serverContentBox.nativeElement.value, type: 'server'});
}

onAddBlueprint(serverNameBox: HTMLInputElement) {
    this.serverCreated.emit({name: serverNameBox.value,
                              content: this.serverContentBox.nativeElement.value, type: 'blueprint'});
}

  constructor() { }

  ngOnInit() {
  }

}
