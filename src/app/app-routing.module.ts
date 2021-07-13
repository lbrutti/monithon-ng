import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';




@NgModule({
    imports: [
        RouterModule.forRoot(ConditionalRoutesHandler.getRoutesForMode(environment), { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
