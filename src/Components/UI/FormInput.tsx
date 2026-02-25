import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import Label from "./Label";

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  serverError?: string;
  register: UseFormRegister<T>;
}

/**
 * Champ de formulaire générique avec label flottant et gestion des erreurs.
 *
 * Les erreurs sont reçues déjà extraites depuis le composant parent (qui connaît
 * les types du formulaire), ce qui évite tout couplage à un type de formulaire
 * spécifique.
 *
 * @param error      - Message d'erreur côté client (validation Zod/RHF)
 * @param serverError - Message d'erreur côté serveur (retourné par la server action)
 */
export default function FormInput<T extends FieldValues>({
  name,
  label,
  type = "text",
  autoComplete,
  error,
  serverError,
  register,
}: FormInputProps<T>) {
  return (
    <div className="relative">
      <div className="relative">
        <input
          type={type}
          id={name}
          {...register(name)}
          placeholder=" "
          autoComplete={autoComplete}
          className="input peer"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error || serverError ? `${name}-error` : undefined}
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
      {error && (
        <p id={`${name}-error`} className="formError" role="alert">
          {error}
        </p>
      )}
      {serverError && !error && (
        <p id={`${name}-error`} className="formError" role="alert">
          {serverError}
        </p>
      )}
    </div>
  );
}
