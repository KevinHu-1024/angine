import { Component, OnInit, Input, ViewChild, AfterViewInit, ContentChild, Directive, ElementRef } from '@angular/core';

const libPrefix = 'ant';
const classPrefix = `${libPrefix}-btn`;

@Component({
  selector: 'ag-button',
  templateUrl: './ag-button.component.html',
  styleUrls: ['./ag-button.component.css']
})
export class AgButtonComponent implements OnInit, AfterViewInit {
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() size: 'large' | 'small' | 'default';
  @Input() ghost: boolean;
  @Input() htmlType: 'submit' | 'button' | 'reset' | 'menu';
  @Input() shape: string;
  @Input() loading: boolean;
  @Input() icon: string;
  @ViewChild('content')
  private content: ElementRef;
  classNames: {};

  constructor() { }

  ngOnInit() {
    this.setClassNames();
  }

  ngAfterViewInit() {
    this.setClassNames(`${classPrefix}-icon-only`, this.hasOnlyIcon(this.content));
  }

  private handleClick() {
    const clickAttr = `${classPrefix}-clicked`;
    this.setClassNames(clickAttr, true);
    setTimeout(() => this.setClassNames(clickAttr, false), 300);
  }

  private setClassNames(attr?: string, val?: boolean) {
    if (!attr) {
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
        [`${classPrefix}-clicked`]: false,
        [`${classPrefix}-icon-only`]: false,
      };
    } else {
      this.classNames[attr] = val;
    }
  }

  private hasOnlyIcon(content: ElementRef) {
    if (!content || !content.nativeElement) { return false; }
    if (!content.nativeElement.children.length) { return false; }
    const childNodes = content.nativeElement.childNodes as NodeList;
    const isEmptyElement = (ele: HTMLElement) => ele.innerText === '';
    return Array.from(childNodes).every((node) => {
      const nodeName = node.nodeName;
      return nodeName === 'ag-icon' || isEmptyElement(node.parentElement);
    });
  }

}

@Component({
  selector: 'ag-button-group',
  templateUrl: './ag-button-group.component.html',
})
export class AgButtonGroupComponent implements AfterViewInit {
  @ContentChild(AgButtonComponent)
  private buttons: AgButtonComponent;

  ngAfterViewInit() {
    console.log('!', this.buttons);
    this.buttons.classNames[`${classPrefix}-group`] = true;
  }
}

// https://stackoverflow.com/questions/34280475/remove-the-host-html-element-selectors-created-by-angular-component
// remove the host of avatar to be rendered as svg
@Directive({
  selector: '[remove-host]'
})
export class RemoveHost implements OnInit {
  constructor(private el: ElementRef) {
  }

  // wait for the component to render completely
  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
