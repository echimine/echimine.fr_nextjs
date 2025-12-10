import {CategoryEntity, CreateCategoryDto, UpdateCategoryDto} from "../entities/categorie-entity";

export interface CategoryRepository {
    create(category: CreateCategoryDto): Promise<CategoryEntity>;

    update(category: UpdateCategoryDto): Promise<boolean>;

    delete(categoryId: string): Promise<boolean>;

    get(): Promise<CategoryEntity[]>;
}