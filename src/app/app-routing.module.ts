import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
// PAGES
import { HomeComponent } from '@app/pages/home/home.component';
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { RootComponent } from '@app/root/root.component';
import { EvaluatedComponent } from '@app/pages/evaluated/evaluated.component';

const routes: Routes = [
    {
        path: '', component: RootComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'avaliados', component: EvaluatedComponent }
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
