import type { Metadata } from "next";

import { LoginForm } from "@ui-auth/components/client/forms/login-form";

export const metadata: Metadata = {
  title: "G-Force Login",
  description: "G-Force Login",
};

export default function LoginPage() {
  return <LoginForm />;
}
