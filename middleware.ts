import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

// Sample NextJS middleware to redirect to root from landing url
export default function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === "/landing") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/landing"],
};
