"use client";

import { useState } from 'react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'hakinz2024';

export function useAdmin() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveContent = async (file: 'site-content.json' | 'projects.json', content: object) => {
    setSaving(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: ADMIN_PASSWORD,
          file,
          content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save');
      }

      return { success: true, message: data.message };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to save content';
      setError(message);
      return { success: false, message };
    } finally {
      setSaving(false);
    }
  };

  const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('admin_auth') === 'true';
  };

  const login = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('admin_auth');
  };

  return {
    saving,
    error,
    saveContent,
    isAuthenticated,
    login,
    logout,
  };
}
