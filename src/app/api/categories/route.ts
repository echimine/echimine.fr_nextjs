import {NextResponse} from 'next/server';
import {CreateCategoryUseCase} from "../../../../features/categories/domain/usecases/create-category-usecase";
import {Injector} from "../../../../core/injectore";
import {GetCategoryUseCase} from "../../../../features/categories/domain/usecases/get-categry-usecase";

export const GET = async () => {
    const usecase = new GetCategoryUseCase(Injector.categoryRepository());

    const result = await usecase.call();
    return NextResponse.json({message: 'Categorie getting', data: result});
};

export const POST = async (request: Request) => {
    const formData = await request.formData();
    const body = {
        title: formData.get('title')?.toString() ?? '',
        slug: formData.get('slug')?.toString() ?? '',
        /*vignette: formData.get('vignette') as File | null,*/
    };

    const usecase = new CreateCategoryUseCase(Injector.categoryRepository());
    const project = await usecase.call(body);

    /*if (body.vignette) {
        const logoFormData = new FormData();
        logoFormData.append('logo', body.vignette);

        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/logo`, {
            method: 'POST',
            body: logoFormData,
        });
    }*/

    return NextResponse.json({message: 'Category created', data: project});
};