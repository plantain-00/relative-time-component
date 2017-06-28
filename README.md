[![Dependency Status](https://david-dm.org/plantain-00/relative-time-component.svg)](https://david-dm.org/plantain-00/relative-time-component)
[![devDependency Status](https://david-dm.org/plantain-00/relative-time-component/dev-status.svg)](https://david-dm.org/plantain-00/relative-time-component#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/relative-time-component.svg?branch=master)](https://travis-ci.org/plantain-00/relative-time-component)
[![npm version](https://badge.fury.io/js/relative-time-component.svg)](https://badge.fury.io/js/relative-time-component)
[![Downloads](https://img.shields.io/npm/dm/relative-time-component.svg)](https://www.npmjs.com/package/relative-time-component)

# relative-time-component
A auto-updated vuejs, reactjs and angular relative time component.

#### features

+ vuejs component
+ reactjs component
+ angular component
+ auto update
+ multi-language

#### install

`npm i relative-time-component`

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "relative-time-component/dist/vue";
```

```html
<relative-time :time="time">
</relative-time>
```

the online demo: https://plantain-00.github.io/relative-time-component/demo/vue/index.html

#### reactjs component demo

```ts
import { RelativeTime } from "relative-time-component/dist/react";
```

```jsx
<RelativeTime time={this.time}>
</RelativeTime>
```

the online demo: https://plantain-00.github.io/relative-time-component/demo/react/index.html

#### angular component demo

```ts
import { RelativeTimeComponent } from "relative-time-component/dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, RelativeTimeComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<relative-time [time]="time">
</relative-time>
```

the online demo: https://plantain-00.github.io/relative-time-component/demo/angular/index.html

#### properties and events of the component

name | type | description
--- | --- | ---
time | Date or number | the time
locale | [Locale](#relative-time-locale-structure)[] | the locale object

#### relative-time locale structure

```ts
type Locale = {
    secondsAgo: (seconds: number) => string;
    inSeconds: (seconds: number) => string;
    oneMinuteAgo: string;
    inOneMinute: string;
    minutesAgo: (minutes: number) => string;
    inMinutes: (minutes: number) => string;
    oneHourAgo: string;
    inOneHour: string;
    hoursAgo: (hours: number) => string;
    inHours: (hours: number) => string;
    oneDayAgo: string;
    inOneDay: string;
    daysAgo: (days: number) => string;
    inDays: (days: number) => string;
    oneMonthAgo: string;
    inOneMonth: string;
    monthsAgo: (months: number) => string;
    inMonths: (months: number) => string;
    oneYearAgo: string;
    inOneYear: string;
    yearsAgo: (years: number) => string;
    inYears: (years: number) => string;
};
```
