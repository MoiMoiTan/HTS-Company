import React from "react";
import { set, unset, FormPatch, PatchEvent } from "sanity";

interface NumberWithSeparatorInputProps {
  value: number | string | undefined;
  onChange: (patch: FormPatch | PatchEvent | FormPatch[]) => void;
}

export default function NumberWithSeparatorInput(
  props: NumberWithSeparatorInputProps
) {
  const { value, onChange } = props;
  const displayValue =
    typeof value === "number" ? value.toLocaleString("vi-VN") : value || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\./g, "");
    if (!raw) {
      onChange(unset());
      return;
    }
    const num = Number(raw);
    if (!isNaN(num)) {
      onChange(set(num));
    }
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder="example: 1.000.000"
      style={{ width: "100%", padding: "8px", fontSize: "16px" }}
    />
  );
}
