import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShowDetailedInfo } from '../../core/models/show.interface';
import { ShowsService } from '../../shared/services/shows.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  show = new ShowDetailedInfo();
  error: any;
  medium: any;

  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.showService.getShow(id).subscribe(show => this.show = show);
      } else {
        this.show = new ShowDetailedInfo();
      }
    });
  }

  public strip(html: string) {
    return html ? html.replace(/<.*?>/g, '') : '';
  }
}
