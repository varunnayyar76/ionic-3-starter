import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-page',
  templateUrl: './header.html'
})

export class HeaderPage {
  @Input() value: String;
}