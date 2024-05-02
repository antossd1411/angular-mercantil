import { Component, Input } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  constructor(public alertsService: AlertsService) {}
}
