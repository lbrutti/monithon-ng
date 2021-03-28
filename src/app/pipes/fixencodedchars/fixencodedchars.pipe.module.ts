import { NgModule } from '@angular/core';
import { FixencodedcharsPipe } from './fixencodedchars.pipe';

@NgModule({
    imports: [],
    declarations: [FixencodedcharsPipe],
    exports: [FixencodedcharsPipe],
})

export class FixencodedcharsPipeModule {

    static forRoot() {
        return {
            ngModule: FixencodedcharsPipeModule,
            providers: [],
        };
    }
}