import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const NEW_HOME = "https://muthususpensionworks.com";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muthu Suspension Works - Expert Car Suspension Services" },
      {
        name: "description",
        content:
          "Fixing Suspension Problems the Right Way — For Over 25 Years. Specialized suspension repair and shock absorber reconditioning — honest work.",
      },
      {
        property: "og:title",
        content: "Muthu Suspension Works - Expert Car Suspension Services",
      },
      {
        property: "og:description",
        content:
          "Fixing Suspension Problems the Right Way — For Over 25 Years. Specialized suspension repair and shock absorber reconditioning — honest work.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace(NEW_HOME);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <div className="max-w-md space-y-6">
        <p className="text-lg font-medium text-white sm:text-xl">
          Muthu Suspension Works has moved! Redirecting you to our new home...
        </p>

        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        </div>

        <a
          href={NEW_HOME}
          className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
}

