interface Book {
    volumeInfo: {
      id: string;
      title?: string;
      description: string;
      publisher: string;
      publishedDate: string;
      authors?: string[];
      categories: string[];
      previewLink: string;
      imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
      };
    };
  }

  export default Book;