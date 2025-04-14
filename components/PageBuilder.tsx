import { HeroSection } from "@/components/shared/hero";
import { FeaturesSection } from "@/components/shared/feature";
import { SplitImage } from "@/components/shared/sections";
import { FAQs } from "@/components/shared/faq";
import { PAGE_QUERYResult } from "@/sanity/types";
import { PricingSection } from "./shared/pricing";
import { AppointmentSection } from "./shared/appointment";

type PageBuilderProps = {
    content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
    if (!Array.isArray(content)) {
        return null;
    }

    return (
        <main>
            {content.map((block) => {
                switch (block._type) {
                    case "hero":
                        return <HeroSection key={block._key} {...block} />;
                    case "servicePackageList":
                        return <PricingSection key={block._key} {...block} />;
                    case "featureList":
                        return <FeaturesSection key={block._key} {...block} />;
                    case "splitImage":
                        return <SplitImage key={block._key} {...block} />;
                    case "faqList":
                        return <FAQs key={block._key} {...block} />;
                    default:
                        // This is a fallback for when we don't have a block type
                        return <div key={String((block as any)._type)}>Block not found: {String((block as any)._type)}</div>;
                }
            })}
            {
                <AppointmentSection />
            }
        </main>
    );
}