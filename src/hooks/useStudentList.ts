import { IStudent, studentsServices } from "@/services/features/student.services";
import { useCustomInfinite } from "./useCustomInfinite";

const getKey = (pageIndex: number, previousPageData: IStudent[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return {
        payload: {
            page: pageIndex + 1,
            limit: 10,
        },
    };
};

export const useStudentList = () => {
    return useCustomInfinite(getKey, studentsServices.getAll, {
        revalidateFirstPage: false
    })
}