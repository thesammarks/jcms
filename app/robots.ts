import config from "@/config";
import {MetadataRoute} from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/home"],
            disallow: [""]
        },
        sitemap: [`${config.BASE_URL}/sitemap.xml`]
    };
}
