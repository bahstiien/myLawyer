import React from "react";
import Image from "next/image";
import cpalavitLogo from "../public/img/cpLogoWithText.png";
import { getCsrfToken } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

export default function LogIn({ csrfToken }) {
  const { query } = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 justify-center  flex flex-col sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={cpalavitLogo}
          height={200}
          width={250}
          alt="photo of cecile palavit"
        />
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="mt-8 space-y-6"
            method="post"
            action="/api/auth/callback/credentials"
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />{" "}
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                id="credentials-login-btn"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Connexion
              </button>
              {query.error === "CredentialsSignin" && (
                <p className="p-2 text-red-600 text-xl font-bold text-center">
                  {"Les identifiants ne correspondent pas "}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  // capturing the callback url if any, which should include the current domain for security ?
  const host =
    typeof context.query?.callbackUrl === "string" &&
    context.query?.callbackUrl.startsWith(process.env.NEXTAUTH_URL)
      ? context.query?.callbackUrl
      : process.env.NEXTAUTH_URL;
  const redirectURL = encodeURIComponent(host);
  // getting both the csrf form token and (next-auth.csrf-token cookie + next-auth.callback-url cookie)
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/auth/csrf?callbackUrl=${redirectURL}`
  );
  const { csrfToken } = await res.json();
  const headers = await res.headers;
  // placing the cookies
  const [csrfCookie, redirectCookie] = headers.get("set-cookie").split(",");
  context.res.setHeader("set-cookie", [csrfCookie, redirectCookie]);
  // placing form csrf token
  return {
    props: {
      csrfToken,
    },
  };
}
