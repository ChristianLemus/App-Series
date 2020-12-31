import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../../core/models/show.interface';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent  {

  @Input() show: Show;
  @Output() onClicked = new EventEmitter<Show>();
}
