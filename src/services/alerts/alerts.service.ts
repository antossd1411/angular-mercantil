import { Injectable } from '@angular/core';

type Alert = {
  variant?: string | undefined;
  message: string | string[];
};

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private variant = "success";
  private message: string[] = [];

  constructor() { }

  setAlert(alert: Alert) {
    if (alert.variant) {
      this.variant = alert.variant;
    }

    if (typeof alert.message == "string") {
      this.message = [alert.message];
    } else {
      this.message = [...alert.message];
    }
  }

  getVariant() {
    return this.variant;
  }

  getMessage() {
    return this.message;
  }

  existsMessage() {
    return this.message.length > 0;
  }

  clear() {
    this.message = [];
  }
}
