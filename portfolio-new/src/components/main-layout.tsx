import Header from "./header";
import { Navbar } from "./navbar";
import { TopLeftImage } from "./top-left-img";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat relative mx-auto">
      <TopLeftImage />
      <Navbar />
      <Header />
      {children}
    </div>
  );
};
