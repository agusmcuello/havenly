import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div>
      <h4 className="font-bold text-4xl">There was an error...</h4>
      <p className="text-2xl mt-[2rem]">{error.message}</p>
    </div>
  );
};
export default ErrorElement;
