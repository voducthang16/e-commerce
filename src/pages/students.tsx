import { studentsServices } from "@/services/features/student.services";
import useSWRInfinite from "swr/infinite";

const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return {
        url: "https://6400042d29deaba5cb2e6d91.mockapi.io/students",
        payload: {
            page: pageIndex + 1,
            limit: 10,
        },
    };
};

function Students() {
    const { data, size, setSize } = useSWRInfinite(
        getKey,
        studentsServices.getAll
    );
    if (!data) return "loading";
    let totalUsers = 0;
    for (let i = 0; i < data.length; i++) {
        totalUsers += data[i].length;
    }
    return (
        <div>
            <p>{totalUsers} users listed</p>
            {data.map((users, index) => {
                return users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ));
            })}
            <button onClick={() => setSize(size + 1)}>Load More</button>
        </div>
    );
}

export default Students;
