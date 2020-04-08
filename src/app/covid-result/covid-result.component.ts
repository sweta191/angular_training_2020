import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-covid-result',
  templateUrl: './covid-result.component.html',
  styleUrls: ['./covid-result.component.css']
})
export class CovidResultComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }
  flag;
  country_flag;
  country_name;
  infected_people_no;
  no_recovered;
  gotoHome() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.fetchPost();
  }

  route_var = this.route.snapshot.params['country'];

  fetchPost() {
    this.http
      .get('https://corona.lmao.ninja/countries/' + this.route_var)

      .subscribe(responseData => {
        this.country_name = Object.values(responseData)[0];
        this.infected_people_no = Object.values(responseData)[8];
        this.no_recovered = Object.values(responseData)[7];
        this.country_flag = Object.values(Object.values(responseData)[1])[1];
        this.flag = this.country_flag.toLowerCase();
      });
  }
}
