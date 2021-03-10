import { NgModule } from '@angular/core';
import { MomentdatePipe } from './momentdate.pipe';

@NgModule({
    imports: [],
    declarations: [MomentdatePipe],
    exports: [MomentdatePipe],
})

export class MomentdateModule {

    static forRoot() {
        return {
            ngModule: MomentdateModule,
            providers: [],
        };
    }
}