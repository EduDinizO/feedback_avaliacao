import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-evaluation-calibration',
    templateUrl: './evaluation-calibration.component.html',
    styleUrls: ['./evaluation-calibration.component.scss']
})
export class EvaluationCalibrationComponent implements OnInit {
    public visibles = [];
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
                calibratedScore: 0,
                comment: 'comentário 1'
            },
            {
                id: 2,
                title: 'Entregáveis',
                description: 'Utilizou as melhores práticas na execução do trabalho técnico, produzindo uma entrega coerente com a demanda e de fácil manutenção.',
                autoScore: 4,
                leaderScore: 3,
                calibratedScore: 0,
                comment: ''
            },
            {
                id: 3,
                title: 'Arquitetura/Concepção',
                description: 'Compreende e propõe soluções envolvendo múltiplas partes e sistemas, avaliando o acomplamento entre elas em termos técnicos e de negócio.',
                autoScore: 0,
                leaderScore: 2,
                calibratedScore: 0,
                comment: 'comentário 3'
            },
            {
                id: 4,
                title: 'Estimação',
                description: 'Capacidade de antever o esforço e prazo de suas atividades e daquelas desempenhadas pelo time.',
                autoScore: 2,
                leaderScore: 3,
                calibratedScore: 0,
                comment: ''
            },
            {
                id: 5,
                title: 'Modelagem de dados ou de aplicação',
                description: 'Realiza o mapeamento de domínios reais para modelos capazes de expressar com complexidade adequada ao objeto em desenvolvimento.',
                autoScore: 0,
                leaderScore: 3,
                calibratedScore: 0,
                comment: ''
            },
            {
                id: 6,
                title: 'Ambiente e Versionamento',
                description: 'Demonstra maestria sobre seu ambiente de desenvolvimento, ferramental e versionamento, em especial na colaboração em time.',
                autoScore: 4,
                leaderScore: 4,
                calibratedScore: 0,
                comment: ''
            },
            {
                id: 7,
                title: 'Reporte de tarefas',
                description: 'Mantém o time, seus pares e coordenadores, atualizados do estado de suas tarefas e dificuldades pelo caminho.',
                autoScore: 3,
                leaderScore: 2,
                calibratedScore: 0,
                comment: ''
            }
        ],
        interpersonals: [
            {
                id: 1,
                title: 'Compreensão do problema',
                description: 'Demonstrou capacidade do entendimento do problema, sem afobação e evitou retrabalho por falha de escopo.',
                autoScore: 3,
                leaderScore: 5,
                calibratedScore: 0,
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
                calibratedScore: 0,
                comment: 'comentário 9'
            }
        ]
    };

    constructor() {
    }

    ngOnInit() {

    }

    public turnVisible(id: any): void {
        this.visibles.push(id);
    }

    public save(): void {

    }

    public finish(): void {

    }
}
