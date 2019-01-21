import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCalibrationComponent } from './evaluation-calibration.component';

describe('EvaluationCalibrationComponent', () => {
    let component: EvaluationCalibrationComponent;
    let fixture: ComponentFixture<EvaluationCalibrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EvaluationCalibrationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvaluationCalibrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
