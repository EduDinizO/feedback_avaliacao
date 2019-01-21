import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
    selector: 'app-evaluation',
    templateUrl: './evaluation.component.html',
    styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
    @ViewChild('staticTabs') staticTabs: TabsetComponent;

    public evaluation = {
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
        calibrated: {
            performance: 3.72,
            potential: 2.25,
        },
        technicals: [
            {
                id: 1,
                title: 'Compreensão do problema',
                description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
                autoScore: 3,
                leaderScore: 5,
                calibratedScore: 4,
                comment: 'comentário 1'
            },
            {
                id: 2,
                title: 'Entregáveis',
                description: 'Utilizou as melhores práticas na execução do trabalho técnico, produzindo uma entrega coerente com a demanda e de fácil manutenção.',
                autoScore: 4,
                leaderScore: 3,
                calibratedScore: 3,
                comment: ''
            },
            {
                id: 3,
                title: 'Arquitetura/Concepção',
                description: 'Compreende e propõe soluções envolvendo múltiplas partes e sistemas, avaliando o acomplamento entre elas em termos técnicos e de negócio.',
                autoScore: 0,
                leaderScore: 2,
                calibratedScore: 2,
                comment: 'comentário 3'
            },
            {
                id: 4,
                title: 'Estimação',
                description: 'Capacidade de antever o esforço e prazo de suas atividades e daquelas desempenhadas pelo time.',
                autoScore: 2,
                leaderScore: 3,
                calibratedScore: 3,
                comment: 'comentário 4'
            },
            {
                id: 5,
                title: 'Modelagem de dados ou de aplicação',
                description: 'Realiza o mapeamento de domínios reais para modelos capazes de expressar com complexidade adequada ao objeto em desenvolvimento.',
                autoScore: 0,
                leaderScore: 3,
                calibratedScore: 3,
                comment: 'comentário 5'
            },
            {
                id: 6,
                title: 'Ambiente e Versionamento',
                description: 'Demonstra maestria sobre seu ambiente de desenvolvimento, ferramental e versionamento, em especial na colaboração em time.',
                autoScore: 4,
                leaderScore: 4,
                calibratedScore: 4,
                comment: 'comentário 6'
            },
            {
                id: 7,
                title: 'Reporte de tarefas',
                description: 'Mantém o time, seus pares e coordenadores, atualizados do estado de suas tarefas e dificuldades pelo caminho.',
                autoScore: 3,
                leaderScore: 2,
                calibratedScore: 2,
                comment: 'comentário 7'
            }
        ],
        interpersonals: [
            {
                id: 1,
                title: 'Compreensão do problema',
                description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
                autoScore: 3,
                leaderScore: 5,
                calibratedScore: 4,
                comment: 'comentário 8'
            }
        ],
        intrapersonals: [
            {
                id: 1,
                title: 'Compreensão do problema',
                description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
                autoScore: 3,
                leaderScore: 5,
                calibratedScore: 4,
                comment: 'comentário 9'
            }
        ]
    };

    constructor() {
    }

    ngOnInit() {
    }

    selectTab(tabId: number) {
        this.staticTabs.tabs[tabId].active = true;
    }

    public save(): void {

    }

}
