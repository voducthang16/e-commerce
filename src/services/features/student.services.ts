import { IHttpRequest } from "@/models";
import httpRequest from "../core/httpRequest";

export interface IStudent {
    id: string;
    name: string;
    avatar: string;
    email: string;
    age: number;
    hobbies: string[];
    sex: boolean;
    math: string;
    physic: string;
    chemical: string;
    createdAt?: string;
    updatedAt?: string;
}

export const studentsServices = {
    getAll({ url, payload }: IHttpRequest) {
        return httpRequest.get<IStudent[]>({
            url,
            payload
        });
    },
}