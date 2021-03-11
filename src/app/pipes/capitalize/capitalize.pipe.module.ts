import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
    imports: [],
    declarations: [CapitalizePipe],
    exports: [CapitalizePipe],
})

export class CapitalizePipeModule {

    static forRoot() {
        return {
            ngModule: CapitalizePipeModule,
            providers: [],
        };
    }
}