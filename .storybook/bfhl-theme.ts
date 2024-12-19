import { create } from "@storybook/theming/create";

const logoURL = "https://bfhlprodvivantdoc.blob.core.windows.net/app-icons/webp/logos/new-logo-23.webp";

export const BFHLTheme = create({
  base: "dark",
  brandTitle: "StyleRx",
  brandUrl: "https://www.bajajfinservhealth.in",
  brandImage: logoURL,
  brandTarget: "https://www.bajajfinservhealth.in",
});
