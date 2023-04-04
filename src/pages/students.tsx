import Loading from "@/components/Loading/Loading";
import { useStudentList } from "@/hooks/useStudentList";
function Students() {
    // const { data, size, setSize } = useSWRInfinite(
    //     getKey,
    //     studentsServices.getAll,
    //     {
    //         revalidateFirstPage: false,

    //     }
    // );
    const { data, size, setSize, newData, isLoading } = useStudentList();
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 10);
    if (!data) return <Loading />
    let totalUsers = 0;
    for (let i = 0; i < data.length; i++) {
        totalUsers += data[i].length;
    }
    return (
        <div>
            <p className="text-red-500 mb-5 text-5xl">{totalUsers} users listed</p>
            <div className="space-y-4">
                {data.map((users) => {
                    return users.map((user) => (
                        <div className="p-4 rounded-lg border border-solid border-slate-200" key={user.id}>
                            <h6 className="text-xl font-mono font-thin">Name: {user.name}</h6>
                            <h6 className="text-xl font-mono font-thin">Email: {user.email}</h6>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={user.avatar} className="w-20 h-20" alt={user.name} />
                        </div>
                    ));
                })}
            </div>
            <button
                disabled={isLoadingMore || isReachingEnd}
                onClick={() => setSize(size + 1)}>
                {   
                    isLoadingMore
                    ? "loading..."
                    : isReachingEnd
                    ? "no more issues"
                    : "load more"
                }
            </button>
        </div>
        //     <div>
        //     <p style={{
        //         fontSize: '24px',
        //         color: 'red',
        //         marginBottom: '16px'
        //     }}>{totalUsers} users listed</p>
        //     {data.map((users) => {
        //         return users.map((user) => (
        //             <div key={user.id}>{user.name}</div>
        //         ));
        //     })}
        //     <button onClick={() => setSize(size + 1)}>Load More</button>
        // </div>
    );
}

export default Students;
