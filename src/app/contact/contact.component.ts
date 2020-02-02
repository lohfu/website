import { Component, OnInit } from '@angular/core';
import { MatIconService } from '@services/mat-icon.service';
import { SeoService, SeoTags } from '@services/seo.service';
import { CONTACT_FACEBOOK, CONTACT_GITHUB, CONTACT_LINKEDIN, CONTACT_MAIL, CONTACT_REDDIT, CONTACT_TWITCH, CONTACT_TWITTER, CONTACT_YOUTUBE, DISCORD_SERVER_URL } from '@util/constants';
import { ContactMethod, IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: 'Got questions, concerns or business inquires?',
    subheader: 'Contact me through one of these sources',
    text: ['Or fill in the form below to send an email']
  };
  public contactMethods: ContactMethod[] = [
    { logo: 'mat-mail-icon', link: CONTACT_MAIL, color: 'mail', contact: 'send an email' },
    { logo: 'mat-github-icon', link: CONTACT_GITHUB, color: 'github', contact: 'find me on github' },
    { logo: 'mat-linkedin-icon', link: CONTACT_LINKEDIN, color: 'linkedin', contact: 'connect on linkedin' },
    { logo: 'mat-discord-icon', link: DISCORD_SERVER_URL, color: 'discord', contact: 'join discord server' },
    { logo: 'mat-twitter-icon', link: CONTACT_TWITTER, color: 'twitter', contact: 'follow me on twitter' },
    { logo: 'mat-facebook-icon', link: CONTACT_FACEBOOK, color: 'facebook', contact: 'send a message on facebook' },
    { logo: 'mat-reddit-icon', link: CONTACT_REDDIT, color: 'reddit', contact: 'send a message on reddit' },
    { logo: 'mat-twitch-icon', link: CONTACT_TWITCH, color: 'twitch', contact: 'watch my twitch streams' },
    { logo: 'mat-youtube-icon', link: CONTACT_YOUTUBE, color: 'youtube', contact: 'subscribe to me on youtube' }
  ];
  public metadata: SeoTags = {
    title: 'Favware Contact',
    description: 'Have questions, support requests or just want to get in contact with Favware? Go here!',
    image: 'https://favware.tech/assets/icons/contact.png',
    imageAlt: 'Fancy Embedded Image',
    url: '/contact',
    summary: oneLine`Eager to get in contact with me? Be sure to visit this page!`,
    keywords: ['contact', 'email', 'github', 'youtube', 'facebook', 'twitch', 'twitter', 'linkedin', 'discord', 'reddit']
  };

  constructor(private matIconService: MatIconService, private seo: SeoService) {
    this.matIconService.init();
  }

  public ngOnInit(): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords
    });
  }
}
