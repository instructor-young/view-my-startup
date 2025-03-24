import React from "react";

function Page({ children }) {
  return (
    <main id="page" className="py-10 max-w-1200 mx-auto">
      {children}
    </main>
  );
}

export default Page;
