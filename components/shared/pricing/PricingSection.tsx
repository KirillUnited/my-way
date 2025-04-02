'use client'

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

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Инвестиция в гладкость и комфорт вашей кожи</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Доступные цены на лазерную эпиляцию
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          В центре My Way мы предлагаем прозрачные и честные цены на лазерную эпиляцию. Выберите зону, оформите запись и наслаждайтесь долгосрочным результатом без лишних затрат. Сделайте первый шаг к идеальной коже уже сегодня!
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8',
              )}
            >
              <h3
                id={tier.id}
                className={clsx(
                  tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                  'text-lg/8 font-semibold',
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier?.price[frequency.value as keyof typeof tier.price] || '$0'}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={clsx(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Заказать
              </a>
              <ul className="mt-8 space-y-3 text-sm/6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <>
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>{feature}</span>
                    </>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
