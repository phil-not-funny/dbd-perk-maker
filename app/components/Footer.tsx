import Logo from "./Logo";
import Grid from "./Grid";

export default function Footer() {
  return (
    <div className="mt-auto bg-blackLight text-white flex flex-col p-2 py-12 items-center">
      <Grid center chain>
        <div className="flex justify-start">
          <div className="mr-5">
            <div>
              <div className="flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-dimmed mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-primaryLight mt-0.5">Email: </span>
              </div>
              <div>
                <a
                  href="mailto:prox-real@outlook.com"
                  className="text-dimmed  transition ease-in-out duration-150 hover:text-primaryLight"
                  target="_blank"
                  rel="noreferrer"
                >
                  prox-real@outlook.com
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-dimmed mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span className="text-primaryLight mt-0.5">Instagram: </span>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/not_funny75"
                  target="_blank"
                  className="text-dimmed  transition ease-in-out duration-150 hover:text-primaryLight"
                  rel="noreferrer"
                >
                  {"instagram.com/not_funny75"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div>
          <div>
            <div className="flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dimmed mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="text-primaryLight mt-0.5">GitHub: </span>
            </div>
            <div>
              <a
                href="https://github.com/phil-not-funny"
                className="text-dimmed  transition ease-in-out duration-150 hover:text-primaryLight"
                target="_blank"
                rel="noreferrer"
              >
                {"github.com/phil-not-funny"}
              </a>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-dimmed mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>

              <span className="text-primaryLight mt-0.5">
                Inspired by DeadByDaylight
              </span>
            </div>
            <div>
              <a
                href="https://deadbydaylight.com"
                className="text-dimmed transition ease-in-out duration-150 hover:text-primaryLight"
                target="_blank"
                rel="noreferrer"
              >
                {"deadbydaylight.com"}
              </a>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
