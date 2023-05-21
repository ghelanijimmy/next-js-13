type Query = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

interface SearchResultResponse<T extends SearchItem> {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: { request: Query[]; nextPage: Query[] };
  context: { title: string };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  spelling?: {
    correctedQuery: string;
    htmlCorrectedQuery: string;
  };
  items: T[];
}

type SearchItemPagemap = {
  cse_thumbnail: {
    src: string;
    width: string;
    height: string;
  }[];
  metatags: {
    [key: string]: string;
  }[];
  cse_image: {
    src: string;
  }[];
};

interface WebItemType extends SearchItem {
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: SearchItemPagemap;
}

interface ImageItemType extends SearchItem {
  mime: string;
  fileFormat: string;
  image: {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
  };
}

type SearchItem = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
};

export interface WebSearchResult extends SearchResultResponse<WebItemType> {}

export interface ImageSearchResult
  extends SearchResultResponse<ImageItemType> {}
