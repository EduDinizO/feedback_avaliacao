import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationOldComponent } from './evaluation-old.component';

describe('EvaluationOldComponent', () => {
    let component: EvaluationOldComponent;
    let fixture: ComponentFixture<EvaluationOldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EvaluationOldComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvaluationOldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
