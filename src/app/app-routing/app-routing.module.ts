import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DeviceDetailsComponent } from '../components/device-details/device-details.component';

const routes: Routes = [
        {
            path: '',
            component: DashboardComponent,
        },
        {path: 'devices/details/:id', component: DeviceDetailsComponent},
    ];

@NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
