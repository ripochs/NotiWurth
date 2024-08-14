export interface IBanner {
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface IBrochure {
    id: number;
    title?: string;
    image: string;
    link: string;
    textButton?: string;
  }