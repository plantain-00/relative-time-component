/**
 * @public
 */
export interface Locale {
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
}

const defaultLocale: Locale = {
  secondsAgo: (seconds: number) => `a few seconds ago`,
  inSeconds: (seconds: number) => `in a few seconds`,
  oneMinuteAgo: '1 minute ago',
  inOneMinute: 'in 1 minute',
  minutesAgo: (minutes: number) => `${minutes} minutes ago`,
  inMinutes: (minutes: number) => `in ${minutes} minutes`,
  oneHourAgo: '1 hour ago',
  inOneHour: 'in 1 hour',
  hoursAgo: (hours: number) => `${hours} hours ago`,
  inHours: (hours: number) => `in ${hours} hours`,
  oneDayAgo: '1 day ago',
  inOneDay: 'in 1 day',
  daysAgo: (days: number) => `${days} days ago`,
  inDays: (days: number) => `in ${days} days`,
  oneMonthAgo: '1 month ago',
  inOneMonth: 'in 1 month',
  monthsAgo: (months: number) => `${months} months ago`,
  inMonths: (months: number) => `in ${months} months`,
  oneYearAgo: '1 year ago',
  inOneYear: 'in 1 year',
  yearsAgo: (years: number) => `${years} years ago`,
  inYears: (years: number) => `in ${years} years`
}

/**
 * @public
 */
export function getRelativeTime(time: Date | number, locale: Locale | undefined | null, forceUpdateFlag = false) {
  if (!locale) {
    locale = defaultLocale
  }
  const value = typeof time !== 'number' ? time.valueOf() : time
  const offset = value - Date.now()

  const seconds = Math.round(Math.abs(offset) / 1000.0)
  if (seconds < 45) {
    return offset < 0 ? locale.secondsAgo(seconds) : locale.inSeconds(seconds)
  }

  const minutes = Math.round(seconds / 60)
  if (minutes <= 1) {
    return offset < 0 ? locale.oneMinuteAgo : locale.inOneMinute
  }
  if (minutes < 60) {
    return offset < 0 ? locale.minutesAgo(minutes) : locale.inMinutes(minutes)
  }

  const hours = Math.round(minutes / 60)
  if (hours <= 1) {
    return offset < 0 ? locale.oneHourAgo : locale.inOneHour
  }
  if (hours < 24) {
    return offset < 0 ? locale.hoursAgo(hours) : locale.inHours(hours)
  }

  const days = Math.round(hours / 24)
  if (days <= 1) {
    return offset < 0 ? locale.oneDayAgo : locale.inOneDay
  }
  if (days < 30) {
    return offset < 0 ? locale.daysAgo(days) : locale.inDays(days)
  }

  const months = Math.round(days / 30)
  if (months <= 1) {
    return offset < 0 ? locale.oneMonthAgo : locale.inOneMonth
  }
  if (months < 12) {
    return offset < 0 ? locale.monthsAgo(months) : locale.inMonths(months)
  }

  const years = Math.round(days / 365)
  if (years <= 1) {
    return offset < 0 ? locale.oneYearAgo : locale.inOneYear
  }
  return offset < 0 ? locale.yearsAgo(years) : locale.inYears(years)
}

/**
 * @public
 */
export function format(time: Date | number) {
  const date = typeof time !== 'number' ? time : new Date(time)
  return date.toLocaleString()
}
