import React from "react"
import Facecard from "./components/Facecard"
import Info from "./components/Info"
import Footer from "./components/Footer"

export default function App () {
    return(
        <main>
           <Facecard />
           <Info />
           <Footer />
        </main>
    )
}