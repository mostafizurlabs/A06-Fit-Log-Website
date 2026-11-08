"use client";

import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { PlanProvider } from "@/context/PlanContext";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PlanProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 pt-16 pb-10">
          {children}
        </main>

        <Footer />
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #2a2a2a",
          },
        }}
      />
    </PlanProvider>
  );
};

export default ClientLayout;