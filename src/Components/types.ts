interface Book {
    volumeInfo: {
      id: string;
      title?: string ;
      description?: string | undefined;
      publisher?: string  | undefined;
      publishedDate?: string  | undefined;
      authors?: string[]  | undefined;
      categories?: string[] | undefined;
      previewLink?: string  | undefined;
      imageLinks?: {
        smallThumbnail?: string  | undefined;
        thumbnail?: string  | undefined;
      };
    };
  }

  export default Book;