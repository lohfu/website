import { Component, OnInit } from '@angular/core';
import { oneLine } from 'common-tags';

import { AWESOME_ZALGO_GITHUB, AWESOME_ZALGO_YARN, ICodeTile, IPrimaryTile, SeoService } from '../../util';

@Component({
  selector: 'favware-zalgo',
  templateUrl: './zalgo.component.html',
  styleUrls: ['./zalgo.component.scss'],
})
export class ZalgoComponent implements OnInit {

  constructor (private seo: SeoService) {}

  private readonly metadata = {
    title: 'Awesome Zalgo',
    description: 'Unleash and banish the Zalgo Monster!',
    image: 'https://favna.xyz/assets/icons/zalgo.png',
    imageAlt: 'Awezome Zalgo Icon Image',
    url: '/zalgo',
    summary: oneLine`A NodeJS library that can transform any text into standard "zalgo" formatted text,
      as well as banish most common Zalgo. Install it today with "yarn add awesome-zalgo"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'zalgo', 'banish', 'awesome-zalog'],
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Zalgo',
    subheader: 'Unleash and banish the Zalgo Monster!',
    buttons: [
      {
        text: 'yarn add awesome-zalgo',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_ZALGO_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_ZALGO_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/zalgo.js',
  };

  ngOnInit (): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords,
    });
  }
}
