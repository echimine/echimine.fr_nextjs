import {CategoryRepository} from "../repositories/category-repository";

export class DeleteCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) {
    }

    call(categoryId: string) {
        return this.categoryRepository.delete(categoryId)
    }
}