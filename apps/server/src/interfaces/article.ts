export default interface Article {
    id: number;
    attributes: {
      title: string;
      description: string;
      content: string;
      image:string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }