import { StyleAttributes } from "../types/types";

const SvgIcon = ({ d, className }: { d: string } & StyleAttributes) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <path fill="currentColor" d={d}></path>
    </svg>
  );
};

export const LeftArrow = ({ className }: StyleAttributes) => {
  return (
    <SvgIcon
      d="M9.768 5.293a.75.75 0 0 0-1.036-1.086l-5.5 5.25a.75.75 0 0 0 0 1.085l5.5 5.25a.75.75 0 1 0 1.036-1.085L5.622 10.75H16.25a.75.75 0 0 0 0-1.5H5.622z"
      className={className}
    />
  );
};
export function RightArrow({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M11.268 15.793a.75.75 0 0 1-1.036-1.085l4.146-3.958H3.75a.75.75 0 0 1 0-1.5h10.628l-4.146-3.957a.75.75 0 0 1 1.036-1.086l5.5 5.25a.75.75 0 0 1 0 1.085z"
      className={className}
    />
  );
}
export function Clock({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M2.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18m.75 4.75a.75.75 0 0 0-1.5 0v4.75c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5h-3z"
      className={className}
    />
  );
}
export function HoverGlass({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3M1.5 9a7.5 7.5 0 1 1 13.307 4.746l3.473 3.474a.75.75 0 1 1-1.06 1.06l-3.473-3.473A7.5 7.5 0 0 1 1.5 9"
      className={className}
    />
  );
}
export function QuestionMark({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M1 10a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.883-2.648c-.23.195-.383.484-.383.898a.75.75 0 0 1-1.5 0c0-.836.333-1.547.91-2.04.563-.48 1.31-.71 2.09-.71.776 0 1.577.227 2.2.729.642.517 1.05 1.294 1.05 2.271 0 .827-.264 1.515-.807 2.001-.473.423-1.08.623-1.693.703V12h-1.5v-1c0-.709.566-1.211 1.18-1.269.507-.048.827-.18 1.013-.347.162-.145.307-.39.307-.884 0-.523-.203-.87-.492-1.104C10.951 7.148 10.502 7 10 7c-.497 0-.876.146-1.117.352M10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      className={className}
    />
  );
}
