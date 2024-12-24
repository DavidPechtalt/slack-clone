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
      <div className=" bg-purple-900 h-10 flex items-center pr-2  ">
        <div className="w-[70px] min-w-12  max-[895px]:w-12"></div>
        <div className=" min-w-44 flex  w-[24.3%]   justify-end px-3">
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
          <button className=" h-7 bg-purple-650 rounded flex items-center justify-end px-2 w-[65%]  text-white ">
            <Icons.HoverGlass className="h-[15px]" />
          </button>
          <div className="flex justify-end flex-grow-[0.3] w-[35%]">
            <TopNavButton>
              <Icons.QuestionMark />
            </TopNavButton>
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] h-[calc(100vh-40px)] bg-purple-900 overflow-hidden ">
        <div className="w-[70px] min-w-12  max-[895px]:w-12"></div>
        <div className="min-w-44 bg-purple-800 h-100% rounded-l-md w-[24.3%]"></div>
        <div className="bg-white mr-1 mb-1 rounded-r-md w-[75.7%]"></div>
      </div>
    </div>
  );
}

export const TopNavButton = ({ className, children }: StyleAttributes & Props) => {
  return (
    <button
      className={`h-[26px] w-[26px] p-[3px] hover:bg-purple-650 rounded-md  text-white ${className}`}
    >
      {children}
    </button>
  );
};
