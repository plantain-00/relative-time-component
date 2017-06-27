import { Component, Input } from "@angular/core";
import * as common from "./common";
import { srcAngularTemplateHtml } from "./angular-variables";

@Component({
    selector: "relative-time",
    template: srcAngularTemplateHtml,
})
export class RelativeTimeComponent {
    @Input()
    time: Date | number;
    @Input()
    locale: common.Locale | null;

    relativeTime = "";
    title = "";
    timer: NodeJS.Timer;

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
}
