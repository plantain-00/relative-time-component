import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/relative-time-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <select (change)="change($event)">
            <option value="">default</option>
            <option value="zh-CN">zh-CN</option>
        </select>
        <br/>
        <relative-time [time]="time1" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time2" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time3" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time4" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time5" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time6" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time7" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time8" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time9" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time10" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time11" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time12" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time13" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time14" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time15" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time16" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time17" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time18" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time19" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time20" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time21" [locale]="locale"></relative-time>
        <br/>
        <relative-time [time]="time22" [locale]="locale"></relative-time>
    </div>
    `,
})
export class MainComponent {
    locale: Locale | null = null;

    time1 = Date.now() - 1000 * 60 * 60 * 24 * 365 * 5;
    time2 = Date.now() - 1000 * 60 * 60 * 24 * 365;
    time3 = Date.now() - 1000 * 60 * 60 * 24 * 30 * 5;
    time4 = Date.now() - 1000 * 60 * 60 * 24 * 30;
    time5 = Date.now() - 1000 * 60 * 60 * 24 * 10;
    time6 = Date.now() - 1000 * 60 * 60 * 24;
    time7 = Date.now() - 1000 * 60 * 60 * 15;
    time8 = Date.now() - 1000 * 60 * 60;
    time9 = Date.now() - 1000 * 60 * 15;
    time10 = Date.now() - 1000 * 60;
    time11 = Date.now() - 1000 * 15;
    time12 = Date.now() + 1000 * 15;
    time13 = Date.now() + 1000 * 60;
    time14 = Date.now() + 1000 * 60 * 15;
    time15 = Date.now() + 1000 * 60 * 60;
    time16 = Date.now() + 1000 * 60 * 60 * 15;
    time17 = Date.now() + 1000 * 60 * 60 * 24;
    time18 = Date.now() + 1000 * 60 * 60 * 24 * 10;
    time19 = Date.now() + 1000 * 60 * 60 * 24 * 30;
    time20 = Date.now() + 1000 * 60 * 60 * 24 * 30 * 5;
    time21 = Date.now() + 1000 * 60 * 60 * 24 * 365;
    time22 = Date.now() + 1000 * 60 * 60 * 24 * 365 * 5;

    change(e: UIEvent) {
        const localeName = (e.target as HTMLSelectElement).value;
        if (localeName) {
            import("../../dist/locales/" + localeName + ".js").then(module => {
                this.locale = module.locale;
            });
        } else {
            this.locale = null;
        }
    }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RelativeTimeComponent, Locale } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, RelativeTimeComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
