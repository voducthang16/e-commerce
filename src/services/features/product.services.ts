import { IBaseSearch, IHttpRequest } from "@/models";
import httpRequest from "../core/httpRequest"

export interface IProduct {
    name: string;
    price: string;
    image: string;
    id: string;
    categoryId: string;
}

export const productServices = {
    getAll({ headers }: IHttpRequest) {
        return httpRequest.get<IProduct[]>({
            url: 'https://6422524c86992901b2c5c2de.mockapi.io/category/1/product',
            headers
        });
    },
}