"use client"

import React from 'react'
import ErrorBoundary from './error-boundary'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  )
}
