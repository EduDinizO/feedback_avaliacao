import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsOldsComponent } from './evaluations-olds.component';

describe('EvaluationsOldsComponent', () => {
    let component: EvaluationsOldsComponent;
    let fixture: ComponentFixture<EvaluationsOldsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EvaluationsOldsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvaluationsOldsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
