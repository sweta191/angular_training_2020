import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-http-module',
  templateUrl: './http-module.component.html',
  styleUrls: ['./http-module.component.css']
})
export class HttpModuleComponent implements OnInit {
  loadedPost: any = [];
  postsArray = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchPost();
  }
  country_name;
  selectChangeHandler(event) {
    console.log(event.target.value);
    this.country_name = event.target.value;
  }

  gotoPage() {
    this.router.navigate(['/result', this.country_name]);
  }

  onCreatePost(postData: { title: string; content: string }) {
    //Send Http request
    this.http
      .post(
        ' https://angular-training-e3b94.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
    //console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  callme($event) {
    console.log($event.target.value);
  }

  private fetchPost() {
    this.http
      .get('https://corona.lmao.ninja/countries')
      .pipe(
        map(responseData => {
          for (var i = 0; i < Object.keys(responseData).length; i++) {
            this.postsArray.push(responseData[i].country);
          }

          return this.postsArray.sort();
        })
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
