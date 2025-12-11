"use client";

import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

const Textarea = ({ label, className = "", ...props }: TextareaProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-semibold">{label}</label>}
    <textarea className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`} {...props} />
  </div>
);

export default Textarea;