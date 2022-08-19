import { ViewGridIcon } from "@heroicons/react/outline";
import { Nation3App, DefaultLayout, DefaultSidebar } from "@nation3/components";
import type { AppProps } from "next/app";
import Nation3Wrapper from "../components/Nation3Wrapper";

function Nation3({ Component, pageProps }: AppProps) {
  return (
    <Nation3Wrapper>
      <Component {...pageProps} />
    </Nation3Wrapper>
  );
}

export default Nation3;
