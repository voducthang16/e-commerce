import { IBaseSearch } from '@/models';
import { useCustomSWR } from './useCustomSWR';
import { IProduct, productServices } from '@/services/features/product.services';
function a({ props }: any): Promise<IProduct[]> {
    let b: IProduct[] = []
    return Promise.resolve(b)
}

function c(): any {

}

export const useProductList = () => {
    return useCustomSWR({
        headers: {
            value: 123,
            def: 123213123
        },
    }, productServices.getAll)
}
