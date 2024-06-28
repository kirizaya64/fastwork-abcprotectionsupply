import React from 'react'

// Logo ต่างๆ ของลูกค้าเรา
// import { logos } from '../data/logoDB'

const AboutPage = () => {
    
    return (
        <section className="bg-gray-100 flex flex-col items-center pt-28">
            {/* content company */}
            <div>
                <h2 className="text-3xl font-bold mt-5">เกี่ยวกับเรา</h2>

                <div>
                    <div>
                        <h3></h3>
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div>
            </div>
            
            {/* Logo ลูกค้าของเรา */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
                        ลูกค้าของเรา
                    </h2>

                    {/* {logos.map((logos, index) => {
                        return (
                            <div className="mx-auto mt-20 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5" key={index}>
                                <img className="col-span-1 max-h-12 w-full object-contain" src={logos.src} alt={logos.alt} width={logos.width} height={logos.height} />
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </section>
    )
}

export default AboutPage