import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { RoutesRouting } from './routes.routing';

// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';

const COMPONENTS = [
  // dashboard pages
  DashboardComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [CoreModule, SharedModule, RoutesRouting],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {}
