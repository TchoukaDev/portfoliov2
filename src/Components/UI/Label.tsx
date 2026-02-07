interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={`
        absolute left-3 transition-all bg-transparent cursor-text italic
        
        /* État par défaut : placeholder visible (input vide) */
        peer-placeholder-shown:top-4 
        peer-placeholder-shown:text-sm 
        md:peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-500

        
        /* Quand l'input a le focus */
        
        peer-focus:top-1 
        peer-focus:text-xs! 
        peer-focus:text-blue-600!
        
        /* ✅ Quand l'input a une valeur  */
        peer-[:not(:placeholder-shown)]:top-1 
        peer-[:not(:placeholder-shown)]:text-xs 
        peer-[:not(:placeholder-shown)]:text-gray-500
       
      `}
    >
      {children}
    </label>
  );
}