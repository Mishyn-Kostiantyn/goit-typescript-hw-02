export interface PhotoCard { 
  urls: {
      regular: string;
      small: string;
  };
    alt_description: string;
    id: string;
    
}
export interface ServerResponse{
    total_pages: number;
  results: {
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
    length: number;
  }

  }