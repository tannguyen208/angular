import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { AuthRouting } from "./auth.routing";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const COMPONENTS = [
  LoginComponent,
  RegisterComponent,
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, AuthRouting],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class AuthModule {}
