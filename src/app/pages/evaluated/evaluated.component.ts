import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as moment from 'moment';
import { ScheduleModalComponent } from '@app/shared/modals/schedule-modal/schedule-modal.components';
import { BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'app-evaluated',
    templateUrl: './evaluated.component.html',
    styleUrls: ['./evaluated.component.scss']
})
export class EvaluatedComponent implements OnInit {
    public totalEvaluations: number;
    public chartOptions = {
        cutoutPercentage: 70,
        responsive: false
    };
    // FIRST CHART = FINISHED
    public finishedEvaluations: number;
    public finishedChartLabels: string[] = ['Avaliações Finalizadas', 'Avaliações Não Finalizadas'];
    public finishedChartData: number[];
    public finishedChartColors = [{ backgroundColor: ['#46BA0B', '#D8D8D8'] }];
    // SECOND CHART = PENDING
    public pendingEvaluations: number;
    public pendingChartLabels: string[] = ['Avaliações Pendentes', 'Avaliações Não Finalizadas'];
    public pendingChartData: number[];
    public pendingChartColors = [{ backgroundColor: ['#D8D8D8', '#FDC14A'] }];
    // THIRD CHART = TIMER
    public createdAt: any;
    public endAt: any;
    public now;
    public timerHourLabel: any;
    public timerMinuteLabel: any;
    public timerEvaluations: number;
    public timerChartLabels: string[] = ['Tempo Passado', 'Tempo Restante'];
    public timerChartData: number[];
    public timerChartColors = [{ backgroundColor: ['#D8D8D8', '#F1634B'] }];

    public evaluateds = [
        {
            percentage: 0,
            name: 'Eduardo \'Duds\' Diniz',
            role: 'A1 - Júnior',
            photo: '../../../assets/images/user-2.png',
            schedule: false
        },
        {
            percentage: 30,
            name: 'Caian \'Peppa\' Egidio',
            role: 'A1 - Júnior',
            photo: '../../../assets/images/user-2.png',
            schedule: false
        },
        {
            percentage: 100,
            name: 'Rafael \'Líder\' Silvestrini',
            role: 'A2 - Júnior',
            photo: '../../../assets/images/user-2.png',
            schedule: false
        },
        {
            percentage: 100,
            name: 'Thiado \'Barney\' Freitas',
            role: 'B1 - Pleno',
            photo: '../../../assets/images/user-2.png',
            schedule: true
        }
    ];

    constructor(
        private modalService: BsModalService
    ) {
    }

    ngOnInit() {
        this.totalEvaluations = 6;
        this.finishedEvaluations = 2;
        this.finishedChartData = [this.finishedEvaluations, this.totalEvaluations - this.finishedEvaluations];
        this.pendingEvaluations = this.totalEvaluations - this.finishedEvaluations;
        this.pendingChartData = [this.finishedEvaluations, this.totalEvaluations - this.finishedEvaluations];
        // createdAt 06/02 18:42 now = 08/02 18:42 endAt = 08/02 19:57
        this.now = new Date();
        this.createdAt = moment().subtract(11, 'hours');
        this.createdAt = new Date(this.createdAt).getTime();
        this.endAt = moment().add(32, 'hours').add(48, 'minutes');
        this.endAt = new Date(this.endAt).getTime();

        const timePassed = this.now - this.createdAt;
        const timeRemaining = this.endAt - this.now;
        this.timerChartData = [timePassed, timeRemaining];

        this.timerHourLabel = parseInt((timeRemaining / 3600000).toString(), 10);
        this.timerMinuteLabel = parseInt((timeRemaining / 60000).toString(), 10) - this.timerHourLabel * 60;
    }

    public openScheduleModal(evaluated: object): void {
        const bsModalRef = this.modalService.show(ScheduleModalComponent, {
            initialState: {
                evaluated: evaluated
            },
            animated: true,
            keyboard: true,
            class: 'modal-lg'
        });
        bsModalRef.content.evaluated = evaluated;
        bsModalRef.content.onClose.subscribe(result => {
            if (result.confirm) {
                console.log(result.evaluated);
            }
        });
    }

}
