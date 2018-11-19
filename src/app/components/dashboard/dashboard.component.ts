import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../../services/incidents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  incidentsData: any;
  incidentTypeList: any[] = [];
  regionList = [];
  constructor(private incidentService: IncidentsService) { }

  clearFunction() {
    this.incidentService.getIncidents()
      .subscribe(incidentsData => {
        this.incidentTypeList = [];
        this.regionList = Object.keys(incidentsData.incidentsRegionWise);
        for (let incidentType in incidentsData.incidentTypes) {
          this.incidentTypeList.push({
            key: incidentType,
            y: incidentsData.incidentTypes[incidentType]
          });
        }
        console.log(this.incidentTypeList)
        this.incidentsData = incidentsData;
      }
      )
  }

  legendClick(selectedIncidentType: string) {
    console.log(selectedIncidentType)
    this.incidentService.getFilteredIncidents()
      .subscribe(incidentsData => {
        this.incidentTypeList = [];
        this.regionList = Object.keys(incidentsData.incidentsRegionWise);
        for (let incidentType in incidentsData.incidentTypes) {
          this.incidentTypeList.push({
            key: incidentType,
            y: incidentsData.incidentTypes[incidentType]
          });
        }
        console.log(this.incidentTypeList)
        this.incidentsData = incidentsData;
      }
      )
  }

  ngOnInit() {
    this.incidentService.getIncidents()
      .subscribe(incidentsData => {
        this.regionList = Object.keys(incidentsData.incidentsRegionWise);
        for (let incidentType in incidentsData.incidentTypes) {
          this.incidentTypeList.push({
            key: incidentType,
            y: incidentsData.incidentTypes[incidentType]
          });
        }
        console.log(this.incidentTypeList)
        this.incidentsData = incidentsData;
      }
      )
  }

}
