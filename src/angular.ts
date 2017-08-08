import { Component, Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as common from "./common";
export * from "./common";
import { angularTemplateHtml } from "./angular-variables";

@Component({
    selector: "relative-time",
    template: angularTemplateHtml,
})
export class RelativeTimeComponent {
    @Input()
    time: Date | number;
    @Input()
    locale: common.Locale | null;

    relativeTime = "";
    title = "";
    timer: NodeJS.Timer;
    isHovering = false;

    get timeText() {
        return this.isHovering ? this.title : this.relativeTime;
    }

    ngOnInit() {
        this.relativeTime = common.getRelativeTime(this.time, this.locale);
        this.title = common.format(this.time);
        this.timer = setInterval(() => {
            this.relativeTime = common.getRelativeTime(this.time, this.locale);
        }, 60 * 1000);
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    mouseenter() {
        this.isHovering = true;
    }

    mouseleave() {
        this.isHovering = false;
    }
}

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
