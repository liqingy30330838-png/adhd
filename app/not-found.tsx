"use client";

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center bg-white shadow-lg rounded-3xl border border-gray-200 p-8">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-lg text-slate-600 mb-6">页面未找到。请确认网址是否正确，或使用下面的链接返回首页。</p>
        <div className="space-x-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
          >
            返回主页面
          </Link>
          <Link
            href="/history"
            className="inline-flex items-center justify-center rounded-xl border border-indigo-600 px-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            查看历史记录
          </Link>
        </div>
      </div>
    </div>
  );
}
