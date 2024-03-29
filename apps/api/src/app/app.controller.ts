import { Controller, Get } from '@nestjs/common';

import { Message } from '@omniflix/api-interfaces';
import { MediaRow } from '@omniflix/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
  @Get('movies/dashboard-items')
  getDashboardItems(): MediaRow[] {
    return [
      {
        title: 'In Progress',
        items: [
          {
            id: '197361db-15ef-4a39-9273-12d81feedaa5',
            type: 'movie',
            title: 'Once Upon a Time in Hollywood',
            subtitle: '2019',
            fanart: true,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'b8902b8c-4a70-432b-b817-908e687296c1',
            type: 'tv-show',
            title: 'Silicon Valley',
            subtitle: 'Season 10 Episode 10',
            fanart: false,
            watched: false,
            progressPercent: 40
          },
          {
            id: '49181eb6-e1f0-4ab9-ab4a-f2cbd87e3591',
            type: 'movie',
            title: 'Avengers: Endgame',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'a7639dc8-2d4a-486d-a893-7aafe1f48937',
            type: 'movie',
            title: 'Ford v Ferrari',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'c2b2689c-5c2b-4914-9230-1fdf70562134',
            type: 'tv-episode',
            title: 'The Mandalorian',
            subtitle: 'Season 10 Episode 10',
            fanart: false,
            watched: false,
            progressPercent: 0
          }
        ]
      },
      {
        title: 'Because You Watched Iron Man',
        items: [
          {
            id: "4254a325-efe3-413b-8313-9145138595b7",
            type: "movie",
            title: "Iron Man 2",
            subtitle: "2010",
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: "c19d08f7-0432-452c-b23a-e84210c9c845",
            type: "movie",
            title: "Iron Man 3",
            subtitle: "2013",
            fanart: false,
            watched: false,
            progressPercent: 0
          }
        ]
      },
      {
        title: "Trending Titles",
        items: [
          {
            id: '99a4458b-e8a0-4fea-b2d0-aa3c0ae7dc03',
            type: 'movie',
            title: 'Ad Astra',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'bf67d889-a3cb-48b0-96e7-12b59bf01c56',
            type: 'movie',
            title: 'The Irishman',
            subtitle: '2019',
            fanart: false,
            watched: true,
            progressPercent: 0
          },
          {
            id: '0abb45be-8627-4fab-88e2-cbc926e75721',
            type: 'movie',
            title: 'Ready Player One',
            subtitle: '2018',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '197361db-15ef-4a39-9273-12d81feedaa5',
            type: 'movie',
            title: 'Once Upon a Time in Hollywood',
            subtitle: '2019',
            fanart: true,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'e0068020-fee1-4cad-b386-a3ac180f5a72',
            type: 'movie',
            title: 'Rambo: Last Blood',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '15fb8762-2b8e-4954-9d4f-0c7e3b75c448',
            type: 'movie',
            title: 'It Chapter Two',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '9e9b0cdf-b1ac-4e44-8eb1-f2fe8237290a',
            type: 'movie',
            title: 'Angel Has Fallen',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'd5f5f2ea-8aa8-4bf9-935a-3e3fa6bb3c47',
            type: 'movie',
            title: 'Abominable',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '1f017a06-36d9-4ea0-a2a6-5d741d028500',
            type: 'movie',
            title: 'Joker',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '907a2141-2558-4331-bb01-f0f2188fe87e',
            type: 'movie',
            title: 'Gemini Man',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '55c02722-f41b-4005-b6f4-b5d7982152e3',
            type: 'movie',
            title: 'Shazam',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: '5288c5d4-2669-4dee-8bcc-2ce9038d1759',
            type: 'movie',
            title: 'Fast & Furious Presents: Hobbs & Shaw',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          },
          {
            id: 'df5a7bd3-8112-4426-b838-4a5122d54c56',
            type: 'movie',
            title: 'Ready or Not',
            subtitle: '2019',
            fanart: false,
            watched: false,
            progressPercent: 0
          }
        ]
      }
    ];
  }
}
