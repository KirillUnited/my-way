import { defineType, defineField } from 'sanity'
import { SettingsIcon } from 'lucide-react'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: SettingsIcon,
  fields: [
    defineField({
      name: "homePage",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'The main title of your site'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'A brief description of your site'
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Upload your site logo'
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'string',
              title: 'Navigation Text'
            }),
            defineField({
              name: 'link',
              type: 'string',
              title: 'Navigation Link'
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              title: 'Platform Name'
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL'
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'footer',
      title: 'Footer Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Add footer content using rich text editor'
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
})
