import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  resumeUploader: f({
    pdf: { maxFileSize: "8MB" },
  })
    // Set permissions and file types for this FileRoute
    .middleware(() => {
      // This code runs on your server before upload.
      // For public routes, we can return a placeholder object.
      return { user: "guest" };
    })
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for file", file.name);
      console.log("File URL:", file.url);

      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter
