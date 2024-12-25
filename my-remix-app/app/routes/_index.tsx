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
          <button className="bg-purple-650 flex h-7 w-[65%] items-center justify-end rounded px-2 text-white">
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
        <div className="w-[70px] min-w-12 max-[895px]:w-12"></div>
        <div className="h-100% w-[24.3%] min-w-44 rounded-l-md bg-purple-800"></div>
        <div className="mb-1 mr-1 w-[75.7%] rounded-r-md bg-white"></div>
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
      className={`hover:bg-purple-650 h-[26px] w-[26px] rounded-md p-[3px] text-white ${className}`}
    >
      {children}
    </button>
  );
};
