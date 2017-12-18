import Vue from "vue";
import Component from "vue-class-component";
import * as common from "relative-time-component";
export * from "relative-time-component";
import { indexTemplateHtml, indexTemplateHtmlStatic } from "./variables";

@Component({
    render: indexTemplateHtml,
    staticRenderFns: indexTemplateHtmlStatic,
    props: ["time", "locale"],
})
export class RelativeTime extends Vue {
    time: Date | number;
    locale: common.Locale | null;

    title = "";
    private relativeTime = "";
    private timer: NodeJS.Timer;
    private isHovering = false;

    get timeText() {
        return this.isHovering ? this.title : this.relativeTime;
    }

    beforeMount() {
        this.relativeTime = common.getRelativeTime(this.time, this.locale);
        this.title = common.format(this.time);
        this.timer = setInterval(() => {
            this.relativeTime = common.getRelativeTime(this.time, this.locale);
        }, 60 * 1000);
    }

    beforeDestroy() {
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

Vue.component("relative-time", RelativeTime);
