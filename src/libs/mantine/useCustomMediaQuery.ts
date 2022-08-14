import { useMediaQuery } from "@mantine/hooks";

/* Mantineと一致させる: https://mantine.dev/theming/responsive */
const size = {
  xs: "576px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1400px",
} as const;

export const useCustomMediaQuery = (
  query: keyof typeof size,
  initialValue: boolean = false
) => {
  return useMediaQuery(`(min-width: ${size[query]})`, initialValue);
};
