import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
// PAGES
import { HomeComponent } from '@app/pages/home/home.component';
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { RootComponent } from '@app/root/root.component';
import { EvaluatedComponent } from '@app/pages/evaluated/evaluated.component';
import { AssessComponent } from '@app/pages/assess/assess.component';
import { EvaluationOldComponent } from '@app/components/evaluation-old/evaluation-old.component';
import { EvaluationsOldsComponent } from '@app/components/evaluations-olds/evaluations-olds.component';
import { EvaluationCalibrationComponent } from '@app/components/evaluation-calibration/evaluation-calibration.component';

const routes: Routes = [
    {
        path: '', component: RootComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'avaliados', component: EvaluatedComponent },
            {
                path: 'avaliado/:id', component: AssessComponent, children: [
                    { path: 'avaliacao/:id', component: EvaluationOldComponent },
                    { path: 'avaliacoes', component: EvaluationsOldsComponent },
                    { path: 'avaliacao/:id/calibragem', component: EvaluationCalibrationComponent }
                ]
            },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
