export interface BaseType {
  mediaType?: string;
  contentType?: string;
  favicons?: string[];
  url: string;
  error?: any;
}

export interface HTMLResponse extends BaseType {
  title: string;
  siteName: string;
  description: string;
  images: string[];
  videos: string[];
  contentType: `text/html${string}`;
}
