import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col">
        <div className=" bg-purple-900 h-10 "></div>
        <div className="flex w-[100vw] h-[calc(100vh-40px)] bg-purple-900 ">
          <div className="w-[70px] min-w-12"></div>
          <div className="min-w-44 bg-purple-800 h-100% rounded-l-md flex-grow-[0.24]"  ></div>
          <div className="bg-white mr-1 mb-1 rounded-r-md flex-grow-1 flex-grow-[0.76]">
          </div>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
