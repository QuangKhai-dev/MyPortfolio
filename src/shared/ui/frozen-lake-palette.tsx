"use client";

import React from "react";

const colors = [
  { name: "Background", hex: "#14161a" },
  { name: "Foreground", hex: "#f5f7fa" },
  { name: "Card", hex: "#1a1d24" },
  { name: "Primary", hex: "#3db4e8" },
  { name: "Secondary", hex: "#3d4149" },
  { name: "Muted", hex: "#2a2d35" },
  { name: "Muted Foreground", hex: "#b8c0cc" },
  { name: "Accent", hex: "#2da3d4" },
  { name: "Border", hex: "#353841" },
];

const FrozenLakePalette = () => (
  <div className="p-8 space-y-6">
    <h2 className="text-2xl font-bold">Frozen Lake Color Palette</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {colors.map((c) => (
        <div key={c.name} className="border rounded-lg overflow-hidden bg-card">
          <div className="h-24 w-full" style={{ backgroundColor: c.hex }} />
          <div className="p-4 flex justify-between items-center">
            <span className="font-semibold">{c.name}</span>
            <span className="text-sm text-muted-foreground font-mono">{c.hex}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FrozenLakePalette;
