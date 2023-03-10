// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import LeftSidebar from "./components/left-sidebar";
import "./root.css";
import "./styles/colors.scss";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Smöl Manage App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></Link>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {/* <Header /> */}
            <LeftSidebar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
