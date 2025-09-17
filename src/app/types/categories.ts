import { Article } from './articles';

export interface Category {
  id: string;
  name: string;
  description: string;
  pathImg: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  articles: Article[];
}

export interface CategoriesApiResponse {
  data: Category[];
}
