import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  xmlns?: string;
  onPress?: () => void;
}
export const IconSearch = (props: IconProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={20}
      height={21}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M21 3C11.621 3 4 10.621 4 20s7.621 17 17 17c3.71 0 7.14-1.195 9.938-3.219l13.156 13.125 2.812-2.812-13-13.032A16.923 16.923 0 0038 20c0-9.379-7.621-17-17-17zm0 2c8.297 0 15 6.703 15 15s-6.703 15-15 15S6 28.297 6 20 12.703 5 21 5z" />
    </Svg>
  );
};
export const IconCart = (props: IconProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.667 0a.667.667 0 000 1.333h1.48l.534 2.143L4.68 14.123a.667.667 0 00.654.544h1.334a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334H16a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334h1.333a.666.666 0 00.655-.544l2-10.667a.668.668 0 00-.655-.79H3.854l-.54-2.16A.667.667 0 002.666 0h-2zM8 17.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0zm9.334 0a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0zM15.139 7.139l-4 4a.666.666 0 01-.944 0l-2-2a.667.667 0 11.944-.944l1.528 1.53 3.528-3.53a.668.668 0 01.944.944z"
        fill="#000"
      />
    </Svg>
  );
};
export const ActiveAccount = (props: IconProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 22.75H9c-1.32 0-2.42-.13-3.35-.41a.767.767 0 01-.54-.78c.25-2.99 3.28-5.34 6.89-5.34s6.63 2.34 6.89 5.34c.03.36-.19.68-.54.78-.93.28-2.03.41-3.35.41zm-8.28-1.69c.66.13 1.41.19 2.28.19h6c.87 0 1.62-.06 2.28-.19-.53-1.92-2.72-3.34-5.28-3.34s-4.75 1.42-5.28 3.34z"
        fill="#0182FE"
      />
      <Path
        d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59z"
        stroke="#0182FE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.92a4.34 4.34 0 01-4.33-4.34c0-2.39 1.94-4.33 4.33-4.33s4.33 1.94 4.33 4.33A4.34 4.34 0 0112 14.92zm0-7.17a2.836 2.836 0 000 5.67 2.836 2.836 0 000-5.67z"
        fill="#0182FE"
      />
    </Svg>
  );
};
export const ActiveHome = (props: IconProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#0182FE"
      />
      <Path
        d="M3.7 22H2.2l.05-12.03c0-.85.39-1.64 1.06-2.16l7-5.45c.99-.77 2.38-.77 3.38 0l7 5.44c.66.52 1.06 1.33 1.06 2.17V22h-1.5V9.98c0-.38-.18-.75-.48-.99l-7-5.44a1.26 1.26 0 00-1.54 0L4.23 9c-.3.23-.48.6-.48.98L3.7 22z"
        fill="#0182FE"
      />
      <Path
        d="M17 22.75H7c-.41 0-.75-.34-.75-.75v-9.5c0-1.24 1.01-2.25 2.25-2.25h7c1.24 0 2.25 1.01 2.25 2.25V22c0 .41-.34.75-.75.75zm-9.25-1.5h8.5V12.5c0-.41-.34-.75-.75-.75h-7c-.41 0-.75.34-.75.75v8.75z"
        fill="#0182FE"
      />
      <Path
        d="M10 18.5c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .41-.34.75-.75.75zM13.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#0182FE"
      />
    </Svg>
  );
};
export const UnActiveAccount = (props: IconProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 22.75H9c-1.32 0-2.42-.13-3.35-.41a.767.767 0 01-.54-.78c.25-2.99 3.28-5.34 6.89-5.34s6.63 2.34 6.89 5.34c.03.36-.19.68-.54.78-.93.28-2.03.41-3.35.41zm-8.28-1.69c.66.13 1.41.19 2.28.19h6c.87 0 1.62-.06 2.28-.19-.53-1.92-2.72-3.34-5.28-3.34s-4.75 1.42-5.28 3.34z"
        fill="#747C87"
      />
      <Path
        d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59z"
        stroke="#747C87"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.92a4.34 4.34 0 01-4.33-4.34c0-2.39 1.94-4.33 4.33-4.33s4.33 1.94 4.33 4.33A4.34 4.34 0 0112 14.92zm0-7.17a2.836 2.836 0 000 5.67 2.836 2.836 0 000-5.67z"
        fill="#747C87"
      />
    </Svg>
  );
};
export const UnActiveHome = (props: IconProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#747C87"
      />
      <Path
        d="M3.7 22H2.2l.05-12.03c0-.85.39-1.64 1.06-2.16l7-5.45c.99-.77 2.38-.77 3.38 0l7 5.44c.66.52 1.06 1.33 1.06 2.17V22h-1.5V9.98c0-.38-.18-.75-.48-.99l-7-5.44a1.26 1.26 0 00-1.54 0L4.23 9c-.3.23-.48.6-.48.98L3.7 22z"
        fill="#747C87"
      />
      <Path
        d="M17 22.75H7c-.41 0-.75-.34-.75-.75v-9.5c0-1.24 1.01-2.25 2.25-2.25h7c1.24 0 2.25 1.01 2.25 2.25V22c0 .41-.34.75-.75.75zm-9.25-1.5h8.5V12.5c0-.41-.34-.75-.75-.75h-7c-.41 0-.75.34-.75.75v8.75z"
        fill="#747C87"
      />
      <Path
        d="M10 18.5c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .41-.34.75-.75.75zM13.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#747C87"
      />
    </Svg>
  );
};
export const IconOpenMenu = (props: IconProps) => {
  return (
    <Svg
      width={18}
      height={13}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.63}
        d="M1.286 2.528h15.428c.735 0 1.286-.542 1.286-1.264S17.449 0 16.714 0H1.286C.55 0 0 .542 0 1.264s.551 1.264 1.286 1.264zm0 5.236h15.428C17.45 7.764 18 7.222 18 6.5s-.551-1.083-1.286-1.083H1.286C.55 5.417 0 5.958 0 6.68c0 .722.551 1.083 1.286 1.083zm0 5.236h15.428C17.45 13 18 12.458 18 11.736s-.551-1.264-1.286-1.264H1.286C.55 10.472 0 11.014 0 11.736 0 12.64.551 13 1.286 13z"
        fill="#000"
      />
    </Svg>
  );
};
export const IconBack = (props: IconProps) => {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 21.265a.734.734 0 01-.53-.224l-6.52-6.656a2.839 2.839 0 010-3.94l6.52-6.656a.744.744 0 011.06 0c.29.296.29.786 0 1.082l-6.52 6.656c-.48.49-.48 1.286 0 1.776l6.52 6.656c.29.296.29.786 0 1.082a.777.777 0 01-.53.224z"
        fill="#000"
      />
    </Svg>
  );
};
export const IconAccount = (props: IconProps) => {
  return (
    <Svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.754 12.628a2.249 2.249 0 012.249 2.249v.575c0 .894-.32 1.76-.901 2.439-1.57 1.833-3.957 2.738-7.102 2.738-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 01-.898-2.435v-.577a2.249 2.249 0 012.248-2.25h11.502zm0 1.5H2.252a.749.749 0 00-.748.749v.577c0 .536.19 1.054.539 1.461C3.296 18.383 5.262 19.13 8 19.13s4.706-.746 5.962-2.214a2.25 2.25 0 00.541-1.463v-.575a.749.749 0 00-.749-.75zM8 .632a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill="#616161"
      />
    </Svg>
  );
};
export const IconPassword = (props: IconProps) => {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 2.628a4 4 0 014 4v2h1.75a2.25 2.25 0 012.25 2.25v9.5a2.25 2.25 0 01-2.25 2.25H6.25A2.25 2.25 0 014 20.378v-9.5a2.25 2.25 0 012.25-2.25H8v-2a4 4 0 014-4zm5.75 7.5H6.25a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75zm-5.75 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-10a2.5 2.5 0 00-2.5 2.5v2h5v-2a2.5 2.5 0 00-2.5-2.5z"
        fill="#616161"
      />
    </Svg>
  );
};
export const IconShowPassword = (props: IconProps) => {
  return (
    <Svg
      width={22}
      height={33}
      viewBox="0 0 22 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.26 18.23c.683-3.275 3.534-5.602 6.74-5.602 3.206 0 6.057 2.327 6.74 5.602a.5.5 0 00.98-.204c-.777-3.725-4.027-6.398-7.72-6.398-3.693 0-6.943 2.673-7.72 6.398a.5.5 0 00.98.204zM12 14.628a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-2.5 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
        fill="#707070"
      />
    </Svg>
  );
};
export const IconDelete = (props: IconProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.5 5.608h-.067C13.025 5.167 8.625 5 4.267 5.442l-1.7.166a.63.63 0 01-.134-1.25l1.7-.166c4.434-.45 8.925-.275 13.425.166a.626.626 0 01.559.684.617.617 0 01-.617.566z"
        fill="#000"
      />
      <Path
        d="M7.083 4.767c-.033 0-.067 0-.108-.009a.627.627 0 01-.509-.716L6.65 2.95c.133-.8.316-1.908 2.258-1.908h2.184c1.95 0 2.133 1.15 2.258 1.916l.183 1.084a.619.619 0 01-.508.716.619.619 0 01-.717-.508l-.183-1.083c-.117-.725-.142-.867-1.025-.867H8.916c-.883 0-.9.117-1.025.858L7.7 4.242a.625.625 0 01-.617.525zM12.675 18.958h-5.35c-2.908 0-3.025-1.608-3.117-2.908l-.541-8.392a.63.63 0 01.583-.666.631.631 0 01.667.583l.541 8.392c.092 1.266.125 1.741 1.867 1.741h5.35c1.75 0 1.783-.475 1.867-1.741l.541-8.392a.637.637 0 01.667-.583.626.626 0 01.583.666l-.541 8.392c-.092 1.3-.209 2.908-3.117 2.908z"
        fill="#000"
      />
      <Path
        d="M11.383 14.375H8.608a.63.63 0 01-.625-.625.63.63 0 01.625-.625h2.775a.63.63 0 01.625.625.63.63 0 01-.625.625zM12.083 11.042H7.916a.63.63 0 01-.625-.625.63.63 0 01.625-.625h4.167a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#000"
      />
    </Svg>
  );
};
export const IconEdit = (props: IconProps) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 15.167H6C2.38 15.167.833 13.62.833 10V6C.833 2.38 2.38.833 6 .833h1.333c.274 0 .5.227.5.5 0 .274-.226.5-.5.5H6C2.927 1.833 1.833 2.928 1.833 6v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V8.667c0-.274.226-.5.5-.5.273 0 .5.226.5.5V10c0 3.62-1.547 5.167-5.167 5.167z"
        fill="#000"
      />
      <Path
        d="M5.667 11.793c-.407 0-.78-.146-1.054-.413-.326-.327-.466-.8-.393-1.3l.287-2.007c.053-.386.306-.886.58-1.16L10.34 1.66c1.327-1.327 2.673-1.327 4 0 .727.727 1.053 1.467.987 2.207-.06.6-.38 1.186-.987 1.786l-5.253 5.254c-.274.273-.774.526-1.16.58l-2.007.286c-.087.02-.173.02-.253.02zm5.38-9.426L5.793 7.62c-.126.127-.273.42-.3.593l-.286 2.007c-.027.193.013.353.113.453.1.1.26.14.453.114L7.78 10.5c.173-.027.473-.173.593-.3l5.254-5.253c.433-.434.66-.82.693-1.18.04-.434-.187-.894-.693-1.407-1.067-1.067-1.8-.767-2.58.007z"
        fill="#000"
      />
      <Path
        d="M13.233 6.553a.43.43 0 01-.133-.02 5.291 5.291 0 01-3.64-3.64.506.506 0 01.347-.62c.266-.073.54.08.613.347a4.283 4.283 0 002.947 2.947c.266.073.42.353.346.62a.49.49 0 01-.48.366z"
        fill="#000"
      />
    </Svg>
  );
};
export const IconClearTxtInput = (props: IconProps) => {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.16 11.145a8.95 8.95 0 1117.9-.069 8.95 8.95 0 01-17.9.069zm8.92-7.693a7.658 7.658 0 10.06 15.317 7.658 7.658 0 00-.06-15.317z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.346 8.517a.97.97 0 011.372-.005l1.398 1.387 1.388-1.398a.97.97 0 111.378 1.367l-1.388 1.398 1.398 1.388a.97.97 0 01-1.367 1.377l-1.398-1.387-1.388 1.398a.97.97 0 11-1.377-1.367l1.388-1.398L8.35 9.889a.97.97 0 01-.005-1.372z"
        fill="#000"
      />
    </Svg>
  );
};
