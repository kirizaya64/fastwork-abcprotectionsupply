import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

// data priduct
import { product } from '../data/product'

const DialogBtn = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button type="button" className="px-4 py-2 text-white bg-primary hover:bg-primary/80 rounded-md" onClick={() => setOpen(true)}>
                รายละเอียดสินค้า
            </button>

            <Dialog className="relative z-10" open={open} onClose={() => setOpen(false)}>
                <DialogBackdrop transition className="DialogBackdrop" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                        <DialogPanel transition className="DialogPanel">
                            {product.map((products, index) => {
                                return (
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8" key={index}>
                                        {/* ปุ่มปิดหน้าต่าง Dialog */}
                                        <button type="button" className="buttonClose" onClick={() => setOpen(false)}>
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                                <img src={products.imageSrc} alt={products.imageAlt} />
                                            </div>

                                            {/* ข้อมูลต่างๆของสินค้า */}
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{products.name}</h2>
                                                <p className="text-2xl text-gray-900">{products.price}</p>

                                                <section aria-labelledby="information-heading" className="mt-2">
                                                    {/* รหัสสินค้า */}
                                                    <div className="mt-2">
                                                        <div className="flex items-center">
                                                            <p className="font-medium text-gray-900">รหัสสินค้า : {products.productCode}</p>
                                                        </div>
                                                    </div>
                                                    {/* ลิสข้อมูลต่างๆ */}
                                                    <ul className="mt-4">
                                                        <div className="flex">
                                                            <span className="mr-4"><strong>ชนิด:</strong> {products.type}</span>
                                                            <span><strong>ขนาด:</strong> {products.sizeProduct}</span>
                                                        </div>
                                                        <div className="flex flex-col md:flex-col lg:flex-row mt-2">
                                                            <span className="mr-2"><strong>น้ำหนักเคมี:</strong> {products.weightChemical}</span>
                                                            <span className="mr-2"><strong>น้ำหนักถัง:</strong> {products.weightTank}</span>
                                                            <span><strong>น้ำหนักรวม:</strong> {products.weightAll}</span>
                                                        </div>
                                                        <div className="flex flex-col md:flex-col lg:flex-row mt-2">
                                                            <span className="mr-2"><strong>ความสูง:</strong> {products.heightProduct}</span>
                                                            <span className="mr-2"><strong>เส้นผ่านศูนย์กลาง:</strong> {products.diameterProduct}</span>
                                                            <span><strong>แรงขับดัน:</strong> {products.thrustProduct}</span>
                                                        </div>
                                                        <div className="mt-2">
                                                            <span><strong>แรงดันใช้งานปกติ:</strong> {products.thingProduct}</span>
                                                        </div>
                                                        <div className="mt-2">
                                                            <span><strong>ระยะเวลาฉีดใช้:</strong> {products.periodProduct}</span>
                                                        </div>
                                                        <div className="mt-2">
                                                            <span><strong>ความสามารถในการดับไฟ:</strong> {products.abilityProdcut}</span>
                                                        </div>
                                                    </ul>
                                                </section>
                                                {/* ข้อมูลเกี่ยวกับการรับประกัน */}
                                                <section aria-labelledby="warranty-heading" className="mt-5">
                                                    <h3 id="warranty-heading" className="text-lg font-medium text-gray-900">การรับประกัน</h3>
                                                    <p className="text-base text-gray-500">
                                                        {products.warrantyProduct}
                                                    </p>
                                                </section>

                                                <button type="button" className="buttonSale">
                                                    ติดต่อซื้อสินค้า
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default DialogBtn