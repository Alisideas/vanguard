'use client';

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t bg-white py-4 flex flex-col items-center justify-center gap-2 ">
        <div className="text-sm text-gray-500">
          ساخته شده با ❤️ برای بازی مافیا
        </div>
        <div className="underline cursor-pointer text-sm text-gray-500 hover:text-gray-700">از طرف هکر</div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/Alisideas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            {/* GitHub icon (shadcn style) */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .268.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2Z"
              />
            </svg>
          </Link>
          <Link
            href="mailto:alirezakbarim@gmail.com"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            {/* Email icon (shadcn style) */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.75-1.25a1.25 1.25 0 0 0-1.25 1.25v.637l8.25 5.5 8.25-5.5V6.75a1.25 1.25 0 0 0-1.25-1.25H4.75Zm15.25 3.363-7.613 5.08a1 1 0 0 1-1.124 0L3.25 8.863v8.387a1.25 1.25 0 0 0 1.25 1.25h14.5a1.25 1.25 0 0 0 1.25-1.25V8.863Z"
              />
            </svg>
          </Link>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          © {new Date().getFullYear()} Vanguard Mafia Game. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
