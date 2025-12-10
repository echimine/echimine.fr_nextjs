export type CategoryEntity = {
    id: string;
    title: string;
    slug: string;
    vignette?: string;
}
export type CreateCategoryDto = Partial<CategoryEntity>;
export type UpdateCategoryDto = Partial<Omit<CategoryEntity, 'id' | 'slug'>>;
