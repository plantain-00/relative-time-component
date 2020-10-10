# relative-time-component

[![Dependency Status](https://david-dm.org/plantain-00/relative-time-component.svg)](https://david-dm.org/plantain-00/relative-time-component)
[![devDependency Status](https://david-dm.org/plantain-00/relative-time-component/dev-status.svg)](https://david-dm.org/plantain-00/relative-time-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/relative-time-component.svg?branch=master)](https://travis-ci.org/plantain-00/relative-time-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/relative-time-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/relative-time-component/branch/master)
![Github CI](https://github.com/plantain-00/relative-time-component/workflows/Github%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/relative-time-component.svg)](https://badge.fury.io/js/relative-time-component)
[![Downloads](https://img.shields.io/npm/dm/relative-time-component.svg)](https://www.npmjs.com/package/relative-time-component)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Frelative-time-component%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/relative-time-component)

A auto-updated vuejs, reactjs and react-native relative time component.

## features

+ vuejs component
+ reactjs component
+ react-native component
+ auto update
+ multi-language

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/relative-time-vue-component?compression=gzip)](https://unpkg.com/relative-time-vue-component)

`npm i relative-time-vue-component`

```ts
import { RelativeTime } from "relative-time-vue-component";
app.component('relative-time', RelativeTime)
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/tree-vue-component/dist/relative-time-vue-component.min.js"></script>
```

```html
<relative-time :time="time">
</relative-time>
```

the online demo: <https://plantain-00.github.io/relative-time-component/packages/vue/demo>

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/relative-time-react-component?compression=gzip)](https://unpkg.com/relative-time-react-component)

`npm i relative-time-react-component`

```ts
import { RelativeTime } from "relative-time-react-component";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/tree-react-component/dist/relative-time-react-component.min.js"></script>
```

```jsx
<RelativeTime time={this.time}>
</RelativeTime>
```

the online demo: <https://plantain-00.github.io/relative-time-component/packages/react/demo>

## react-native component

`npm i relative-time-react-native-component`

```ts
import { RelativeTime } from "relative-time-react-native-component";
```

```jsx
<RelativeTime time={this.time}>
</RelativeTime>
```

## properties and events of the component

name | type | description
--- | --- | ---
time | Date or number | the time
locale | [Locale](#relative-time-locale-structure)[] | the locale object

## relative-time locale structure

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

## change logs

```ts
// v4 vue2
import "relative-time-vue-component";
// v5 vue3
import { RelativeTime } from "relative-time-vue-component";
app.component('relative-time', RelativeTime)
```

```bash
# v3
npm i relative-time-component

# v4
npm i relative-time-vue-component
npm i relative-time-react-component
npm i relative-time-angular-component
```

```ts
// v3
import "relative-time-component/vue";
import { RelativeTime } from "relative-time-component/react";
import { RelativeTimeModule } from "relative-time-component/angular";

// v4
import "relative-time-vue-component";
import { RelativeTime } from "relative-time-react-component";
import { RelativeTimeModule } from "relative-time-angular-component";
```

```ts
// v2 angular AOT:
import { RelativeTimeModule } from "relative-time-component/angular";

// v3 angular AOT:
import { RelativeTimeModule } from "relative-time-component/aot/angular";
```

```ts
// v2
import "relative-time-component/vue";

// v1
import "relative-time-component/dist/vue";
```
