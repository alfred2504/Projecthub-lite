"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, className = "", ...props }: InputProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-semibold">{label}</label>}
    <input className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`} {...props} />
  </div>
);

export default Input;