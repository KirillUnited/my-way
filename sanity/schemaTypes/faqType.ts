import { MessageCircleQuestionIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const faqType = defineType({
    name: "faq",
    title: "FAQ",
    type: "document",
    icon: MessageCircleQuestionIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "body",
            type: "blockContent",
        }),
    ],
});