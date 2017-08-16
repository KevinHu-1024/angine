import { Component, OnInit, Input } from '@angular/core';

const libPrefix = 'ant';
const classPrefix = `${libPrefix}-btn`;

@Component({
  selector: 'ag-button',
  templateUrl: './ag-button.component.html',
  styleUrls: ['./ag-button.component.css']
})
export class AgButtonComponent implements OnInit {
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() size: 'large' | 'small' | 'default';
  @Input() ghost: boolean;
  @Input() htmlType: 'submit' | 'button' | 'reset' | 'menu';
  @Input() shape: string;
  @Input() loading: boolean;
  @Input() icon: string;
  classNames: {};

  constructor() { }

  ngOnInit() {
    this.setClassNames();
  }

  private setClassNames() {
    this.classNames = {
      [classPrefix]: true,
      [`${classPrefix}-default`]: this.type === 'default' || !this.type,
      [`${classPrefix}-primary`]: this.type === 'primary',
      [`${classPrefix}-danger`]: this.type === 'danger',
      [`${classPrefix}-sm`]: this.size === 'small',
      [`${classPrefix}-lg`]: this.size === 'large',
      [`${classPrefix}-dashed`]: this.type === 'dashed',
      [`${classPrefix}-background-ghost`]: this.ghost,
      [`${classPrefix}-circle`]: this.shape === 'circle',
      [`${classPrefix}-loading`]: this.loading,
    };
  }

}
