import { use } from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.log("ErrorBoundary caught an error:", error);
  return (
    <>
      <h1>Something went wrong!</h1>
      <h2>Please try again later.</h2>
      <h3>
        {error?.status} : {error?.statusText}
      </h3>
    </>
  );
};

export default ErrorBoundary;
