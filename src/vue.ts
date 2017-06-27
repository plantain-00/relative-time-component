import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["time", "locale"],
})
class RelativeTime extends Vue {
    time: Date | number;
    locale: common.Locale | null;

    relativeTime = "";
    title = "";
    timer: NodeJS.Timer;

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
}

Vue.component("relative-time", RelativeTime);
