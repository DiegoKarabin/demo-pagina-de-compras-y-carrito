import { useRouteError } from 'react-router-dom';

interface RouterError {
  statusText: string;
  message: string;
}

export const ErrorPage = () => {
  const error = useRouteError() as RouterError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ups!</h1>
      <p>Parece que ha ocurrido un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
