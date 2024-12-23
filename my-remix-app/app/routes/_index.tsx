import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Slack Clone" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      {" "}
      <div className=" bg-purple-900 h-10 "></div>
      <div className="flex w-[100vw] h-[calc(100vh-40px)] bg-purple-900 overflow-hidden ">
        <div className="w-[70px] min-w-12  max-[895px]:w-12"></div>
        <div className="min-w-44 bg-purple-800 h-100% rounded-l-md flex-grow-[0.24]"></div>
        <div className="bg-white mr-1 mb-1 rounded-r-md flex-grow-[0.76]"></div>
      </div>
    </div>
  );
}
