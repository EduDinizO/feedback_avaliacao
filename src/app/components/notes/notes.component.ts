import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    public notes = [
        {
            name: 'Eduardo \'Duds\' Diniz',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '27/11/2018'
        },
        {
            name: 'Rafael \'Líder\' Silvestrini',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '16/10/2018'
        },
        {
            name: 'Thiado \'Barney\' Freitas',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '10/09/2018'
        },
        {
            name: 'Caian \'Peppa\' Egidio',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '25/08/2018'
        },
        {
            name: 'Igor \'Bunda\' Salvati',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '25/08/2018'
        },
        {
            name: 'Marcio \'Franco\' Campos',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '25/08/2018'
        },
        {
            name: 'Cindy \'Chun Li\' Kobayashi',
            subject: 'Compreensão do problema',
            description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
            date: '25/08/2018'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    public createNote(): void {

    }

    public getWindowHeight(): number {
        return 1;
    }

}
