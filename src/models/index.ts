export interface IHttpRequest<T = any> {
    url?: string;
    payload?: T;
    headers?: {
        [key: string]: string | number;
    };
    filter?: {
        [key: string]: string | number;
    } | string;
}

export interface IBaseSearch {
    offset: number;
    page: number;
}