import { Locale } from "../";

/**
 * @public
 */
export const locale: Locale = {
    secondsAgo: (seconds: number) => `几秒前`,
    inSeconds: (seconds: number) => `几秒后`,
    oneMinuteAgo: "1分钟前",
    inOneMinute: "1分钟后",
    minutesAgo: (minutes: number) => `${minutes}分钟前`,
    inMinutes: (minutes: number) => `${minutes}分钟后`,
    oneHourAgo: "1小时前",
    inOneHour: "1小时后",
    hoursAgo: (hours: number) => `${hours}小时前`,
    inHours: (hours: number) => `${hours}小时后`,
    oneDayAgo: "1天前",
    inOneDay: "1天后",
    daysAgo: (days: number) => `${days}天前`,
    inDays: (days: number) => `${days}天后`,
    oneMonthAgo: "1个月前",
    inOneMonth: "1个月后",
    monthsAgo: (months: number) => `${months}个月前`,
    inMonths: (months: number) => `${months}个月后`,
    oneYearAgo: "1年前",
    inOneYear: "1年后",
    yearsAgo: (years: number) => `${years}年前`,
    inYears: (years: number) => `${years}年后`,
};
