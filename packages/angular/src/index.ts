import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelativeTimeComponent } from "./index.component";
export * from "./index.component";
export * from "relative-time-component";

/**
 * @public
 */
@NgModule({
    declarations: [
        RelativeTimeComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        RelativeTimeComponent,
    ],
})
export class RelativeTimeModule { }
