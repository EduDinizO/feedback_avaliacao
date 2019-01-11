import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-assess',
    templateUrl: './assess.component.html',
    styleUrls: ['./assess.component.scss']
})
export class AssessComponent implements OnInit {
    public id: number;
    public presentEvaluation = true;
    public pastEvaluation = false;

    public assess = {
        id: 1,
        percentage: 0,
        name: 'Eduardo \'Duds\' Diniz',
        role: 'A1 - Júnior',
        client: 'Gorila',
        photo: '../../../assets/images/user-2.png',
        schedule: false
    };

    constructor(
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        // const assess = this.route.snapshot.params.id;
    }

    public activateTab(tab: number): void {
        switch (tab) {
            case 1:
                this.presentEvaluation = true;
                this.pastEvaluation = false;
                break;
            case 2:
                this.presentEvaluation = false;
                this.pastEvaluation = true;
                break;
        }
    }

}
