import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h3 className="text-5xl font-bold">Ohh! Error 404</h3>
            <p className="py-6">Page not found</p>
            <Link to="/">
              <button className="btn btn-primary">Back home</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h3 className="text-5xl font-bold">Ohh! Error</h3>
          <p className="py-6">{error.message}</p>
          <Link to="/">
            <button className="btn btn-primary">Back home</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Error;
