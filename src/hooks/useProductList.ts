import { IBaseSearch } from '@/models';
import { useCustomSWR } from './useCustomSWR';
import { IProduct, productServices } from '@/services/features/product.services';
function a({ props }: any): Promise<IProduct[]> {
    let b: IProduct[] = []
    return Promise.resolve(b)
}

export const useProductList = () => {
    return useCustomSWR<IProduct[]>({
        headers: {
            value: 123,
            def: 123213123
        },
        payload: {
            offset: 1,
            page: 1
        }
    }, productServices.getAll({}))
}
