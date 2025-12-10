import {CategoryRepository} from "../../domain/repositories/category-repository";
import {CategoryEntity, CreateCategoryDto, UpdateCategoryDto} from "../../domain/entities/categorie-entity";
import {createAdminClient} from "../../../../vendor/supabase/admin";

export class SupabaseCategoryRepository implements CategoryRepository {
    async get(): Promise<CategoryEntity[]> {
        const client = await this.getAdminClient()
        const query = client
            .from('categories')
            .select()
            .order('id', {ascending: true});
        const {data, error} = await query;
        if (error)
            throw new Error(`error when getting into database: ${error.message}`);
        return data as CategoryEntity[];
    }

    async create(category: CreateCategoryDto): Promise<CategoryEntity> {
        const client = await this.getAdminClient()
        const query = client
            .from('categories')
            .insert(category)
            .select()
            .single();
        const {data, error} = await query;

        if (error)
            throw new Error(`error when getting into database: ${error.message}`);

        return data as CategoryEntity;
    }

    async update(category: UpdateCategoryDto): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(categoryId: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAdminClient() {
        return createAdminClient()
    }
}