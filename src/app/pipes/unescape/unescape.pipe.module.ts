import { NgModule } from '@angular/core';
import { UnescapePipe } from './unescape.pipe';

@NgModule({
    imports: [],
    declarations: [UnescapePipe],
    exports: [UnescapePipe],
})

export class UnescapePipeModule {

    static forRoot() {
        return {
            ngModule: UnescapePipeModule,
            providers: [],
        };
    }
}