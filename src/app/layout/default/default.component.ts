import { Component, OnInit } from '@angular/core';
import { AppearanceService } from '@data/service/appearance.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less'],
})
export class DefaultLayoutComponent implements OnInit {
  isReady = true;

  constructor(public appearanceService: AppearanceService) {}

  ngOnInit(): void {
    this.appearanceService.setupTheme();
    this.appearanceService.setupToolbar();
  }
}
