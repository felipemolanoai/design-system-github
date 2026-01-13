// src/components/Button/Button.tsx
import './Button.css';

// Definimos qué propiedades acepta nuestro botón
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="custom-btn" onClick={onClick}>
      {label}
    </button>
  );
};