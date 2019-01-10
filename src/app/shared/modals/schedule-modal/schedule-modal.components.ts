import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-schedule-modal',
    templateUrl: './schedule-modal.component.html'
})
export class ScheduleModalComponent implements OnInit {
    public data: any;
    public onClose: Subject<any>;
    public inputFilterEvaluator = '';
    public evaluated: any;
    public evaluators = [
        {
            name: 'Felipe \'Felps\' Senefonte',
            showDates: false,
            dates: [
                {
                    date: '22/08 - 16h',
                    available: true
                },
                {
                    date: '22/08 - 18h',
                    available: false
                },
                {
                    date: '22/08 - 20h',
                    available: true
                },
                {
                    date: '23/08 - 16h',
                    available: true
                },
                {
                    date: '23/08 - 18h',
                    available: true
                },
                {
                    date: '23/08 - 20h',
                    available: true
                },
                {
                    date: '24/08 - 16h',
                    available: true
                },
                {
                    date: '24/08 - 18h',
                    available: true
                },
            ]
        },
        {
            name: 'Norival \'Vozera\' Toniato',
            showDates: false,
            dates: [
                {
                    date: '22/08 - 16h',
                    available: true
                },
                {
                    date: '22/08 - 18h',
                    available: false
                },
                {
                    date: '22/08 - 20h',
                    available: true
                },
                {
                    date: '23/08 - 16h',
                    available: true
                },
                {
                    date: '23/08 - 18h',
                    available: true
                },
                {
                    date: '23/08 - 20h',
                    available: true
                },
                {
                    date: '24/08 - 16h',
                    available: true
                },
                {
                    date: '24/08 - 18h',
                    available: true
                },
            ]
        },
        {
            name: 'Leonidas \'Leo\' Coelho',
            showDates: false,
            dates: [
                {
                    date: '22/08 - 16h',
                    available: true
                },
                {
                    date: '22/08 - 18h',
                    available: false
                },
                {
                    date: '22/08 - 20h',
                    available: true
                },
                {
                    date: '23/08 - 16h',
                    available: true
                },
                {
                    date: '23/08 - 18h',
                    available: true
                },
                {
                    date: '23/08 - 20h',
                    available: true
                },
                {
                    date: '24/08 - 16h',
                    available: true
                },
                {
                    date: '24/08 - 18h',
                    available: true
                },
            ]
        }
    ];

    constructor(
        public bsModalRef: BsModalRef
    ) {
    }

    ngOnInit() {
        this.onClose = new Subject();
    }

    public toggleDates(evaluatorClicked: any): void {
        this.evaluators.map(evaluator => evaluator === evaluatorClicked ? evaluator.showDates = !evaluator.showDates : null);
    }

    public onConfirm(): void {
        this.onClose.next({ confirm: true, evaluated: this.evaluated });
        this.bsModalRef.hide();
    }

    public onCancel(): void {
        this.onClose.next({ confirm: false, evaluated: this.evaluated });
        this.bsModalRef.hide();
    }

}
