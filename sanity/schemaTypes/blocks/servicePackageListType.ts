import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const servicePackageListType = defineType({
    name: "servicePackageList",
    type: "object",
    icon: PackageIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "servicePackages",
            type: "array",
            of: [{ type: "reference", to: [{ type: "servicePackage" }] }],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title,
                subtitle: "Service Packages",
            };
        },
    },
});