import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  "use server";
  const token = request.cookies.get("nextauth.token")?.value;
  const routerName = request.nextUrl.pathname;

  if (routerName.startsWith("/pub") || routerName === "/") {
    return NextResponse.next();
  }

  if (!token) {
    request.cookies.clear();
    const urlNext = request.nextUrl.clone();
    urlNext.pathname = "/pub/auth/signin";
    return NextResponse.redirect(urlNext);
  }

  if (routerName.includes("/pub/auth/signin") && token) {
    const urlNext = request.nextUrl.clone();
    urlNext.pathname = "/";
    return NextResponse.redirect(urlNext);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
