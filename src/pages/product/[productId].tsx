import Layout from "@/layouts";
import { Image, Rate } from "antd";
import Head from "next/head";
function ProductDetail({ data }) {
    return (
        <>
            <Head>
                <title>{data!.title}</title>
            </Head>
            <Layout>
                <div className="container mx-auto mt-10">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 flex justify-center">
                            <Image
                                alt="image"
                                src={data!.thumbnail}
                                className="w-full object-contain"
                                preview={false}
                            />
                        </div>
                        <div className="col-span-1 space-y-4">
                            <div className="flex justify-between">
                                <h5 className="font-mono text-2xl font-normal">Name: {data!.title}</h5>
                                <span className="block">
                                    Rating: <Rate allowHalf defaultValue={data!.rating} />
                                </span>
                            </div>
                            <h6 className="font-serif text-lg font-normal">Price: {data!.price}$</h6>
                            <p>Description: {data!.description}</p>
                            <h6 className="font-source-sans-pro text-lg font-normal">Stock: {data!.stock}</h6>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default ProductDetail;

// export async function getStaticProps(context) {
//     const { params } = context;
//     const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
//     const data = await response.json();
//     return {
//         props: {
//             data,
//         },
//     };
// }

// export async function getStaticPaths() {
//     const response = await fetch(`https://dummyjson.com/products?limit=1`);
//     const data = await response.json();
//     const paths = data!.products.map((product) => {
//         return {
//             params: { productId: `${product.id}` },
//         };
//     });

//     return {
//         paths: paths,
//         fallback: true,
//     };
// }

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}
