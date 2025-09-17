import { Category } from './categories';

export interface Article {
  id: string;
  name: string;
  description: string;
  pathImg: string | null;
  pathVignette: string | null;
  nbrLikes: number;
  nbrViews: number;
  createdAt: string;
  updatedAt: string;
  category: Omit<Category, 'articles'>; // éviter la récursivité infinie
}
