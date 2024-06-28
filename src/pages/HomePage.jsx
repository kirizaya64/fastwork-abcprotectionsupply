import React from 'react'
import Banner from '../components/Banner'
import ProductsHight from '../components/ProductsHight'

// react icons
import { FaFacebookF, FaYoutube, FaLine } from 'react-icons/fa'
import DialogBtn from '../components/DialogBtn'

import { customLeft, customRight } from '../data/logoDB'

const HomePage = () => {
    return (
        <section>
            {/* Banner Section */}
            <div className="bg-background">
                <Banner />
            </div>

            {/* Product highlights Section */}
            <div className="mt-10">
                <h2 className="text-3xl text-center font-bold">สินค้าไฮไลท์</h2>
                <ProductsHight />
            </div>
            
            <DialogBtn  />

            <div className="overflow-hidden">
                <div className="whitespace-nowrap">
                    <div className="inline-block animate-marqueeRight">
                        {/* loop ข้อมูลออกมา เพื่อแสดงหน้าเว็บไซต์ */}
                        {customLeft.map((logoRight, logo) => (
                            <div className="inline-block animate-marquee" key={logo}>
                                <img src={logoRight.src} alt={logoRight.alt} width={logoRight.width} height={logoRight.height} className="mx-4 inline-block h-1/6" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="whitespace-nowrap mt-4">
                    <div className="inline-block animate-marqueeLeft">
                        {/* loop ข้อมูลออกมา เพื่อแสดงหน้าเว็บไซต์ */}
                        {customRight.map((logoLeft, logo) => (
                            <div className="inline-block animate-marquee" key={logo}>
                                <img src={logoLeft.src} alt={logoLeft.alt} width={logoLeft.width} height={logoLeft.height} className="mx-4 inline-block h-1/6" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage