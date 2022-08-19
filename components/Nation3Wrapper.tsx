import { ViewGridIcon } from "@heroicons/react/outline";
import { Nation3App, DefaultLayout, DefaultSidebar } from "@nation3/components";

function Nation3Wrapper({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
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
        {children}
      </DefaultLayout>
    </Nation3App>
  );
}

export default Nation3Wrapper;
