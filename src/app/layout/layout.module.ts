import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from '../logout/logout.component';

import { AuthGuard } from '../guards/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
    	LayoutComponent,
	    SidebarComponent,
	    HeaderComponent,
	    LogoutComponent
    ],
    providers: [AuthGuard]
})
export class LayoutModule {}
