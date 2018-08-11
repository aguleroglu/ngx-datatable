import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-template',
  template: `
    <ng-template
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="context"> 
    </ng-template>
  `
})
export class TemplateComponent {
    @Input() template;
    @Input() context;
}