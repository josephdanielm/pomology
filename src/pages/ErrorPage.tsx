import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = errorMessage(useRouteError());

    return (
        <div>
            <h1>Sorry, there was an error :(</h1>
            <p>
                <i>{error}</i>
            </p>
            <Link to='/'>Go Home</Link>
        </div>
    )
}


function errorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    console.error(error)
    return 'Unknown error'
  }
}