"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerSchema, RegisterFormData } from "@/lib/zod-schemas";
import { registerAction } from "@/actions/auth";
import { ActionResponse } from "@/actions/types";
import FormInput from "@/Components/UI/FormInput";
import Button from "@/Components/UI/Button";

export default function RegisterForm() {
  const router = useRouter();
  const [serverState, setServerState] = useState<ActionResponse | null>(null);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsPending(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, String(value)));

    const result = await registerAction(formData);
    setServerState(result);
    setIsPending(false);

    if (result.success) {
      router.push("/login");
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-md mx-auto"
    >
      <FormInput
        name="firstname"
        label="Prénom*"
        autoComplete="given-name"
        register={register}
        error={errors.firstname?.message}
        serverError={serverState?.fieldErrors?.firstname}
      />
      <FormInput
        name="name"
        label="Nom*"
        autoComplete="family-name"
        register={register}
        error={errors.name?.message}
        serverError={serverState?.fieldErrors?.name}
      />
      <FormInput
        name="email"
        label="Email*"
        type="email"
        autoComplete="email"
        register={register}
        error={errors.email?.message}
        serverError={serverState?.fieldErrors?.email}
      />
      <FormInput
        name="password"
        label="Mot de passe*"
        type="password"
        autoComplete="new-password"
        register={register}
        error={errors.password?.message}
        serverError={serverState?.fieldErrors?.password}
      />
      <FormInput
        name="confirmPassword"
        label="Confirmer le mot de passe*"
        type="password"
        autoComplete="new-password"
        register={register}
        error={errors.confirmPassword?.message}
        serverError={serverState?.fieldErrors?.confirmPassword}
      />

      {serverState?.error && !serverState.fieldErrors && (
        <p className="formError text-center" role="alert">{serverState.error}</p>
      )}

      <div className="block mx-auto">
        <Button type="submit" disabled={isSubmitting || isPending}>
          {isSubmitting || isPending ? (
            <span className="flex items-center gap-2">
              Inscription...{" "}
              <span className="inline-block w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
            </span>
          ) : (
            "Créer un compte"
          )}
        </Button>
      </div>
    </form>
  );
}
