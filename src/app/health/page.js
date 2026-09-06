'use client';
import Item from "../item/page";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Health(){

    const [news, setNews] = useState([]);

        useEffect(() => {
            fetch('/api4/healthapi')
            .then((res) => res.json())
            .then((data) => {
                if (data.articles) {
                    setNews(data.articles);
                }
            })
            .catch(err => console.log("Error:", err));
        }, []);

    // We used index because Whenever you use .map() to render a list of components in React, you must provide a unique key prop to the top-level element being returned. This helps React identify which items have changed, been added, or been removed efficiently.
    const outputItems = news?.map((singleItem, index) => {
        return(
            <Item
            key = {index} // Pass 'index' as the key prop
            title = {singleItem.title}
            image = {singleItem.image}
            author = {singleItem.source?.name}
            publishedAt = {singleItem.publishedAt}
            content = {singleItem.content}
            description = {singleItem.description}
            />
        )
    })

    return(
        <>
        <Navbar/>

        <div className="m container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="m1">HEALTH</div>
                </div>
            </div>
        </div>

        <section className="bg-secondary-subtle py-5">
            <div className="container">
                <div className="row gx-4 gy-4">{outputItems}</div>
            </div>
        </section>

        <div className="footer mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className='me-logos'>
                        <div className='logo1' style={{fontFamily: 'Blinker, sans-serif'}}>
                        A
                        </div>
                        <div className='logo1' style={{fontFamily: 'Blinker, sans-serif'}}>
                        A
                        </div>
                        <div className='logo1' style={{fontFamily: 'Blinker, sans-serif'}}>
                        C
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="logos">
                    <div className="logos1 mt-5" style={{fontFamily: 'Blinker, sans-serif'}}>
                        FOLLOW US ON
                    </div>
                    <div className="logos2 mt-3">
                        <Image src="/logo/logo1.svg" alt="" width={25} height={25} />
                        <Image src="/logo/logo2.svg" alt="" width={25} height={25} />
                    </div>
                    <div className="logos3 mt-4 d-flex gap-4" style={{fontFamily: 'Figtree, sans-serif'}}>
                        <div className="logos4">
                            Terms of Use
                        </div>
                        <div className="logos4">
                            Subscription Terms
                        </div>
                        <div className="logos4">
                            About the AAC
                        </div>
                        <div className="logos4">
                            Privacy Policy
                        </div>
                        <div className="logos4">
                            Cookies
                        </div>
                        <div className="logos4">
                            Contact the AAC by social media
                        </div>
                        <div className="logos4">
                            Content Index
                        </div>
                        <div className="logos4">
                            AAC.com Help & FAQs
                        </div>
                    </div>

                    <div className="copyright mt-4" style={{fontFamily: 'Gruppo, sans-serif'}}>
                        <p>&copy; Copyright 2026 AAC. All Rights Reserved. The AAC is not responsible for the content of external sites.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}