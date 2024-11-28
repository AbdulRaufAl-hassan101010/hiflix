import React from "react";
import Nav from "../components/Nav";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  //   context
  const { loading } = useGlobalContext();

  return (
    <>
      {/*  if loading stat is true, show loading screen */}
      {loading && <Loader />}
      {/* else show content */}
      <div className={loading ? "hidden" : ""}>
        <Nav />
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
