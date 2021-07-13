import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';



@NgModule({
    imports: [
        RouterModule.forRoot(environment.routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
