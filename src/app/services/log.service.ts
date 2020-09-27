import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  getDateTimeStr() {
    return '[' + new Date().toLocaleString() + ']';
  }

  logBy(type = 'info', ...args: any[]) {
    console[type] && console[type](this.getDateTimeStr(), ...args);
  }

  track(...args: any[]) {
    if (typeof args[0] === 'function') {
      // arg1: callback, arg2: label
      let _args = args.length > 1 ? [args[1], args[0]] : [args[1]];
      this.group(..._args);
    } else {
      this.info(...args);
    }
  }

  log(...args: any[]) {
    this.logBy('log', ...args);
  }

  info(...args: any[]) {
    this.logBy('info', ...args);
  }

  warn(...args: any[]) {
    this.logBy('warn', ...args);
  }

  error(...args: any[]) {
    this.logBy('error', ...args);
  }

  group(label = 'start', callback = () => {}) {
    if (typeof label === 'function') {
      callback = label;
      label = 'start'
    }
    this.logBy('group', label);
    callback();
    this.logBy('groupEnd');
  }
}
