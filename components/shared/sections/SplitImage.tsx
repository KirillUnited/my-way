import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import { stegaClean } from "next-sanity";
import { Button } from "@heroui/button";
import Link from "next/link";

type SplitImageProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "splitImage" }
>;

export function SplitImage({ title, image, orientation }: SplitImageProps) {
    return (
        <section className="relative">
            <div className="container flex flex-col sm:flex-row items-center gap-8 sm:gap-16 py-16 sm:data-[orientation='imageRight']:flex-row-reverse"
                data-orientation={stegaClean(orientation) || "imageLeft"}>
                {image ? (
                    <Image
                        className="shadow-large sm:w-1/2 h-auto"
                        src={urlFor(image).width(800).height(600).url()}
                        width={800}
                        height={600}
                        alt=""
                    />
                ) : null}
                <article className="sm:w-1/2 flex flex-col gap-6">
                    <div className="self-start px-3 py-1 text-sm/6 text-foreground-600 ring-1 ring-foreground/10 hover:ring-foreground/20">
                        О нас
                    </div>
                    {title ? (
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-pretty max-w-3xl text-foreground-800">
                            <span className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] text-white">{title}</span> - первый центр лазерной эпиляции с технологией Ice-Cool и системой 3D-сканирования кожи
                        </h2>
                    ) : null}
                    <p className="text-foreground-600 text-pretty">
                        В центре My Way мы предлагаем прозрачные и честные цены на лазерную эпиляцию. Сделайте первый шаг к <strong>идеальной коже</strong> уже сегодня!
                    </p>
                    <footer className="mt-10 flex items-center gap-x-6">
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
                        <Link href="/#pricing" className="text-sm/6 font-semibold">
                            Узнать цены <span aria-hidden="true">→</span>
                        </Link>
                    </footer>
                </article>
            </div>
        </section>
    );
}