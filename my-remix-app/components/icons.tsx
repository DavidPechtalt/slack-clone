import { StyleAttributes } from "../types/types";

const SvgIcon = ({ d, className }: { d: string } & StyleAttributes) => {
  return (
    <svg
      aria-hidden="true"
      fillRule="evenodd"
      viewBox="0 0 20 20"
      className={className}
    >
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
export function House({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="m3 7.649-.33.223a.75.75 0 0 1-.84-1.244l7.191-4.852a1.75 1.75 0 0 1 1.958 0l7.19 4.852a.75.75 0 1 1-.838 1.244L17 7.649v7.011c0 2.071-1.679 3.84-3.75 3.84h-6.5C4.679 18.5 3 16.731 3 14.66zM11 11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
      className={className}
    />
  );
}
export function Chat({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M7.675 6.468a4.75 4.75 0 1 1 8.807 3.441.75.75 0 0 0-.067.489l.379 1.896-1.896-.38a.75.75 0 0 0-.489.068 5 5 0 0 1-.648.273.75.75 0 1 0 .478 1.422q.314-.105.611-.242l2.753.55a.75.75 0 0 0 .882-.882l-.55-2.753A6.25 6.25 0 1 0 6.23 6.064a.75.75 0 1 0 1.445.404M6.5 8.5a5 5 0 0 0-4.57 7.03l-.415 2.073a.75.75 0 0 0 .882.882l2.074-.414A5 5 0 1 0 6.5 8.5m-3.5 5a3.5 3.5 0 1 1 1.91 3.119.75.75 0 0 0-.49-.068l-1.214.243.243-1.215a.75.75 0 0 0-.068-.488A3.5 3.5 0 0 1 3 13.5"
      className={className}
    />
  );
}
export function Bell({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M9.357 3.256c-.157.177-.31.504-.36 1.062l-.05.558-.55.11c-1.024.204-1.691.71-2.145 1.662-.485 1.016-.736 2.566-.752 4.857l-.002.307-.217.217-2.07 2.077c-.145.164-.193.293-.206.374a.3.3 0 0 0 .034.199c.069.12.304.321.804.321h4.665l.07.672c.034.327.17.668.4.915.214.232.536.413 1.036.413.486 0 .802-.178 1.013-.41.227-.247.362-.588.396-.916l.069-.674h4.663c.5 0 .735-.202.804-.321a.3.3 0 0 0 .034-.199c-.013-.08-.061-.21-.207-.374l-2.068-2.077-.216-.217-.002-.307c-.015-2.291-.265-3.841-.75-4.857-.455-.952-1.123-1.458-2.147-1.663l-.549-.11-.05-.557c-.052-.558-.204-.885-.36-1.062C10.503 3.1 10.31 3 10 3s-.505.1-.643.256m-1.124-.994C8.689 1.746 9.311 1.5 10 1.5s1.31.246 1.767.762c.331.374.54.85.65 1.383 1.21.369 2.104 1.136 2.686 2.357.604 1.266.859 2.989.894 5.185l1.866 1.874.012.012.011.013c.636.7.806 1.59.372 2.342-.406.705-1.223 1.072-2.103 1.072H12.77c-.128.39-.336.775-.638 1.104-.493.538-1.208.896-2.12.896-.917 0-1.638-.356-2.136-.893A3 3 0 0 1 7.23 16.5H3.843c-.88 0-1.697-.367-2.104-1.072-.433-.752-.263-1.642.373-2.342l.011-.013.012-.012 1.869-1.874c.035-2.196.29-3.919.894-5.185.582-1.22 1.475-1.988 2.684-2.357.112-.533.32-1.009.651-1.383"
      className={className}
    />
  );
}
export function Play({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M5.128 3.213A.75.75 0 0 0 4 3.861v12.277a.75.75 0 0 0 1.128.647l10.523-6.138a.75.75 0 0 0 0-1.296zM2.5 3.861c0-1.737 1.884-2.819 3.384-1.944l10.523 6.139c1.488.868 1.488 3.019 0 3.887L5.884 18.08c-1.5.875-3.384-.207-3.384-1.943z"
      className={className}
    />
  );
}
export function DotsHor({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M14.5 10a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m-6.25 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M2 10a1.75 1.75 0 1 1 3.5 0A1.75 1.75 0 0 1 2 10"
      className={className}
    />
  );
}
export function DotsVer({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M10 5.5A1.75 1.75 0 1 1 10 2a1.75 1.75 0 0 1 0 3.5m0 6.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5m-1.75 4.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
      className={className}
    />
  );
}
export function Plus({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M10.75 3.25a.75.75 0 0 0-1.5 0v6H3.251L3.25 10v-.75a.75.75 0 0 0 0 1.5V10v.75h6v6a.75.75 0 0 0 1.5 0v-6h6a.75.75 0 0 0 0-1.5h-6z"
      className={className}
    />
  );
}

export function Fold({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M5.72 7.47a.75.75 0 0 1 1.06 0L10 10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 8.53a.75.75 0 0 1 0-1.06"
      className={className}
    />
  );
}
export function ThreeLines({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M3.75 5.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM5 10.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m2 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
      className={className}
    />
  );
}
export function Pencil({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M16.707 3.268a1 1 0 0 0-1.414 0l-.482.482 1.439 1.44.482-.483a1 1 0 0 0 0-1.414zM15.19 6.25l-1.44-1.44-5.068 5.069-.431 1.872 1.87-.432zm-.957-4.043a2.5 2.5 0 0 1 3.536 0l.025.025a2.5 2.5 0 0 1 0 3.536l-6.763 6.763a.75.75 0 0 1-.361.2l-3.25.75a.75.75 0 0 1-.9-.9l.75-3.25a.75.75 0 0 1 .2-.361zM5.25 4A2.25 2.25 0 0 0 3 6.25v8.5A2.25 2.25 0 0 0 5.25 17h8.5A2.25 2.25 0 0 0 16 14.75v-4.5a.75.75 0 0 1 1.5 0v4.5a3.75 3.75 0 0 1-3.75 3.75h-8.5a3.75 3.75 0 0 1-3.75-3.75v-8.5A3.75 3.75 0 0 1 5.25 2.5h4.5a.75.75 0 0 1 0 1.5z"
      className={className}
    />
  );
}
export function SandClock({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M3.46 5.22A3.473 3.473 0 0 1 6.924 1.5h6.178a3.45 3.45 0 0 1 3.44 3.694 2.55 2.55 0 0 1-.638 1.511l-2.967 3.339a.25.25 0 0 0 .01.342l2.867 2.867c.428.429.688.997.731 1.602a3.403 3.403 0 0 1-3.394 3.645H6.876a3.43 3.43 0 0 1-3.42-3.672 2.54 2.54 0 0 1 .68-1.553l2.712-2.893a.25.25 0 0 0 .01-.331l-2.81-3.372A2.57 2.57 0 0 1 3.46 5.22M6.924 3c-1.145 0-2.05.971-1.968 2.113.016.223.102.435.245.606l2.81 3.372a1.75 1.75 0 0 1-.068 2.317L5.23 14.3c-.162.173-.26.397-.277.634A1.93 1.93 0 0 0 6.876 17h6.275a1.903 1.903 0 0 0 1.898-2.039 1.02 1.02 0 0 0-.296-.647l-2.867-2.867a1.75 1.75 0 0 1-.07-2.4l2.967-3.338a1.05 1.05 0 0 0 .263-.622A1.95 1.95 0 0 0 13.102 3zM13.5 15.65c0 .35-.887.35-3.5.35s-3.5 0-3.5-.35c0-.933 2.345-3.15 3.5-3.15 1.19 0 3.5 2.228 3.5 3.15m-1-9.025c0 .45-1.875 2.5-2.5 2.5s-2.5-2.1-2.5-2.5C7.5 6 8.125 6 10 6s2.5 0 2.5.625"
      className={className}
    />
  );
}
export function RightFold({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M7.72 5.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06L10.94 10 7.72 6.78a.75.75 0 0 1 0-1.06"
      className={className}
    />
  );
}
export function Talk({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M10 3a7 7 0 1 0 3.394 13.124.75.75 0 0 1 .542-.074l2.794.68-.68-2.794a.75.75 0 0 1 .073-.542A7 7 0 0 0 10 3m-8.5 7a8.5 8.5 0 1 1 16.075 3.859l.904 3.714a.75.75 0 0 1-.906.906l-3.714-.904A8.5 8.5 0 0 1 1.5 10M6 8.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 8.25M6.75 11a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
      className={className}
    />
  );
}
export function Headphones({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M5.094 4.571C3.785 5.825 3 7.444 3 8.966v1.371A3.45 3.45 0 0 1 5.25 9.5h.5c1.064 0 1.75.957 1.75 1.904v5.192c0 .947-.686 1.904-1.75 1.904h-.5c-2.168 0-3.75-1.99-3.75-4.211v-.578q0-.105.005-.211H1.5V8.966c0-2.02 1.024-4.01 2.556-5.478C5.595 2.014 7.711 1 10 1s4.405 1.014 5.944 2.488C17.476 4.956 18.5 6.945 18.5 8.966V13.5h-.005q.005.105.005.211v.578c0 2.221-1.582 4.211-3.75 4.211h-.5c-1.064 0-1.75-.957-1.75-1.904v-5.192c0-.947.686-1.904 1.75-1.904h.5c.864 0 1.635.316 2.25.837V8.966c0-1.522-.785-3.141-2.094-4.395C13.602 3.322 11.844 2.5 10 2.5s-3.602.822-4.906 2.071m9.016 6.508a.5.5 0 0 0-.11.325v5.192c0 .145.05.257.11.325.057.066.109.079.14.079h.5c1.146 0 2.25-1.11 2.25-2.711v-.578C17 12.11 15.896 11 14.75 11h-.5c-.031 0-.083.013-.14.08M3 13.711C3 12.11 4.105 11 5.25 11h.5c.031 0 .083.013.14.08.06.067.11.18.11.324v5.192a.5.5 0 0 1-.11.325c-.057.066-.109.079-.14.079h-.5C4.105 17 3 15.89 3 14.289z"
      className={className}
    />
  );
}
export function AirPlane({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M1.856 1.612a.75.75 0 0 1 .73-.033l15.5 7.75a.75.75 0 0 1 0 1.342l-15.5 7.75A.75.75 0 0 1 1.5 17.75v-6.046c0-.68.302-1.29.78-1.704a2.25 2.25 0 0 1-.78-1.704V2.25a.75.75 0 0 1 .356-.638M3 3.464v4.832a.75.75 0 0 0 .727.75l6.546.204a.75.75 0 0 1 0 1.5l-6.546.204a.75.75 0 0 0-.727.75v4.833L16.073 10z"
      className={className}
    />
  );
}
export function SamllChat({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M10 1.5a8.5 8.5 0 1 0 3.859 16.075l3.714.904a.75.75 0 0 0 .906-.906l-.904-3.714A8.5 8.5 0 0 0 10 1.5"
      className={className}
    />
  );
}
export function FoldedPaper({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25v5.5h-4.75a1.5 1.5 0 0 0-1.5 1.5V17h-5.5A2.25 2.25 0 0 1 3 14.75zm9.25 11.003 4.003-4.003H12.25zM5.25 1.5A3.75 3.75 0 0 0 1.5 5.25v9.5a3.75 3.75 0 0 0 3.75 3.75h5.736c.729 0 1.428-.29 1.944-.805l4.765-4.765a2.75 2.75 0 0 0 .805-1.944V5.25a3.75 3.75 0 0 0-3.75-3.75zm.25 4.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
      className={className}
    />
  );
}
export function PapersFile({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M8.86 1.328a2.15 2.15 0 0 1 2.28 0l6.118 3.824a1.59 1.59 0 0 1 0 2.696l-6.118 3.824a2.15 2.15 0 0 1-2.28 0L2.743 7.848a1.59 1.59 0 0 1 0-2.696zM10.346 2.6a.65.65 0 0 0-.69 0L3.538 6.424a.09.09 0 0 0 0 .152L9.656 10.4a.65.65 0 0 0 .688 0l6.119-3.824a.09.09 0 0 0 0-.152zM2.1 10.062a.75.75 0 0 1 1.033-.239L9.655 13.9a.65.65 0 0 0 .688.001l6.519-4.074a.75.75 0 1 1 .795 1.272l-6.52 4.074a2.15 2.15 0 0 1-2.277 0l-6.523-4.078a.75.75 0 0 1-.238-1.033m1.033 3.261a.75.75 0 1 0-.795 1.272l6.523 4.077a2.15 2.15 0 0 0 2.278.001l6.519-4.074a.75.75 0 1 0-.795-1.272l-6.52 4.074a.65.65 0 0 1-.687 0z"
      className={className}
    />
  );
}
export function EmptyCircle({ className }: StyleAttributes) {
  return (
    <SvgIcon
      d="M7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
      className={className}
    />
  );
}
