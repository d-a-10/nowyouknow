export interface MovieDataType {
  id: number;
  documentId: string;
  title: string;
  violence_rating: number;
  language_rating: number;
  summary: string;
  violence: string;
  language: string;
  inappropriate: string;
  religious_imagery: string;
  year: number;
  rating: string;
  duration: string;
  inappropriate_rating: number;
  drug_usage: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  poster?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      large: {
        hash: string;
        height: number;
        width: number;
        url: string;
        size: number;
      };
      small: {
        hash: string;
        height: number;
        width: number;
        url: string;
        size: number;
      };
      medium: {
        hash: string;
        height: number;
        width: number;
        url: string;
        size: number;
      };
      thumbnail: {
        hash: string;
        height: number;
        width: number;
        url: string;
        size: number;
      };
    };
    hash: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | unknown;
    createdAt: string;
    updatedAt: string;
  };
}

export interface MovieResponseType {
  data: {
    data: MovieDataType[];
    meta: {
      pagination: {
        start: number;
        limit: number;
        total: number;
      };
    };
  };
}

export interface SingleMovieResponseType {
  data: {
    data: MovieDataType;
    meta: {
      pagination: {
        start: number;
        limit: number;
        total: number;
      };
    };
  };
}
