import { FcServices } from "react-icons/fc";
import { defineField, defineType } from "sanity";

export const serviceListType = defineType({
    name: "serviceList",
    title: "Услуги",
    type: "object",
    icon: FcServices,
    fieldsets: [
        { name: 'heading', title: 'Заголовок блока', description: 'Название, подзаголовок и описание', options: { collapsible: true, collapsed: true } },
    ],
    fields: [
        defineField({
            name: 'isActive',
            title: 'Показывать на странице',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: "title",
            title: "Название",
            type: "string",
            initialValue: "Популярные услуги",
            fieldset: 'heading'
        }),
        defineField({
            name: "subtitle",
            title: "Подзаголовок",
            type: "string",
            initialValue: "наши услуги печати",
            fieldset: 'heading'
        }),
        defineField({
            name: "description",
            title: "Описание",
            type: "text",
            initialValue: "Услуги наших специалистов гарантируют качество и кратчайшие сроки работы",
            fieldset: 'heading'
        }),
        defineField({
            name: "services",
            title: "Список услуг",
            description: "Выберите элементы, которые будут отображаться в блоке",
            type: "array",
            of: [{ type: "reference", to: [{ type: "service" }] }],
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "services.0.image",
        },
        prepare({ title, media }) {
            return {
                title,
                subtitle: "Блок со списком услуг",
                media: media ?? FcServices,
            };
        },
    },
});