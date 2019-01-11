import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
    selector: 'app-evaluation',
    templateUrl: './evaluation.component.html',
    styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
    @ViewChild('staticTabs') staticTabs: TabsetComponent;

    constructor() {
    }

    ngOnInit() {
    }

    selectTab(tabId: number) {
        this.staticTabs.tabs[tabId].active = true;
    }

}
