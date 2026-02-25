"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginSchema, LoginFormData } from "@/lib/zod-schemas";
import FormInput from "@/Components/UI/FormInput";
import Button from "@/Components/UI/Button";

export default function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsPending(true);
    setServerError(null);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    setIsPending(false);

    if (result?.error) {
      setServerError("Email ou mot de passe incorrect");
    } else {
      router.push("/admin/articles");
      router.refresh();
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-md mx-auto"
    >
      <FormInput
        name="email"
        label="Email*"
        type="email"
        autoComplete="email"
        register={register}
        error={errors.email?.message}
      />
      <FormInput
        name="password"
        label="Mot de passe*"
        type="password"
        autoComplete="current-password"
        register={register}
        error={errors.password?.message}
      />

      {serverError && (
        <p className="formError text-center" role="alert">{serverError}</p>
      )}

      <div className="block mx-auto">
        <Button type="submit" disabled={isSubmitting || isPending}>
          {isSubmitting || isPending ? (
            <span className="flex items-center gap-2">
              Connexion...{" "}
              <span className="inline-block w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
            </span>
          ) : (
            "Se connecter"
          )}
        </Button>
      </div>
    </form>
  );
}
