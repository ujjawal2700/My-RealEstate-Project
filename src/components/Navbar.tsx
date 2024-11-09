import React from "react";
import Link from "next/link";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { GiHouse } from "react-icons/gi";

async function Navbar() {
//   const { getUser } = getKindeServerSession();
  const user = true
  const isAdmin = true;



  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full bg-white/5 backdrop-blur-xl transition-all">
        <div className="flex h-14 items-center justify-around ">
          <Link href={"/"} className="flex z-40 font-semibold items-center justify-center gap-2">
          <GiHouse /> Real Trust
          </Link>

          <div className="h-full flex items-center space-x-6">
            {user ? (
              <>
                <Link
                  href={"/api/auth/logout"}
                >
                  Sign Out
                </Link>
                {isAdmin ? (
                  <Link
                    href={"/api/auth/logout"}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                
              </>
            ) : (
              <>
                <Link
                  href={"/api/auth/register"}
                >
                  Sign Up
                </Link>

                <Link
                  href={"/api/auth/login"}
                >
                  Login
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              </>
            )}
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
