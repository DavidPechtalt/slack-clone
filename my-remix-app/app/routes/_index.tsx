import type { MetaFunction } from "@remix-run/node";
import * as Icons from "../../components/icons";
import { StyleAttributes, Props } from "../../types/types";
import { useEffect, useState } from "react";
export const meta: MetaFunction = () => {
  return [
    { title: "Slack Clone" },
    { name: "description", content: "Growling to Slack!" },
  ];
};

export default function Index() {
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
        className={`relative flex h-[calc(100vh-40px)] w-[100vw] overflow-hidden bg-purple-900 ${isMoving ? "cursor-col-resize select-none" : ""}`}
      >
        <div className="flex w-12 min-w-12 flex-col items-center justify-start pb-6 pt-2.5 medium:w-[70px] medium:min-w-[70px] medium:pt-2">
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
          className={`relative mb-1 mr-1 flex-grow rounded-r-md bg-white ${isMoving ? "cursor-col-resize" : ""}`}
        >
          <div className="flex h-[100%] w-[100%]">
            {" "}
            <div
              className={`absolute h-[100%] w-[3px] cursor-col-resize transition duration-500 hover:bg-seaBlue ${isMoving ? "bg-seaBlue" : ""}`}
              onMouseDown={(e) => handleMouseDown(e)}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={windowWidth * 0.7}
              aria-valuenow={value}
              tabIndex={0}
            ></div>
            <div className="flex h-[100%] flex-grow flex-col">
              <div className="flex h-[49px] min-h-[49px] w-[100%] items-center pl-5 pr-3">
                <div className="flex flex-grow items-center justify-start bg-white">
                  <button className="flex h-[30px] items-center hover:bg-hoverGray">
                    <img
                      src="/netanel.jpg"
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
                <div className="w-[100%] px-5 pb-4 pt-12">
                  <div className="pb-4">
                    <div className="flex items-center">
                      <img
                        src="/netanel.jpg"
                        alt="avatar"
                        className="h-[102px] w-[102px] rounded-xl"
                      />
                      <div className="flex items-center">
                        <span className="ml-2 text-lg/[27px] font-semibold">
                          Netanel
                        </span>{" "}
                        <Icons.EmptyCircle className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 w-[100%] text-[17.6px] font-normal">
                    This conversation is just between{" "}
                    <a href="/" className="bg-seaBlue/[0.2] text-blue-900">
                      @Netanel
                    </a>{" "}
                    and you. Check out their profile to learn more about them.
                  </div>
                  <button className="mb-4 flex h-9 items-center rounded-lg border-2 border-borderGray px-3 text-[15px] font-semibold">
                    <span className="h-fit">View Profile</span>
                  </button>
                </div>
                <Day date="October 3rd, 2024">
                  <Message
                    src="/profile.png"
                    name="David Pechtalt"
                    time="08:22 AM"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim laudantium illo quibusdam, vel dolor harum facere
                    incidunt. Aliquid, sapiente labore, id similique quaerat,
                    temporibus harum debitis unde iusto ratione eos quidem!
                    Obcaecati voluptatum dignissimos quod minus assumenda modi
                    tempore esse magnam voluptatibus expedita cupiditate sequi,
                    consequatur eum ipsa quo eaque maiores quibusdam atque non
                    nobis optio. Voluptatem, placeat ab eum quasi similique
                    accusantium. Quia, modi. Velit sapiente minima sequi soluta?
                  </Message>
                  <Message src="/netanel.jpg" name="Netanel" time="10:11 AM">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure corrupti sed, totam necessitatibus placeat neque
                    distinctio nemo laboriosam exercitationem non! Voluptate
                    reiciendis consequatur debitis accusantium cumque nostrum
                    explicabo est deserunt repellat sit, fuga quas eaque,
                    consectetur optio, nulla ab nam assumenda repellendus? Unde
                    vero quam id, sapiente fugit voluptatum cumque nostrum porro
                    consequatur suscipit nemo consequuntur aliquid ea dolore
                    modi enim sit delectus repudiandae saepe eaque dolorum
                    architecto, numquam excepturi asperiores? A nihil eius
                    facilis aperiam, molestiae atque modi minima veniam aut
                    officia perspiciatis labore est exercitationem expedita
                    officiis ipsa beatae voluptate, quia sit assumenda.
                    Voluptatem vel cum natus sed!
                  </Message>
                </Day>

                <Day date="December 2nd, 2024">
                  <Message src="/netanel.jpg" name="Netanel" time="10:11 AM">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ad, delectus voluptatibus sapiente, a fuga ex iusto, beatae
                    nulla architecto optio atque tenetur debitis velit. At
                    maiores natus quis expedita asperiores aperiam eaque dolore
                    accusamus blanditiis. Voluptatum illum laudantium tenetur ea
                    neque, iste reiciendis, veniam aperiam, sint quae culpa quis
                    accusantium sit beatae. Rerum mollitia quidem, odit pariatur
                    molestiae, aspernatur veniam repellat asperiores obcaecati
                    animi necessitatibus.
                  </Message>
                  <Message
                    src="/profile.png"
                    name="David Pechtalt"
                    time="08:22 AM"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum, quia magnam, optio est tempora voluptate dolores
                    fugiat nihil debitis autem enim cupiditate architecto
                    corrupti maiores aut similique qui maxime voluptas alias
                    neque eum. Voluptas quos quasi quibusdam dolorem vel quo ut
                    id doloremque corrupti fugiat, placeat quidem quisquam
                    impedit error excepturi cupiditate aut deleniti vitae quia
                    aliquid laudantium illum iste! Tempora placeat impedit fugit
                    reprehenderit sed! Deserunt corporis sit, dolor, qui
                    nesciunt itaque, minus debitis deleniti maxime ab quasi
                    quam. Tenetur quia ut beatae voluptatem aperiam commodi ex
                    laborum? Voluptatem, recusandae itaque!
                  </Message>
                  <Message src="/netanel.jpg" name="Netanel" time="10:11 AM">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ad, delectus voluptatibus sapiente, a fuga ex iusto, beatae
                    nulla architecto optio atque tenetur debitis velit. At
                    maiores natus quis expedita asperiores aperiam eaque dolore
                    accusamus blanditiis. Voluptatum illum laudantium tenetur ea
                    neque, iste reiciendis, veniam aperiam, sint quae culpa quis
                    accusantium sit beatae. Rerum mollitia quidem, odit pariatur
                    molestiae, aspernatur veniam repellat asperiores obcaecati
                    animi necessitatibus.
                  </Message>
                  <Message
                    src="/profile.png"
                    name="David Pechtalt"
                    time="08:22 AM"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum, quia magnam, optio est tempora voluptate dolores
                    fugiat nihil debitis autem enim cupiditate architecto
                    corrupti maiores aut similique qui maxime voluptas alias
                    neque eum. Voluptas quos quasi quibusdam dolorem vel quo ut
                    id doloremque corrupti fugiat, placeat quidem quisquam
                    impedit error excepturi cupiditate aut deleniti vitae quia
                    aliquid laudantium illum iste! Tempora placeat impedit fugit
                    reprehenderit sed! Deserunt corporis sit, dolor, qui
                    nesciunt itaque, minus debitis deleniti maxime ab quasi
                    quam. Tenetur quia ut beatae voluptatem aperiam commodi ex
                    laborum? Voluptatem, recusandae itaque!
                  </Message>
                  <Message src="/netanel.jpg" name="Netanel" time="10:11 AM">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ad, delectus voluptatibus sapiente, a fuga ex iusto, beatae
                    nulla architecto optio atque tenetur debitis velit. At
                    maiores natus quis expedita asperiores aperiam eaque dolore
                    accusamus blanditiis. Voluptatum illum laudantium tenetur ea
                    neque, iste reiciendis, veniam aperiam, sint quae culpa quis
                    accusantium sit beatae. Rerum mollitia quidem, odit pariatur
                    molestiae, aspernatur veniam repellat asperiores obcaecati
                    animi necessitatibus.
                  </Message>
                  <Message
                    src="/profile.png"
                    name="David Pechtalt"
                    time="08:22 AM"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum, quia magnam, optio est tempora voluptate dolores
                    fugiat nihil debitis autem enim cupiditate architecto
                    corrupti maiores aut similique qui maxime voluptas alias
                    neque eum. Voluptas quos quasi quibusdam dolorem vel quo ut
                    id doloremque corrupti fugiat, placeat quidem quisquam
                    impedit error excepturi cupiditate aut deleniti vitae quia
                    aliquid laudantium illum iste! Tempora placeat impedit fugit
                    reprehenderit sed! Deserunt corporis sit, dolor, qui
                    nesciunt itaque, minus debitis deleniti maxime ab quasi
                    quam. Tenetur quia ut beatae voluptatem aperiam commodi ex
                    laborum? Voluptatem, recusandae itaque!
                  </Message>
                  <Message src="/netanel.jpg" name="Netanel" time="10:11 AM">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ad, delectus voluptatibus sapiente, a fuga ex iusto, beatae
                    nulla architecto optio atque tenetur debitis velit. At
                    maiores natus quis expedita asperiores aperiam eaque dolore
                    accusamus blanditiis. Voluptatum illum laudantium tenetur ea
                    neque, iste reiciendis, veniam aperiam, sint quae culpa quis
                    accusantium sit beatae. Rerum mollitia quidem, odit pariatur
                    molestiae, aspernatur veniam repellat asperiores obcaecati
                    animi necessitatibus.
                  </Message>
                  <Message
                    src="/profile.png"
                    name="David Pechtalt"
                    time="08:22 AM"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum, quia magnam, optio est tempora voluptate dolores
                    fugiat nihil debitis autem enim cupiditate architecto
                    corrupti maiores aut similique qui maxime voluptas alias
                    neque eum. Voluptas quos quasi quibusdam dolorem vel quo ut
                    id doloremque corrupti fugiat, placeat quidem quisquam
                    impedit error excepturi cupiditate aut deleniti vitae quia
                    aliquid laudantium illum iste! Tempora placeat impedit fugit
                    reprehenderit sed! Deserunt corporis sit, dolor, qui
                    nesciunt itaque, minus debitis deleniti maxime ab quasi
                    quam. Tenetur quia ut beatae voluptatem aperiam commodi ex
                    laborum? Voluptatem, recusandae itaque!
                  </Message>
                </Day>
              </div>
              <div className="min-h-[144px] shrink-0 px-5 pb-3 h-fit">
                <div className="flex min-h-[100%] w-[100%] flex-col rounded-lg border-[1px] border-borderGray">
                  <div className="flex h-10 bg-hoverGray p-1">
                    <BoxTopButton>
                      <Icons.Bold className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxTopButton>
                      <Icons.Italic className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxTopButton>
                      <Icons.Strike className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxDivider />
                    <BoxTopButton>
                      <Icons.Link className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxTopButton>
                      <Icons.OrderedList className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxTopButton>
                      <Icons.BulletList className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxDivider />
                    <BoxTopButton>
                      <Icons.BlockQuote className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxTopButton>
                      <Icons.Code className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                    <BoxTopButton>
                      <Icons.CodeBlock className="h-[18px] w-[18px]" />
                    </BoxTopButton>
                  </div>
                  <div className="w-[100%] h-fit px-3 py-2">
                    <textarea
                      placeholder="Message Netanel"
                      className="w-[100%] outline-none resize-none"
                    ></textarea>
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

export const Message = ({
  children,
  name,
  src,
  time,
}: Props & { name: string; src: string; time: string }) => {
  return (
    <div className="flex w-[100%] px-5 py-2 hover:bg-hoverGray">
      <div className="mr-2 flex h-[100%] flex-col items-start justify-start">
        <img
          src={`${src}`}
          alt="avatar"
          className="h-9 min-h-9 w-9 min-w-9 rounded-lg"
        />
      </div>
      <div className="w-[0px] flex-grow flex-col">
        <div className="flex items-center justify-start">
          <button className="text-[15px]/[22px] font-bold hover:underline">
            {name}
          </button>
          <button className="ml-2 mt-[2px] h-[100%] text-xs font-normal tracking-wide text-lightFontGray">
            {time}
          </button>
        </div>
        <div className="text-[15px]/[22px]">{children}</div>
      </div>
    </div>
  );
};

export const Day = ({ date, children }: { date: string } & Props) => {
  return (
    <div className="mt-[22px] border-t-2 border-borderGray">
      {" "}
      <div className="sticky top-[22px] mx-3 flex h-7 justify-center">
        <button className="relative bottom-[14px] flex h-7 w-fit items-center rounded-3xl border-[1px] bg-white pl-4 pr-2 text-[13px]/[27px] font-semibold">
          <span>{date}</span>{" "}
          <Icons.Fold className="mx-1 h-3 min-h-3 w-3 min-w-3" />
        </button>
      </div>
      {children}
    </div>
  );
};

export const BoxTopButton = ({ children }: Props) => {
  return (
    <div className="m-[2px] mr-2.5 h-4 w-4 p-[2px] text-[#a8a8a8]">
      {children}
    </div>
  );
};

export const BoxDivider = () => {
  return <div className="ml-1.5 mr-2.5 mt-1 h-4 w-[1px] bg-[#a8a8a8]"></div>;
};
