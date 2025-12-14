import {NextResponse} from 'next/server';
import {Injector} from "../../../../../core/injectore";
import {DeleteCategoryUseCase} from "../../../../../features/categories/domain/usecases/delete-category-usecase";

/*export const GET = async (
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) => {
    const id = await params;

    const usecase = new GetByIdUseCase(Injector.projectRepository());
    const result = await usecase.call(parseInt(id.id, 10));
    return NextResponse.json({
        message: `Project getting by id`,
        data: result,
    });
};*/

/*export const PUT = async (
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) => {
    const idParam = await params;
    const id = parseInt(idParam.id, 10);

    const formData = await request.formData();

    const body = {
        name: formData.get('name')?.toString() ?? '',
        description: formData.get('description')?.toString() ?? '',
        logoFile: formData.get('logo') as File | null,
        project_id_revenuecat:
            formData.get('project_id_revenuecat')?.toString() ?? '',
        revenuecat_api_key: formData.get('revenuecat_api_key')?.toString() ?? '',
    };


    const usecase = new HandleUpdateProjectUseCase(Injector.projectRepository());
    const result = await usecase.call(body, id);
    return NextResponse.json({message: `Project updated`, data: result});
};*/

export const DELETE = async (
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) => {
    const id = await params;

    const usecase = new DeleteCategoryUseCase(Injector.categoryRepository());

    const result = await usecase.call(id.id);

    return NextResponse.json({message: `Category deleted`, data: result});
};