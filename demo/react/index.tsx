import * as React from "react";
import * as ReactDOM from "react-dom";
import { RelativeTime, Locale } from "../../dist/react";

let locale: Locale | null = null;

class Main extends React.Component<{}, {}> {
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

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/RelativeTime-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br/>
                <RelativeTime time={this.time1} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time2} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time3} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time4} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time5} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time6} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time7} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time8} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time9} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time10} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time11} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time12} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time13} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time14} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time15} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time16} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time17} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time18} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time19} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time20} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time21} locale={this.locale}></RelativeTime>
                <br/>
                <RelativeTime time={this.time22} locale={this.locale}></RelativeTime>
            </div>
        );
    }
}

function start() {
    ReactDOM.render(<Main />, document.getElementById("container"));
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
