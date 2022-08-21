import { NextPage } from "next";
import { Hello } from "../components/OlaMundo";


import React from "react";
import Head from "next/head";

const Pagina: React.FC = () => {
return(
    <div>
        <Head>
            <title>
                    Primeira_Pagina
            </title>
        </Head>
    <main>
        <div>
            <Hello texto='Hello World'/>
        </div>
    </main>
    </div>

    )
}
export default Pagina;