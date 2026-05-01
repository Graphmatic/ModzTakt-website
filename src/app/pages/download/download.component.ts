import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { GithubReleaseService } from '../../services/github-release.service';

@Component({
  standalone: true,
  selector: 'app-download',
  imports: [AsyncPipe, DatePipe, DecimalPipe],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css',
})
export class DownloadComponent {
  private readonly releasesService = inject(GithubReleaseService);
  releases$ = this.releasesService.getReleases();
  repositoryUrl = 'https://github.com/Graphmatic/ModzTakt-VST-Standalone/releases';
}
