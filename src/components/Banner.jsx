import React from 'react';

// image
import Banner1 from "../assets/images/mock/banner.png";
import Banner2 from "../assets/images/mock/banner2.png";
import Banner3 from "../assets/images/mock/banner3.png";
import BannerMain from "../assets/images/banners/banner_1.jpg";

const Banner = () => {
    const contentSection = [
        {
            Image: Banner1,
            Alt: "Banner 1",
            h1: "Lessons and insights",
            span: "from 8 years",
            p: "Where to grow your business as a photographer: site or social",
            to: "/products"
        },
        {
            Image: Banner2,
            Alt: "Banner2",
            h1: "Learn Design and Illustration",
            span: "in 4 months",
            p: "Where to grow your business as a photographer: site or social media?",
            to: "/products"
        },
        {
            Image: Banner3,
            Alt: "Banner3",
            h1: "Grow Business Fast",
            span: "for free of cost",
            p: "Where to grow your business as a photographer: site or social media?",
            to: "/products"
        }
    ]

    return (
        <div className="container mx-auto pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-2">
            <div className="relative cursor-pointer h-48 sm:h-64 md:h-80 lg:h-96 xl:h-screen overflow-hidden">
                <img src={BannerMain} alt={contentSection.alt} className="w-full h-full object-cover object-center" />
            </div>
        </div>
        // <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
            
        // </div>
    )
}

export default Banner