import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxLoggerService {

  logsEnabled = false;

  constructor(
    @Inject('env') private env: any,
  ) {
    this.logsEnabled = !this.env.production;
  }

  /**
   * Log if not in production
   * @param message - Message
   * @param args - Variables to be printed in log
   */
  log(message: string, ...args: Array<any>): void {
    if (this.logsEnabled) {
      console.log(message, args);
    }
  }

  /**
   * Warn if not in production
   * @param message - Message
   * @param args - Variables to be printed in log
   */
  warn(message: string, ...args: Array<any>): void {
    if (this.logsEnabled) {
      console.warn(message, args);
    }
  }

  /**
   * Print error if not in production
   * @param message - Message
   * @param args - Variables to be printed in log
   */
  error(message: string, ...args: Array<any>): void {
    if (this.logsEnabled) {
      console.error(message, args);
    }
  }
}
