import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTechnicalComponent } from './evaluation-technical.component';

describe('EvaluationTechnicalComponent', () => {
    let component: EvaluationTechnicalComponent;
    let fixture: ComponentFixture<EvaluationTechnicalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EvaluationTechnicalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvaluationTechnicalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
