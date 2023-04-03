import { IHttpRequest } from "@/models";
import instance from "./instance";
import { AxiosResponse } from "axios";

const get = <Type>({ url, payload, headers }: IHttpRequest) => {
    return instance.get<Type, AxiosResponse<Type>>(url!, {
        params: payload,
        headers,
    }).then(res => res.data)
};

const httpRequest = {
    get,
};

export default httpRequest;
