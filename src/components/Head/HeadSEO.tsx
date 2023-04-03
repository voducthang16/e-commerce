import Head from "next/head";

interface IHeaderSEO {
    title: string;
}

function HeaderSEO(props: IHeaderSEO) {
    const { title } = props;
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeaderSEO;
