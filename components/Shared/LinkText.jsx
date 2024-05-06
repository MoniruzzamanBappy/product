import Link from "next/link";
import React from "react";

function LinkText(props) {
  const { link, className, children } = props;
  return (
    <Link
      href={`${link ? link : "/"}`}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
    >
      <span
        className={`text-linkText break-words print:text-black hover:underline cursor-pointer ${
          className ? className : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
}

export default LinkText;
