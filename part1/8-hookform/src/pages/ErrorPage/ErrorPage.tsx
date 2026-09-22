import type { ReactNode } from 'react';
import Button from '../../components/ui/Button/Button';
import type { FallbackProps } from "react-error-boundary";


const ErrorPage = ({ error, resetErrorBoundary }:FallbackProps): ReactNode => {
  return (
    <div className="flex flex-col gap-y-3  items-center justify-center min-h-screen">
      <h1 className='text-gray-400 text-xl'>Oops!| Something Went Wrong...</h1>
      <p>
          {error instanceof Error
          ? error.message
          : "An unknown error occurred"}
      </p>
      <Button variant='outline' onClick={resetErrorBoundary}>try again</Button>
    </div>
  );
};
export default ErrorPage;