import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModztaktComponent } from './pages/modztakt/modztakt.component';
import { DownloadComponent } from './pages/download/download.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modztakt', component: ModztaktComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: '**', redirectTo: '' },
];