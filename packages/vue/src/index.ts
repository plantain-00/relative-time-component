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

    get title() {
        return common.format(this.time);
    }
    private get relativeTime() {
        return common.getRelativeTime(this.time, this.locale, this.forceUpdateFlag);
    }
    private timer: NodeJS.Timer;
    private isHovering = false;
    private forceUpdateFlag = false;

    get timeText() {
        return this.isHovering ? this.title : this.relativeTime;
    }

    beforeMount() {
        this.timer = setInterval(() => {
            this.forceUpdateFlag = !this.forceUpdateFlag;
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
