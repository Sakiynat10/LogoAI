import { Fragment } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function RootLayout({
    children,
}){
    return(
        <Fragment>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </Fragment>
    )
}
