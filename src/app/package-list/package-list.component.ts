import { Component, OnInit } from '@angular/core';
import { PackageListService } from './service/package-list.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html'
})
export class PackageListComponent implements OnInit {
  weatherData: any[] = [];
  constructor(private service: PackageListService) { }

  ngOnInit(): void {
    this.service.packagesList().subscribe(resp => {
      this.weatherData = resp as any[];
      console.log(this.weatherData);
    });
  }



}
