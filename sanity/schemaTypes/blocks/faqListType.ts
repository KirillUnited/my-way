import { MessageCircleQuestionIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const faqListType = defineType({
    name: "faqList",
    title: "FAQs",
    type: "object",
    icon: MessageCircleQuestionIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [{ type: "reference", to: [{ type: "faq" }] }],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title,
                subtitle: "FAQs",
            };
        },
    },
});