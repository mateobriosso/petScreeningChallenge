import PageURLs from '../utils/pageUrls';

export function buildUrl(page: string) {
  const url = PageURLs[page];

  return url;
}