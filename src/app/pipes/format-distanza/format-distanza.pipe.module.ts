import { NgModule } from '@angular/core';
import { FormatDistanzaPipe } from './format-distanza.pipe';

@NgModule({
    imports: [],
    declarations: [FormatDistanzaPipe],
    exports: [FormatDistanzaPipe],
})

export class FormatDistanzaPipeModule {

    static forRoot() {
        return {
            ngModule: FormatDistanzaPipeModule,
            providers: [],
        };
    }
}