import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

let locale: Locale | null = null;

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/relative-time-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
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
    locale = locale;

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
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RelativeTimeModule, Locale } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, RelativeTimeModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

function start() {
    platformBrowserDynamic().bootstrapModule(MainModule);
}

if (navigator.language === "zh-CN") {
    import ("../../dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
