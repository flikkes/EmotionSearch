import { Component, OnInit } from '@angular/core';
import { EmotionService } from 'src/app/emotion-service.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  public items: Array<any> = new Array<any>(0);

  constructor(private emotionService: EmotionService) { }

  ngOnInit(): void {
  }

  onKey(event) {
    const value = event.target.value;
    this.emotionService.findEmotionsByAlias(value).subscribe((result: any) => {
      this.items = result.hits.hits.map((hit) => {
        return hit._source;
      });
    });

  }

}
