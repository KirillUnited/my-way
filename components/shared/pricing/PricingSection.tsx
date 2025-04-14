'use client'

import { Button, ButtonGroup } from '@heroui/button'
import { Card, CardBody, CardHeader } from '@heroui/card'
import clsx from 'clsx'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

const frequencies = [
  { value: 'monthly', label: 'На месяц', priceSuffix: '/На месяц' },
  { value: 'annually', label: 'На год', priceSuffix: '/На год' },
]
const tiers = [
  {
    name: 'Пакет XL',
    id: 'tier-xl',
    href: '#',
    price: { monthly: '$19', annually: '$199' },
    description: 'Максимальный пакет услуг для комплексного ухода за телом с профессиональным подходом и гарантированным результатом.',
    features: ['ноги полностью', 'руки полностью', 'подмышки', 'глубокое бикини', 'линия живота'],
    mostPopular: false,
  },
  {
    name: 'Пакет L',
    id: 'tier-l',
    href: '#',
    price: { monthly: '$17', annually: '$179' },
    description: 'Комплексный пакет для полного ухода за телом с максимальным комфортом и эффективностью.',
    features: ['ноги полностью', 'руки полностью', 'подмышки', 'глубокое бикини', 'линия живота'],
    mostPopular: true,
  },
  {
    name: 'Пакет M',
    id: 'tier-M',
    href: '#',
    price: { monthly: '$12', annually: '$172' },
    description: 'Оптимальный пакет услуг для эффективного ухода за телом с профессиональным подходом и отличными результатами.',
    features: ['ноги полностью', 'руки полностью', 'подмышки', 'глубокое бикини', 'линия живота'],
    mostPopular: false,
  },
  {
    name: 'Пакет S',
    id: 'tier-S',
    href: '#',
    price: { monthly: '$89', annually: '$890' },
    description: 'Пакет услуг для эффективного ухода за телом с профессиональным подходом и гарантированным результатом.',
    features: ['ноги полностью', 'руки полностью', 'подмышки', 'глубокое бикини', 'линия живота'],
    mostPopular: false,
  }
]

export default function PricingSection() {
  const [frequency, setFrequency] = useState(frequencies[0])

  // Display frequency selection controls
  const handleFrequencyChange = (newFrequency: typeof frequencies[0]) => {
    setFrequency(newFrequency)
  }

  const frequencyControls = (
    <ButtonGroup radius='none' className='w-full mt-10'>
      {frequencies.map((freq) => (
        <Button
          key={freq.value}
          onPress={() => handleFrequencyChange(freq)}
          color={`${frequency.value === freq.value
            ? 'primary'
            : 'default'
            }`}
        >
          {freq.label}
        </Button>
      ))}
    </ButtonGroup>
  )

  return (
    <section id='pricing' className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-base/7 font-semibold text-primary-600">Инвестиция в гладкость и комфорт вашей кожи</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-balance lg:text-5xl text-foreground-900">
            Доступные цены на лазерную эпиляцию
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center font-medium text-pretty text-foreground-800">
          Выберите зону, оформите запись и наслаждайтесь долгосрочным результатом без лишних затрат.
        </p>
        {frequencyControls}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <Card
              radius='none'
              key={tier.id}
              className={clsx(
                tier.mostPopular ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200',
              )}
            >
              <CardHeader className='flex-col gap-3 items-stretch'>
                <h3
                  id={tier.id}
                  className={clsx(
                    tier.mostPopular ? 'text-primary font-bold text-2xl/8' : 'text-foreground-900 font-semibold text-lg/8',
                  )}
                >
                  {tier.name}
                </h3>
                <p className="text-sm/6 text-foreground-600">{tier.description}</p>
              </CardHeader>
              <CardBody className='gap-4'>
                <p className=" flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-foreground-900">
                    {tier?.price[frequency.value as keyof typeof tier.price] || '$0'}
                  </span>
                  <span className="text-sm/6 font-semibold text-foreground-600">{frequency.priceSuffix}</span>
                </p>
                <Button
                  aria-describedby={tier.id}
                  color={tier.mostPopular
                    ? 'primary'
                    : 'secondary'}
                  className='uppercase font-semibold'
                  radius='none'
                >
                  Заказать
                </Button>
                <ul className="mt-4 space-y-3 text-sm/6 text-foreground-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <>
                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        <span>{feature}</span>
                      </>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
