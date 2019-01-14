import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-evaluation-old',
    templateUrl: './evaluation-old.component.html',
    styleUrls: ['./evaluation-old.component.scss']
})
export class EvaluationOldComponent implements OnInit {
    public evaluations = [
        {
            id: 1,
            createdAt: new Date().getTime(),
            auto: {
                performance: 4.72,
                potential: 2.25,
            },
            leader: {
                performance: 0,
                potential: 0
            },
            calibrate: {
                performance: 3.72,
                potential: 2.25,
            },
            technicals: [],
            interpersonals: [],
            intrapersonals: []
        },
        {
            id: 2,
            createdAt: new Date().getTime(),
            auto: {
                performance: 3.65,
                potential: 4.1,
            },
            leader: {
                performance: 0,
                potential: 0
            },
            calibrate: {
                performance: 3.9,
                potential: 4.3,
            },
            technicals: [],
            interpersonals: [],
            intrapersonals: []
        },
        {
            id: 3,
            createdAt: new Date().getTime(),
            auto: {
                performance: 2.5,
                potential: 3,
            },
            leader: {
                performance: 0,
                potential: 0
            },
            calibrate: {
                performance: 3,
                potential: 3.1,
            },
            technicals: [],
            interpersonals: [],
            intrapersonals: []
        },
        {
            id: 4,
            createdAt: new Date().getTime(),
            auto: {
                performance: 4.5,
                potential: 4.35,
            },
            leader: {
                performance: 0,
                potential: 0
            },
            calibrate: {
                performance: 4.6,
                potential: 4.4,
            },
            technicals: [],
            interpersonals: [],
            intrapersonals: []
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
