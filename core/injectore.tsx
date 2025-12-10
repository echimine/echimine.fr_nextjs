import {CategoryRepository} from "../features/categories/domain/repositories/category-repository";
import {SupabaseCategoryRepository} from "../features/categories/infra/repositories/supabase-category-repository";

export class Injector {
    static categoryRepository(): CategoryRepository {
        return new SupabaseCategoryRepository(
        )
    }
}