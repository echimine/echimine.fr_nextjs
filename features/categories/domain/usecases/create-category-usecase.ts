import {CategoryRepository} from "../repositories/category-repository";
import {CreateCategoryDto} from "../entities/categorie-entity";

export class CreateCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) {
    }

    call(data: CreateCategoryDto) {
        return this.categoryRepository.create(data)
    }
}