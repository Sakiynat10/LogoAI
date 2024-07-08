import Footer from "@/components/footer";
import Header from "@/components/header";
import { Fragment } from "react";

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
