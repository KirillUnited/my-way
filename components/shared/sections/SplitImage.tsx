import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import { stegaClean } from "next-sanity";
import { Button } from "@heroui/button";

type SplitImageProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "splitImage" }
>;

export function SplitImage({ title, image, orientation }: SplitImageProps) {
    return (
        <section className="relative">
            <div className="container flex flex-col sm:flex-row items-center gap-8 py-16 sm:data-[orientation='imageRight']:flex-row-reverse"
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
                <div className="sm:w-1/2 flex flex-col gap-6">
                    <div className="self-start px-3 py-1 text-sm/6 text-foreground-600 ring-1 ring-foreground/10 hover:ring-foreground/20">
                        О нас
                    </div>
                    {title ? (
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-pretty max-w-3xl text-white">
                            <span className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">{title}</span>
                        </h2>
                    ) : null}
                    <p className="text-foreground-600 text-pretty">
                        Первый центр лазерной эпиляции с технологией Ice-Cool и системой 3D-сканирования кожи. Сделайте первый шаг к <strong>идеальной коже</strong> уже сегодня!
                    </p>
                    <Button
                        color="primary"
                        className="self-start mt-4 uppercase font-semibold"
                        size="md"
                        radius="none">
                        Записаться
                    </Button>
                </div>
            </div>
        </section>
    );
}