// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// SERVICES
import { AuthService } from './shared/guards/auth.service';
import { NotesService } from '@app/components/notes/notes.service';
// GUARDS
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
// COMPONENTS
import { EvaluatedComponent } from './pages/evaluated/evaluated.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RootComponent } from './root/root.component';
// PAGES
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
// LIBS
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        // PAGES
        EvaluatedComponent,
        HomeComponent,
        PageNotFoundComponent,
        RootComponent,
        // COMPONENTS
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NotesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ChartsModule,
    ],
    providers: [
        AuthService,
        CanDeactivateGuard,
        AuthGuard,
        NotesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
