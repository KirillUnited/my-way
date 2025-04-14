'use client';

import React from 'react';
import { Tab, Tabs } from '@heroui/tabs';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Button } from '@heroui/button';

const cities = [
    { name: 'Valencia', description: 'Carrer d\'Amadeu de Savoia, 21, El Pla del Real, 46010 València, Valencia, Испания', center: { lat: 39.4699, lng: -0.3763 } },
    { name: 'Madrid', description: 'Plaza de Espana, 1, 28013 Madrid', center: { lat: 40.4168, lng: -3.7038 } }
];

const mapContainerStyle = {
    width: '100%',
    height: '400px'
};

export default function AppointmentSection() {
    return (
        <section id='appointment'>
            <div className='container py-16'>
                <div className='text-center mb-12 flex flex-col gap-4'>
                    <span className="self-center px-3 py-1 text-sm/6 text-foreground-600 ring-1 ring-foreground/10 hover:ring-foreground/20">Мы ждём Вас!</span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Get an Appointment in Spain</h2>
                    <p className='text-foregound-600'>Choose your preferred city and schedule your visit</p>
                </div>

                <Tabs variant='underlined' color='primary'>

                    {cities.map((city) => (
                        <Tab key={city.name} title={city.name}>
                            <Card className='grid md:grid-cols-2' radius='none'>
                                <CardBody className='gap-4'>
                                    <h3 className='text-2xl font-semibold'>{city.name} Location</h3>
                                    <p className='text-foreground-500'>{city.description}</p>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <a href="tel:+34643942528" className="text-primary hover:underline">+34 643 942 528</a>
                                    </div>
                                    <footer className='flex gap-4 mt-auto border-t-1 border-foreground-200 pt-4'>
                                        <Button color='primary' radius='none'>
                                            Get an Appointment
                                        </Button>
                                        <Button radius='none'>
                                            Select Different City
                                        </Button>
                                    </footer>
                                </CardBody>

                                <div className='overflow-hidden shadow-md'>
                                    <iframe
                                        title={city.name}
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.8947974395387!2d-0.3611132736078366!3d39.471705312613224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049d8284b7597%3A0xa88e64594982a1f!2sCl%C3%ADnica%20My%20Way!5e0!3m2!1sru!2sam!4v1744663016618!5m2!1sru!2sam`}
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </Card>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
