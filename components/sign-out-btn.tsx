"use client";

import { signOut } from "next-auth/react";
import { Button } from "@components/ui/button";
import { LogOut } from "lucide-react";

const SignOutBtn = () => (
  <Button variant="ghost" size="icon" onClick={() => signOut()}>
    <LogOut className="h-5" />
  </Button>
);

export default SignOutBtn;
