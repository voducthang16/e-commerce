import Layout from "@/layouts";
import { Carousel, Image } from "antd";
import Link from "next/link";
import { useProductList } from "@/hooks/useProductList";
import Loading from "@/components/Loading/Loading";
import HeaderSEO from "@/components/Head/HeadSEO";
import { IBaseSearch } from "@/models";
import { IProduct } from "@/services/features/product.services";
export default function Home() {
    const categories = [
        {
            id: 1,
            title: "smartphones",
        },
        {
            id: 2,
            title: "laptops",
        },
        {
            id: 3,
            title: "fragrances",
        },
        {
            id: 4,
            title: "skincare",
        },
        {
            id: 5,
            title: "groceries",
        },
    ];
    const { data, error, isLoading } = useProductList();
    if (error) return <div>Failed to load</div>;
    return (
        <>
            <HeaderSEO title="E Commerce TEST 123" />
            <Layout>
                <main className={"container mx-auto"}>
                    <Carousel autoplay className="mt-6">
                        <div className="h-72">
                            <Image
                                alt="image"
                                src="/1.jpg"
                                className="object-contain"
                                preview={false}
                            />
                        </div>
                        <div className="h-72">
                            <Image
                                alt="image"
                                src="/2.jpg"
                                className="object-contain"
                                preview={false}
                            />
                        </div>
                    </Carousel>
                    <div className="mt-5">
                        <ul className="flex justify-between">
                            {categories.map((item) => (
                                <li
                                    className="list-none text-xl capitalize"
                                    key={item.id}
                                >
                                    <Link
                                        className="no-underline"
                                        href={`category/${item.title}`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {isLoading ? <Loading /> : <></>}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {data?.map((item) => (
                            <Link
                                href={`/product/${item.id}`}
                                className="col-span-1 border border-solid border-slate-200 rounded-lg text-gray-800 no-underline p-4"
                                key={item.id}
                            >
                                <div className="flex justify-center">
                                    <Image
                                        alt="image"
                                        src={item.image}
                                        className="max-w-[250px] min-h-[250px] max-h-[250px] object-contain mb-4"
                                        preview={false}
                                    />
                                </div>
                                <h5 className="font-mono text-2xl font-normal">
                                    {item.name}
                                </h5>
                                <h6 className="font-serif text-lg font-normal">
                                    {item.price}$
                                </h6>
                            </Link>
                        ))}
                    </div>
                </main>
            </Layout>
        </>
    );
}

// export async function getStaticProps() {
//     const response = await fetch("https://dummyjson.com/products?limit=1");
//     const data = await response.json();

//     return {
//         props: {
//             data,
//         },
//     };
// }

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/login",
//                 permanent: false,
//             },
//         };
//     }

//     const response = await fetch("https://dummyjson.com/products?limit=8");
//     const data = await response.json();
//     return {
//         props: {
//             data,
//         },
//     };
// }
