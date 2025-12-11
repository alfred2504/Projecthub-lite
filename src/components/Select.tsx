"use client";

import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select = ({ label, children, className = "", ...props }: SelectProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-semibold">{label}</label>}
    <select className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`} {...props}>
      {children}
    </select>
  </div>
);

export default Select;