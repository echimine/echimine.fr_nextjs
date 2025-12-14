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
        const client = await this.getAdminClient()
        const query = client
            .from('categories').delete()
        const {error} = await query;

        if (error)
            throw new Error(`error when getting into database: ${error.message}`);

        return true;
    }

    async delete(categoryId: string): Promise<boolean> {
        const clientSupabase = await this.getAdminClient();
        const {data: project, error: fetchError} = await clientSupabase
            .from('categories')
            .select('id')
            .eq('id', categoryId)
            .single();

        if (fetchError) throw fetchError;
        if (!project) throw new Error(`Project with id=${categoryId} not found`);

        const {error: deleteError} = await clientSupabase
            .from('categories')
            .delete()
            .eq('id', categoryId);

        if (deleteError) throw deleteError;

        return true;
    }

    getAdminClient() {
        return createAdminClient()
    }
}