import { urlFor } from '@/sanity/lib/image';
import { PAGE_QUERYResult } from '@/sanity/types';
import { Button } from '@heroui/button'
import { PortableText } from 'next-sanity';
import Image from 'next/image'
import Link from 'next/link'

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export default function HeroSection({ slogan, title, text, image }: HeroProps) {

  return (
    <section className="relative">
      <div className="relative isolate overflow-hidden after:bg-gradient-to-tr after:from-black after:to-gray-900 after:w-full after:h-full after:block after:inset-0 after:absolute after:-z-0 after:opacity-85">
        {image ? (
          <Image
            priority
            alt=""
            src={urlFor(image).width(1600).height(800).url() || ''}
            className="absolute inset-0 z-0 size-full object-cover"
            width={1600}
            height={800}
          />
        ) : null}
        <div className="relative z-10">
          <div className="container py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative text-center px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                {/* <span className='font-bold'>MY WAY</span> — первый центр лазерной эпиляции с технологией Ice-Cool и системой 3D-сканирования кожи */}
                {slogan ? slogan : null}
              </div>
            </div>
            <article className="text-center max-w-4xl flex flex-col gap-8 mx-auto">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                <span className='bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]'>Лазерная эпиляция</span> — гладкая кожа навсегда!
              </h1>
              {/* <p className="text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                Современная и безопасная лазерная эпиляция для удаления нежелательных волос на любом участке тела. Запишитесь на сеанс и забудьте о бритье и раздражении!
              </p> */}
              {text ? <div className='text-pretty text-lg font-medium text-gray-400 sm:text-xl/8'><PortableText value={text} /></div> : null}
              <footer className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                as={Link}
                  href="/#appointment"
                  className='uppercase font-semibold'
                  color='primary'
                  size='md'
                  radius='none'
                >
                  записаться
                </Button>
                <Link href="/#pricing" className="text-sm/6 font-semibold text-white">
                  Узнать больше <span aria-hidden="true">→</span>
                </Link>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
