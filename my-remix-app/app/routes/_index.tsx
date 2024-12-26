import type { MetaFunction } from "@remix-run/node";
import * as Icons from "../../components/icons";
import { StyleAttributes, Props } from "../../types/types";
export const meta: MetaFunction = () => {
  return [
    { title: "Slack Clone" },
    { name: "description", content: "Growling to Slack!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col overflow-hidden">
      {" "}
      <div className="flex h-10 items-center bg-purple-900 pr-2">
        <div className="w-[70px] min-w-12 max-[895px]:w-12"></div>
        <div className="flex w-[24.3%] min-w-44 justify-end px-3">
          {" "}
          <TopNavButton className="mr-2">
            <Icons.LeftArrow />
          </TopNavButton>
          <TopNavButton className="mr-2">
            <Icons.RightArrow />
          </TopNavButton>
          <TopNavButton>
            <Icons.Clock />
          </TopNavButton>
        </div>
        <div className="flex w-[75.7%]">
          {" "}
          <button className="flex h-7 w-[65%] items-center justify-end rounded bg-purple-650 px-2 text-white">
            <Icons.HoverGlass className="h-[15px]" />
          </button>
          <div className="flex w-[35%] flex-grow-[0.3] justify-end">
            <TopNavButton>
              <Icons.QuestionMark />
            </TopNavButton>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-40px)] w-[100vw] overflow-hidden bg-purple-900">
        <div className="flex flex-col items-center justify-start pb-6 pt-2 max-[895px]:w-12 min-[895px]:min-w-[70px]">
          <div className="mb-[18px] flex h-9 w-9 items-center justify-center rounded-lg bg-lightGray text-xl font-bold uppercase text-lightBlack">
            rv
          </div>
          <div className="flex h-[68px] w-[52px] flex-col items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-650 text-xl font-bold uppercase text-white">
              <Icons.House className="h-5 w-5" />
            </div>
            <span className="mt-[1.5px] text-[11px] font-bold tracking-tighter text-white">
              Home
            </span>
          </div>
          <div className="flex h-[68px] w-[52px] flex-col items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xl font-bold uppercase text-white">
              <Icons.Chat className="h-5 w-5" />
            </div>
            <span className="mt-[1.5px] text-[11px] font-bold tracking-tighter text-white">
              DMs
            </span>
          </div>
          <div className="flex h-[68px] w-[52px] flex-col items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xl font-bold uppercase text-white">
              <Icons.Bell className="h-5 w-5" />
            </div>
            <span className="mt-[1.5px] text-[11px] font-bold tracking-tighter text-white">
              Activity
            </span>
          </div>
          <div className="flex h-[68px] w-[52px] flex-col items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xl font-bold uppercase text-white">
              <Icons.Play className="h-5 w-5" />
            </div>
            <span className="mt-[1.5px] text-[11px] font-bold tracking-tighter text-white">
              Automa...
            </span>
          </div>
          <div className="flex h-[68px] w-[52px] flex-col items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xl font-bold uppercase text-white">
              <Icons.Dots className="h-5 w-5" />
            </div>
            <span className="mt-[1.5px] text-[11px] font-bold tracking-tighter text-white">
              More
            </span>
          </div>
          <div className="mt-auto flex h-9 w-9 items-center justify-center rounded-full bg-purple-650 text-xl font-bold uppercase text-purple-100">
            <Icons.Plus className="h-5 w-5" />
          </div>
          <div className="mt-[19.5px] flex w-[100%] justify-center">
            <img
              src="/profile.png"
              alt="profile "
              className="h-9 w-9 rounded-md"
            ></img>
          </div>
        </div>

        <div className="h-100% w-[24.3%] min-w-44 overflow-hidden rounded-l-md bg-purple-800">
          <div className="flex h-[49px] w-[100%] items-center pl-3 pr-4">
            <button className="min-w[135px] flex h-[30px] w-[70%] max-w-[252px] px-2 py-[3px] text-white">
              <span className="w-[calc(100% -18px)]  truncate text-lg/6 font-bold tracking-tight [font-strech:100%]">
                RavTech Venn Introduction
              </span>
            
              <Icons.Fold className="mt-[3px] h-[18px] w-[18px]" />
            </button>
            <div className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-xl text-purple-300">
              <Icons.ThreeLines className="h-5 w-5" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xl font-bold uppercase text-purple-300">
              <Icons.Pencil className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="mb-1 mr-1 w-[75.7%] rounded-r-md bg-white py-2"></div>
      </div>
    </div>
  );
}

export const TopNavButton = ({
  className,
  children,
}: StyleAttributes & Props) => {
  return (
    <button
      className={`h-[26px] w-[26px] rounded-md p-[3px] text-white hover:bg-purple-650 ${className}`}
    >
      {children}
    </button>
  );
};
