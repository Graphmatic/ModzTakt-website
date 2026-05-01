export interface GithubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

export interface GithubRelease {
  name: string;
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: GithubAsset[];
  prerelease: boolean;
  draft: boolean;
}
