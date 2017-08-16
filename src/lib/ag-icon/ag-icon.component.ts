import { Component, OnInit, Input } from '@angular/core';

const libPrefix = 'ant';
const classPrefix = `${libPrefix}icon`;

interface Style {
  fontSize: number;
  color: string;
}

@Component({
  selector: 'ag-icon',
  templateUrl: './ag-icon.component.html',
  styleUrls: ['./ag-icon.component.css']
})
export class AgIconComponent implements OnInit {
  @Input() type: string;
  @Input() spin: boolean;
  @Input() style: Style;
  classNames: {};
  styles: {};

  constructor() { }

  ngOnInit() {
    this.setClassNames();
    this.setStyles();
  }

  private setClassNames() {
    this.classNames = {
      [classPrefix]: true,
      [`${classPrefix}-${this.type}`]: !!this.type,
      [`${classPrefix}-spin`]: !!this.spin,
    };
  }

  private setStyles() {
    this.styles = {
      'font-size': this.style.fontSize && `${this.style.fontSize}px`,
      'color': this.style.color,
    };
  }
}
