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
    getAll({payload}: IHttpRequest) {
        return httpRequest.get<IStudent[]>({
            url: 'https://6400042d29deaba5cb2e6d91.mockapi.io/students',
            payload: {
                page: 1,
                limit: 10
            }
        });
    },
}