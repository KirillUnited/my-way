import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Socials from './ui/socials/Socials'

export default function Footer() {
    return (
        <footer className="bg-content1 ring-1 ring-gray-200">
            <div className="container py-16">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start">
                        <Image src="/images/logo.png" alt="My Way" width={120} height={50} />
                    </div>
                    <Socials />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-8 mt-12 pt-8 border-t border-gray-800">

                    {/* Services Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Услуги</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#about" className="hover:text-primary">О нас</Link></li>
                            <li><Link href="/#pricing" className="hover:text-primary">Цены</Link></li>
                            <li><Link href="/#appointment" className="hover:text-primary">Записаться</Link></li>
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Информация</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="hover:text-primary">Политика конфиденциальности</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                        <ul className="space-y-2">
                            <li>
                                <p className="text-sm text-gray-400">Address:</p>
                                <p>34A Kingston St, Las Vegas NV 98102, USA</p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-400">Mail:</p>
                                <a href="mailto:support@factom.com" className="hover:text-primary">support@factom.com</a>
                            </li>
                            <li>
                                <p className="text-sm text-gray-400">Phone:</p>
                                <a href="tel:+12123456790" className="hover:text-primary">(+1) 212 - 456 - 790</a>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours*/}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-4">Режим работы:</h3>
                        <p className="text-sm text-gray-400">Mon to Fri: 7am - 6pm</p>
                        <p className="text-sm text-gray-400">Sat: 9am - 7pm</p>
                        <p className="text-sm text-gray-400">Sun: 9am - 6pm</p>
                    </div>
                </div>


            </div>
            {/* Copyright */}
            <section className=' bg-black text-white'>
                <div className="container py-6">
                    <div className="text-center text-sm ">
                        <p>© Copyright {new Date().getFullYear()}, My Way</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
