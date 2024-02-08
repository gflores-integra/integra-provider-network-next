type TypographyVariants = "label" | "body1" | "body2" | "caption";

type TypographyProps = React.HTMLAttributes & {
  variant?: TypographyVariants;
  children?: React.ReactNode;
};

export { TypographyProps, TypographyVariants };
