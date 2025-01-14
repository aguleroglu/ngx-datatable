import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'summary-row-custom-template-demo',
  template: `
    <div>
      <h3>Summary Row with Custom Template
        <small>
        <a href="https://github.com/sercanuste/ngx-datatable/blob/master/demo/summary/summary-row-custom-template.component.ts">
          Source
        </a>
        </small>
      </h3>
     <ngx-datatable
        class="material"
        [summaryRow]="true"
        [summaryHeight]="'auto'"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [rowHeight]="'auto'"
        [rows]="rows">
      </ngx-datatable>
      <ng-template #nameSummaryCell let-row="row" let-value="value">
        <div class="name-container">
          <div class="chip" *ngFor="let name of getNames()">
            <span class="chip-content">{{ name }}</span>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: [ './summary-row-custom-template.component.scss' ]
})

export class SummaryRowCustomTemplateComponent implements OnInit {
  rows = [];

  @ViewChild('nameSummaryCell',{static:false})
  nameSummaryCell: TemplateRef<any>;

  columns = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
  }

  ngOnInit() {
    this.columns = [
      { prop: 'name', summaryFunc: () => null, summaryTemplate: this.nameSummaryCell },
      { name: 'Gender', summaryFunc: (cells) => this.summaryForGender(cells) },
      { prop: 'age', summaryFunc: (cells) => this.avgAge(cells) },
    ];
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  getNames(): string[] {
    return this.rows
      .map(row => row['name'])
      .map(fullName => fullName.split(' ')[1]);
  }

  private summaryForGender(cells: string[]) {
    const males = cells.filter(cell => cell === 'male').length;
    const females = cells.filter(cell => cell === 'female').length;

    return `males: ${males}, females: ${females}`;
  }

  private avgAge(cells: number[]): number {
    const filteredCells = cells.filter(cell => !!cell);
    return filteredCells.reduce((sum, cell) => sum += cell, 0) / filteredCells.length;
  }
}
