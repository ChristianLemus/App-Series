import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShowResult } from 'src/app/core/models/show-results.interface';
import { Show } from '../../core/models/show.interface';
import { ShowsService } from '../../shared/services/shows.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  showList: Show[] = [];
  searched = '';
  searchSubscription: Subscription;
  text: string;

  constructor(
    private searchService: ShowsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['gener'] !== undefined) {
        this.text = params['gener'];
        this.search(this.text);
      } else {
        console.log('error');
      }
    });

  }

  private search(text: string) {
    this.searched = text;
    this.searchSubscription = this.searchService
      .searchSerie(text)
      .pipe(finalize(() => {
        if (this.searchSubscription) {
          this.searchSubscription.unsubscribe();
        }
      }))
      .subscribe(
        (results: ShowResult[]) => {
          if (results.length > 0) {
          }
          this.showList = results.map(
            (result: ShowResult) => result.show
          );
        },
        (error: string) => {
          console.error(error);
        }
      );
  }

}
