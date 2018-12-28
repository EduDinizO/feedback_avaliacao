// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// SERVICES
import { AuthService } from './shared/guards/auth.service';
// COMPONENTS
import { AppComponent } from './app.component';
// GUARDS
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { AuthGuard } from './shared/guards/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        CanDeactivateGuard,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
