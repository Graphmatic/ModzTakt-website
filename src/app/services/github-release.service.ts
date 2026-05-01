import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, catchError } from 'rxjs';
import { GithubRelease } from '../models/release.model';

@Injectable({ providedIn: 'root' })
export class GithubReleaseService {
  private readonly http = inject(HttpClient);
  private readonly repoApi = 'https://api.github.com/repos/Graphmatic/ModzTakt-VST-Standalone/releases';

  getReleases(): Observable<GithubRelease[]> {
    return this.http.get<GithubRelease[]>(this.repoApi).pipe(
      map((releases) => releases.filter((r) => !r.draft)),
      catchError(() => of([])),
    );
  }
}
