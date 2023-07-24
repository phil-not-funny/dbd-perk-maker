import Logo from "./Logo";
import { Link } from "react-router-dom";
import Grid from "./Grid";

export default function Footer() {
  return (
    <div className="mt-auto bg-dark flex flex-col p-2 pt-12 items-center">
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
                  className="text-dimmed font-cafeLight transition ease-in-out duration-150 hover:text-primaryLight"
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
                  className="text-dimmed font-cafeLight transition ease-in-out duration-150 hover:text-primaryLight"
                  rel="noreferrer"
                >
                  {"instagram.com/not_funny75"}
                </a>
              </div>
            </div>
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
                  className="text-dimmed font-cafeLight transition ease-in-out duration-150 hover:text-primaryLight"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"github.com/phil-not-funny"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div>
          <div className="flex justify-center lg:justify-end">
            <Link
              to="/privacy-policy"
              className="underline-offset-1 hover:text-primaryLight text-dimmed transition ease-in-out duration-150"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Grid>
      <p className="font-cafeLight text-dimmed text-center w-full pt-3">&copy; Proxreal, 2022</p>
    </div>
  );
}
