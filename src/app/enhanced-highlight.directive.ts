import { Directive, Renderer2, OnInit,
         ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEnhancedHighlight]'
})
export class EnhancedHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
  }

}
