import type { MetaFunction } from "@remix-run/node";
import * as Icons from "../../components/icons";
import { StyleAttributes, Props } from "../../types/types";
import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
export const meta: MetaFunction = () => {
  return [
    { title: "Slack Clone" },
    { name: "description", content: "Growling to Slack!" },
  ];
};

export default function Index() {
  const fullConfig = resolveConfig(tailwindConfig);
  const [value, setValue] = useState<number>(176);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const min = 180;
  const handleMouseDown = (event: React.MouseEvent) => {
    const startX = event.clientX;
    const startValue = value;

    const handleDrag = (moveEvent: MouseEvent) => {
      setIsMoving(true);
      const delta = moveEvent.clientX - startX;
      const newValue = Math.min(
        windowWidth * 0.7,
        Math.max(min, startValue + delta),
      );
      setTimeout(() => setValue(newValue), 300);
    };

    const stopDrag = () => {
      setIsMoving(false);
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {" "}
      <div className="flex h-10 items-center bg-purple-900 pr-2">
        <div className="w-12 medium:w-[70px]"></div>
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
      <div
        className="relative flex h-[calc(100vh-40px)] w-[100vw] overflow-hidden bg-purple-900"
        style={{ cursor: `${isMoving ? "col-resize" : ""}` }}
      >
        <div className="flex w-12 min-w-12 flex-col items-center justify-start pb-6 pt-2.5 medium:w-[70px] medium:pt-2">
          <div className="mb-[9px] flex h-6 w-6 items-center justify-center rounded-md bg-lightGray text-[13px] font-bold uppercase text-lightBlack medium:mb-[18px] medium:h-9 medium:w-9 medium:text-xl">
            rv
          </div>
          <LeftNavButton tag="Home" className="bg-purple-650">
            <Icons.House />
          </LeftNavButton>
          <LeftNavButton tag="DMs">
            <Icons.Chat />
          </LeftNavButton>
          <LeftNavButton tag="Activity">
            <Icons.Bell />
          </LeftNavButton>
          <LeftNavButton tag="Automa...">
            <Icons.Play />
          </LeftNavButton>
          <LeftNavButton tag="More">
            <Icons.DotsHor className="hidden medium:block" />
            <Icons.DotsVer className="block medium:hidden" />
          </LeftNavButton>

          <button className="mt-auto flex h-6 w-6 items-center justify-center rounded-full bg-purple-650 text-xl font-bold uppercase text-purple-100 medium:h-9 medium:w-9">
            <Icons.Plus className="h-5 w-5" />
          </button>
          <div className="mt-[19.5px] flex w-[100%] justify-center">
            <button>
              {" "}
              <img
                src="/profile.png"
                alt="profile "
                className="h-6 w-6 rounded-md medium:h-9 medium:w-9"
              ></img>
            </button>
          </div>
        </div>

        <div
          className={`h-100% top-0 flex min-w-44 flex-col overflow-hidden rounded-l-md bg-purple-800`}
          style={{ width: `${value}px` }}
        >
          <div className="flex h-[49px] w-[calc(100%-3px)] items-center pl-3 pr-4">
            <button className="min-w[135px] flex h-[30px] w-[70%] max-w-[252px] px-2 py-[3px] text-white">
              <span className="w-[calc(100% -18px)] truncate text-lg/6 font-bold tracking-tight [font-strech:100%]">
                RavTech Venn Introduction
              </span>

              <Icons.Fold className="mt-[3px] h-[18px] min-h-[18px] w-[18px] min-w-[18px]" />
            </button>
            <div className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-xl text-purple-300">
              <Icons.ThreeLines className="h-5 w-5" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xl font-bold uppercase text-purple-300">
              <Icons.Pencil className="h-5 w-5" />
            </div>
          </div>
          <div className="w-[100%] text-wrap px-4 pb-4 pt-2 text-start text-[15px]/[22px] font-semibold">
            <button className="flex w-[100%] items-center justify-between rounded-lg bg-purple-50 px-2 py-2.5 text-purple-900">
              <div className="flex items-center">
                <Icons.SandClock className="h-5 min-h-5 w-5 min-w-5" />
                <div className="ml-2 text-start tracking-tight">
                  12 days left in trail{" "}
                </div>
              </div>

              <Icons.RightFold className="h-6 min-h-6 w-6 min-w-6" />
            </button>
          </div>
          <div className="w-[100%] flex-grow border-t-[1px] border-purple-850 px-2 pt-3">
            <div className="w-[100%]">
              <button className="h-7 w-[100%] rounded-md pl-4 pr-2.5 text-purple-300 hover:bg-purple-400">
                <div className="flex items-center">
                  <Icons.Talk className="h-5 w-5" />
                  <span className="ml-1">Threads</span>
                </div>
              </button>
            </div>
            <div className="w-[100%]">
              <button className="h-7 w-[100%] rounded-md pl-4 pr-2.5 text-purple-300 hover:bg-purple-400">
                <div className="flex items-center">
                  <Icons.Headphones className="h-5 w-5" />
                  <span className="ml-1">Huddles</span>
                </div>
              </button>
              <button className="h-7 w-[100%] rounded-md pl-4 pr-2.5 text-purple-300 hover:bg-purple-400">
                <div className="flex items-center">
                  <Icons.AirPlane className="h-5 w-5" />
                  <span className="ml-1">Drafts & sent</span>
                </div>
              </button>
            </div>
            <div className="w-[100%]"></div>
          </div>
        </div>

        <div
          className="relative mb-1 mr-1 flex flex-grow flex-col rounded-r-md bg-white"
          style={{ cursor: `${isMoving ? "col-resize" : ""}` }}
        >
          <div className="flex h-[100%] w-[100%]">
            {" "}
            <div
              className="absolute h-[100%] w-[3px] cursor-col-resize transition duration-500 hover:bg-seaBlue"
              onMouseDown={(e) => handleMouseDown(e)}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={windowWidth * 0.7}
              aria-valuenow={value}
              tabIndex={0}
              style={{
                background: `${isMoving ? `${fullConfig.theme.colors.seaBlue}` : ""}`,
              }}
            ></div>
            <div className="h-[100%] flex flex-col   flex-grow">
              <div className="flex h-[49px] min-h-[49px] w-[100%] items-center pl-5 pr-3">
                <div className="flex flex-grow items-center justify-start bg-white">
                  <button className="flex h-[30px] items-center hover:bg-hoverGray">
                    <img
                      src="/profile.png"
                      alt="profile"
                      className="h-6 w-6 rounded-md"
                    ></img>{" "}
                    <span className="ml-2 text-lg/[1.3px] font-bold">
                      Netanel
                    </span>
                  </button>
                </div>
                <div className="flex h-7 w-[102.4px] items-center text-fontGray">
                  <div className="flex h-[27px] w-[58px] items-center overflow-hidden rounded-lg border-[1px] border-borderGray">
                    <button className="h-[26px] w-9 border-[1px] border-r-borderGray px-2 hover:bg-hoverGray">
                      <Icons.Headphones className="h-5 w-5" />
                    </button>
                    <button className="flex h-[26px] items-center hover:bg-hoverGray">
                      <Icons.Fold className="h-5 w-5" />
                    </button>
                  </div>{" "}
                  <button className="ml-2 flex h-[100%] w-7 items-center justify-center rounded-lg hover:bg-hoverGray">
                    <Icons.DotsVer className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex w-[100%] items-center border-b-[1px] pl-4 pr-3">
                <button className="flex h-[38.15px] w-fit items-center rounded-t-lg border-b-[3px] border-purple-700 p-2 hover:bg-hoverGray">
                  <Icons.SamllChat className="h-4 w-4" />
                  <span className="ml-1 text-[13px]/[18.0002px] font-medium">
                    Messages
                  </span>
                </button>
                <button className="ml-1 flex h-[38.15px] w-fit items-center rounded-t-lg p-2 text-fontGray hover:bg-hoverGray">
                  <Icons.FoldedPaper className="h-4 w-4" />
                  <span className="ml-1 text-[13px]/[18.0002px] font-medium">
                    Weekly Sync
                  </span>
                </button>
                <button className="ml-1 flex h-[38.15px] w-fit items-center rounded-t-lg p-2 text-fontGray hover:bg-hoverGray">
                  <Icons.PapersFile className="h-4 w-4" />
                  <span className="ml-1 text-[13px]/[18.0002px] font-medium">
                    Files
                  </span>
                </button>
                <button className="ml-1 flex h-[28.15px] w-fit items-center rounded-full p-2 text-black hover:bg-hoverGray">
                  <Icons.Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-grow overflow-y-scroll">
                <div className=" mt-[22px] h-[120%]  border-t-2 border-borderGray">
                  {" "}
                  <div className="sticky top-[22px] flex h-7  justify-center ">
                    <div className="relative bottom-[14px] h-7 w-fit rounded-3xl border-[1px] pl-4 pr-2 text-[13px]/[27px] font-semibold bg-white">
                      Sunday, December 29th 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export const LeftNavButton = ({
  className,
  children,
  tag,
}: StyleAttributes & Props & { tag: string }) => {
  return (
    <button className="group flex h-11 w-7 flex-col items-center justify-center medium:h-[68px] medium:w-[52px]">
      <div
        className={`duration-322 flex h-7 w-7 items-center justify-center rounded-lg text-xl font-bold uppercase text-white transition-colors delay-300 group-hover:bg-purple-650 medium:h-9 medium:w-9 ${className}`}
      >
        <div className="duration-322 h-5 w-5 transition-all ease-in group-hover:h-[22px] group-hover:w-[22px]">
          {children}
        </div>
      </div>

      <span className="mt-[1.5px] hidden text-[11px] font-bold tracking-tighter text-white medium:flex">
        {tag}
      </span>
    </button>
  );
};
