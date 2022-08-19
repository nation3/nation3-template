import { ViewGridIcon } from "@heroicons/react/outline";
import { Nation3App, DefaultLayout, DefaultSidebar } from "@nation3/components";
import type { AppProps } from "next/app";
import logo from "/logo.svg";

function Nation3({ Component, pageProps }: AppProps) {
  return (
    <Nation3App>
      <DefaultLayout
        sidebar={
          <DefaultSidebar
            onConnect={console.log}
            logo={<img src="/logo.svg" alt="Nation3 Logo" />}
            onRoute={console.log}
            navLinks={[
              {
                route: "/",
                icon: <ViewGridIcon className="w-5 h-5" />,
                name: "Start",
                isActive: true,
              },
            ]}
            connectors={[
              {
                name: "MetaMask",
                id: "ADUBO",
                ready: true,
              },
            ]}
            account={{
              address: "0x540ABe72",
              connector: {
                name: "MetaMask",
                id: "ADUBO",
                ready: true,
              },
            }}
            onDisconnect={console.log}
          />
        }
      >
        <Component {...pageProps} />
      </DefaultLayout>
    </Nation3App>
  );
}

export default Nation3;
