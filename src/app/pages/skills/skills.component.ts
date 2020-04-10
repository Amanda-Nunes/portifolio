import { Component, OnInit, NgZone } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';
import { Skill } from 'src/app/shared/models/skill';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";


import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  private chart: am4charts.XYChart;

  constructor(private templateService: TemplateService, private zone: NgZone) {
    this.skills = [];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.getSkills();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  getSkills() {
    this.templateService.getCategoriasCatalogo().subscribe((data: Skill[]) => {
      this.skills = data;
    },
      err => console.log('HTTP Error', err),
      () => this.createTagCloud()
    );
  }

  createTagCloud() {
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    series.data = this.skills;
    series.dataFields.word = "title";
    series.dataFields.value = 'level';

    series.heatRules.push({
      "target": series.labels.template,
      "property": "fill",
      "min": am4core.color("#0000CC"),
      "max": am4core.color("#CC00CC"),
      "dataField": "value"
    });
    chart.logo.opacity = 0;
    let hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#FF0000");

  }

}
