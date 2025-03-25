import { cva } from "class-variance-authority";

const buttonVariants = cva("leading-none cursor-pointer", {
  variants: {
    intent: {
      primary:
        "bg-brand-orange text-white hover:bg-brand-orange/80 active:bg-brand-orange/60 transition",
    },
    rounded: {
      true: "rounded-[50px]",
      false: "",
    },
    size: {
      sm: "h-8 py-1",
      md: "h-10 py-3 px-6 font-medium text-sm",
      lg: "h-12 py-4 font-semibold px-12",
    },
    disabled: {
      true: "bg-black-100 text-gray-200 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    intent: "primary",
    rounded: true,
    size: "md",
    disabled: false,
  },
});

function Button({ intent, children, rounded, size, disabled, className }) {
  return (
    <button
      className={buttonVariants({ intent, rounded, size, disabled, className })}
    >
      {children}
    </button>
  );
}

export default Button;
