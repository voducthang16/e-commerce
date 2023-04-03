import Header from "./header";

function Layout({ children }) {
    return (
        <>
            {/* {statusLoading ? <Loading /> : <></>} */}
            <Header />
            {children}
            {/* <Footer /> */}
        </>
    );
}

export default Layout;
