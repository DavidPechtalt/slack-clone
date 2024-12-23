import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Slack Clone" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
  <div ></div>
  );
}


