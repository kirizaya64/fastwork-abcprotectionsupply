import React, { useState } from 'react'
import Swal from 'sweetalert2';

// react icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLine } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        company: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { company, firstName, lastName, phone, email, message } =formData;

        if (!company || !firstName || !lastName || !phone || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'ไม่สามารถส่งข้อมูลได้',
                text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง!',
            });
            return;
        }

        try {
            // ส่งข้อมูลผ่าน Fetch API ไปยัง API ของ Formspree
            const response = await fetch('https://formspree.io/f/xdoqrkye', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // mode: 'no-cors',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire(
                    'ส่งข้อมูลสำเร็จ!',
                    'ระบบจะส่งข้อมูลไปให้ทางอีเมลล์ภายใน 1-2 วัน.',
                    'success'
                );
                setFormData({
                    company: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    message: '',
                });
            } else {
                Swal.fire(
                    'ส่งข้อมูลไม่สำเร็จ!',
                    'ไม่สามารถส่งข้อมูลได้ โปรดรอ 1-2 นาที เพื่อส่งใหม่อีกครั้ง.',
                    'warning'
                );
            }
        } catch (error) {
            console.error('An error occurred:', error);
            Swal.fire(
                'ส่งข้อมูลล้มเหลว!',
                'โปรดติดต่อผู้ดูแลเว็บไซต์ทันที.',
                'error'
            );
        }
    };

    return (
        <section className="min-h-screen bg-gray-100 p-8 pt-28">
            <h2 className="text-center text-4xl md:text-5xl font-bold my-3">ติดต่อเรา</h2>

            <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="md:flex">

                    {/* แบบฟอร์มขอใบเสนอราคา */}
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-6">กรอกแบบฟอร์มเพื่อขอใบเสนอราคา</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="company" className="block text-gray-700">ชื่อบริษัท <span className="text-red-500 font-bold">ถ้าไม่มีให้ใส่เป็นชื่อบุคลล</span></label>
                                <input type="text" name="company" id="company" autoComplete="organization" value={formData.company} onChange={handleChange} className="inputContact" />
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="firstName" className="block text-gray-700">ชื่อ <span className="text-red-500">*</span></label>
                                    <input type="text" name="firstName" id="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} className="inputContact" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="lastName" className="block text-gray-700">นามสกุล <span className="text-red-500">*</span></label>
                                    <input type="text" name="lastName" id="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} className="inputContact" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700">เบอร์โทรศัพท์มือถือ <span className="text-red-500">*</span></label>
                                <input type="phone" name="phone" id="phone" autoComplete="phone" value={formData.phone} onChange={handleChange} className="inputContact" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">อีเมลล์ <span className="text-red-500">*</span></label>
                                <input type="email" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} className="inputContact" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700">สินค้าที่ต้องการและจำนวนสินค้า <span className="text-red-500 font-bold">ถ้าแจ้งรหัสสินค้าจะได้รับใบเสนอราคาเร็วขึ้น</span></label>
                                <textarea name="message" id="message" rows="4" cols="50" value={formData.message} onChange={handleChange} className="inputContact"></textarea>
                            </div>

                            <button type="submit" className="w-full p-2 bg-black hover:bg-red-500 text-white rounded mt-4">
                                ขอใบเสนอราคา
                            </button>
                        </form>
                    </div>

                    {/* ข้อมูลต่างๆของบริษัท */}
                    <div className="md:w-1/2 p-8 bg-gray-50">
                        <h2 className="text-2xl font-bold mb-6">บริษัทของเรา</h2>
                        <p className="text-gray-700 mb-4">รายละเอียดเกี่ยวกับบริษัทของเรา</p>
                        <p className="text-gray-700 mb-4">ที่อยู่: 219/623 ถ.บางกรวย-ไทรน้อย ต.พิมลราช อ.บางบัวทอง จ.นนทบุรี</p>
                        <p className="text-gray-700 mb-4">เบอร์โทร: 083-986-8558</p>
                        <p className="text-gray-700 mb-4">Fax: 029-209-731</p>
                        <p className="text-gray-700 mb-4">อีเมล: a.b.c.765protectionsupply@gmail.com</p>
                        <p className="text-gray-700">เวลาทำการ: วันจันทร์ - วันเสาร์ เวลา: 09:00 - 17:00 หยุดทุกวันอาทิตย์</p>

                        <div className="mt-10">
                            <h3 className="text-xl font-bold mb-2">ช่องทางโซเซียลมีเดีย</h3>
                            
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/profile.php?id=100090972997816" target="_blank" className="text-blue-500 hover:text-blue-300">
                                    <FaFacebookF size={30} />
                                </a>
                                <a href="https://line.me/R/ti/p/@424zlrnf?ts=05311443&oat_content=url" target="_blank" className="text-green-500 hover:text-green-300">
                                    <FaLine size={30} />
                                </a>
                                <a href="mailto:abc765protectionsupply@gmail.com" className="text-black hover:text-gray-500">
                                    <IoIosMail size={30} />
                                </a>
                                <a href="tel:083-986-8558" className="text-black hover:text-gray-500">
                                    <FaPhoneAlt size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage