import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
      <div class="container">
          <p>Made with all love in the world</p>
      </div>
  </footer>
  `,
  styles: [``]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
