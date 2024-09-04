"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  const { isSignedIn, signOut } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Trang Chủ</h1>
      {isSignedIn ? (
        <button
          onClick={() => signOut()}
        >
          Đăng xuất
        </button>
      ) : (
        <Link href="/sign-in">
          <p >Đăng nhập</p>
        </Link>
      )}
    </div>
  );
}