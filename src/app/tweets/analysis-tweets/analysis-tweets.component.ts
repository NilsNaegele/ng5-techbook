import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { Http } from '@angular/http';

import { TweetHttpService } from './../tweet-http.service';
import { NgProgress } from 'ngx-progressbar';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-analysis-tweets',
  templateUrl: './analysis-tweets.component.html',
  styleUrls: ['./analysis-tweets.component.css']
})
export class AnalysisTweetsComponent implements OnInit {

  chartVisible = false;
  chartOptions= {
    responsive: true
  };

  public chartData: any[] = [
    { data: [], label: 'Negative' },
    { data: [], label: 'Positive' }
  ];

  chartLabels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ];

  public doughnutChartLabels: string[] = ['Negative', 'Positive', 'Neutral'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  data: any;
  account: string;
  tmp: string;
  positive = 0;
  negative = 0;
  neutral = 0;

  constructor(private tweetHttpService: TweetHttpService,
              private ngProgress: NgProgress ) { }

  ngOnInit() {}

  onChartClick(event) {
    console.log(event);
  }

  onKey(value: string) {
    console.log('get tweets', value);
  }

  onSubmit(account: string) {
    if (!account) { return; }
    this.ngProgress.start();
    this.tweetHttpService.getAllTweets(account).toPromise()
                         .then((response) => {
                          this.data = response;
                          this.account = 'nilsnagele';
                          this.positive = 0;
                          this.negative = 0;
                          this.neutral = 0;
                          this.setDataForChart(this.data);
                          this.chartVisible = true;
                          this.ngProgress.done();
                         },
                        (error) => console.log(error));
    }

  private setDataForChart(tweets) {
    const clone = JSON.parse(JSON.stringify(this.chartData));
    const dataPositive = [];
    const dataNegative = [];
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].sentiment.comparative > 0) {
        dataPositive[i] = tweets[i].sentiment.comparative;
        dataNegative[i] = 0;
      } else {
        dataNegative[i] = tweets[i].sentiment.comparative;
        dataPositive[i] = 0;
      }
      this.setCountSentimentalTweets(tweets[i].sentiment.comparative);
    }
    clone[0].data = dataNegative;
    clone[1].data = dataPositive;

    this.chartData = clone;
  }

  private setDataLabel(tweets) {
    const clone: Array<any> = [];
    for (let i = 0; i < tweets.length; i++) {
      clone[i] = tweets[i].date;
    }
    this.chartLabels = clone;
  }

  private setCountSentimentalTweets(tweet) {
    const clone = [];
    if (tweet > 0) {
      this.positive++;
    }
    if (tweet < 0) {
      this.negative++;
    }
    if (tweet === 0) {
      this.neutral++;
    }
    clone[0] = this.negative;
    clone[1] = this.positive;
    clone[2] = this.neutral;
    this.doughnutChartData = clone;
  }


}
