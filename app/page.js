"use client";

import NotAuthenticated from "@/components/Shared/NotAuthenticated";

function Home() {
  return (
    <NotAuthenticated>
      <div>
        <title>Home - User & Product</title>
        <h1 className="text-4xl font-bold text-center mmd:mt-24">
          Welcome to User & Product Home Page
        </h1>
      </div>
    </NotAuthenticated>
  );
}

export default Home;
