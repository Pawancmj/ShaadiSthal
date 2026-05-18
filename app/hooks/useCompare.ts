"use client";

import { useState, useEffect, useCallback } from "react";

const COMPARE_KEY = "shaadisthal_compare_venues";
export const MAX_COMPARE = 3;

export function useCompare() {
  const [compareIds, setCompareIds] = useState<number[]>([]);

  const loadState = () => {
    try {
      const stored = localStorage.getItem(COMPARE_KEY);
      if (stored) {
        setCompareIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to parse compare storage", e);
    }
  };

  useEffect(() => {
    loadState();
    
    const handleStorage = (e: StorageEvent) => {
      if (e.key === COMPARE_KEY) {
        loadState();
      }
    };

    const handleCustom = () => {
      loadState();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("compare_updated", handleCustom);
    
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("compare_updated", handleCustom);
    };
  }, []);

  const toggleCompare = useCallback((id: number) => {
    setCompareIds((prev) => {
      let next = [...prev];
      if (next.includes(id)) {
        next = next.filter((v) => v !== id);
      } else {
        if (next.length >= MAX_COMPARE) {
          next.shift(); // Remove the oldest one
        }
        next.push(id);
      }
      localStorage.setItem(COMPARE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("compare_updated"));
      return next;
    });
  }, []);

  const clearCompare = useCallback(() => {
    localStorage.removeItem(COMPARE_KEY);
    setCompareIds([]);
    window.dispatchEvent(new Event("compare_updated"));
  }, []);

  return { compareIds, toggleCompare, clearCompare, MAX_COMPARE };
}
