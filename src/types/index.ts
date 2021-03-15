export interface Author {
  name: string;
  profile_name: string;
  profile_image: string;
  social_medias: string[];
}

export interface Status {
  free: string;
  premium: string;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  image: string;
  total_downloads: number;
  likes: number;
  uploadDate: Date;
  author: Author;
  category: string;
  status: Status;
}

export type SocialMedia = {
  name: string;
  url: string;
  image: string;
};
