import { cva } from "class-variance-authority";

const buttonVariants = cva("leading-none cursor-pointer", {
  variants: {
    intent: {
      primary:
        "bg-brand-orange text-white hover:brightness-90 active:brightness-75 transition",
      secondary: "hover:brightness-95 active:brightness-90 transition",
      dark: "",
    },
    rounded: {
      true: "rounded-[50px]",
      false: "rounded-[10px]",
    },
    size: {
      sm: "h-8 py-1",
      md: "h-10 py-3 px-6 font-medium text-sm",
      lg: "h-12 py-4 font-semibold px-12",
    },
    disabled: {
      true: "!bg-black-100 !text-gray-200 !cursor-not-allowed",
      false: "",
    },
    outline: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      outline: true,
      className:
        "!text-brand-orange !border-brand-orange !bg-transparent border",
    },
    {
      intent: "secondary",
      outline: true,
      className: "!text-gray-100 !border-gray-100 !bg-transparent border",
    },
    {
      intent: "dark",
      outline: true,
      className: "!text-gray-200 !border-gray-200 !bg-transparent border",
    },
  ],
  defaultVariants: {
    intent: "primary",
    rounded: true,
    size: "md",
    disabled: false,
    outline: false,
  },
});

function Button({
  intent,
  children,
  rounded,
  size,
  disabled,
  outline,
  className,
  ...props
}) {
  return (
    <button
      className={buttonVariants({
        intent,
        rounded,
        size,
        disabled,
        outline,
        className,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
