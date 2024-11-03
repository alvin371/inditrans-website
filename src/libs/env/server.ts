import { z } from "zod";

// Define the Zod schema for environment variables
const zodEnv = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url().min(1),
  NEXT_PUBLIC_SITEMAP_URL: z.string().url().min(1),
  NEXT_PUBLIC_GOOGLE_TAG_ID: z.string().min(1)
});

// Validate environment variables at runtime
const parsedEnv = zodEnv.safeParse(process.env);

if (!parsedEnv.success) {
  // Flatten and format error messages for readability
  const { fieldErrors } = parsedEnv.error.flatten();
  const errorMessage = Object.entries(fieldErrors)
    .map(([field, errors]) =>
      errors ? `${field}: ${errors.join(", ")}` : field
    )
    .join("\n  ");

  throw new Error(
    `Missing or invalid environment variables:\n  ${errorMessage}`
  );
}

// Export the validated environment variables
export const env = parsedEnv.data;
