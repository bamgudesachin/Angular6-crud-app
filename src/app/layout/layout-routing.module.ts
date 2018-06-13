import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard] ,
        children: [
            { path: '', redirectTo: 'booklist' },
            { path: 'booklist', loadChildren: './booklist/booklist.module#BooklistModule' }
        ]
    },
    { path: 'logout', component: LogoutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
