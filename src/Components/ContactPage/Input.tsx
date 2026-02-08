import { Control, UseFormRegister } from "react-hook-form";
import Label from "../UI/Label";
import { ContactFormData } from "@/lib/zod-schemas";
import { SendMailResponse } from "@/actions/sendMail";
import { useFormState } from "react-hook-form";

interface InputProps {
    type: string;
    name: keyof ContactFormData;
    label: string;
    autoComplete: "email" | "given-name" | "family-name" | "tel";
    register: UseFormRegister<ContactFormData>;
    serverState: SendMailResponse | null;
    control: Control<ContactFormData>;
}


export default function Input({ type, name, label, autoComplete, register, serverState, control }: InputProps) {
    const { errors } = useFormState({ control, name });
    const fieldError = errors?.[name];
    return (
        <div className="w-full max-w-[400px] sm:w-fit relative">
            <div className="relative">
                <input
                    type={type}
                    id={name}
                    {...register(name)}
                    placeholder=" "
                    autoComplete={autoComplete}
                    aria-required="true"
                    className="input peer"
                    aria-invalid={fieldError ? "true" : "false"}
                    aria-errormessage={fieldError ? `${name}-error` : undefined}
                />
                <Label htmlFor={name}>
                    {label}
                </Label>
            </div>
            {/* Erreur côté client */}
            {fieldError && (
                <p id={`${name}-error`} className="formError" role="alert">{fieldError.message}</p>
            )}
            {/* Erreur côté serveur */}
            {serverState?.fieldErrors?.[name] && !fieldError && (
                <p id={`${name}-error`} className="formError" role="alert">{serverState.fieldErrors[name]}</p>
            )}
        </div>
    );
}