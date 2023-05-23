interface Book {
    volumeInfo: {
      title?: string;
      description: string;
      publisher: string;
      publishedDate: string;
      authors?: string[];
      previewLink: string;
      imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
      };
    };
  }

  export default Book;