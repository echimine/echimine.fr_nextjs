import {CategoryRepository} from "../repositories/category-repository";

export class GetCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) {}
    call() {
        return this.categoryRepository.get()
    }
}