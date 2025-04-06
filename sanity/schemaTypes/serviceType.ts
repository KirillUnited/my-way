import { BrushIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
    name: 'service',
    title: 'Услуга',
    type: 'document',
    icon: BrushIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Название услуги',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Краткое описание',
        }),
        defineField({
            name: 'image',
            title: 'Изображение',
            type: 'image',
        }),
        defineField({
            name: 'price',
            type: 'string',
            title: 'Цена',
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Описание',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})