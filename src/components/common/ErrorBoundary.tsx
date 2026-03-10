import type React from 'react';
import { type FallbackProps, ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button } from '@/components/ui/button';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	const errorMessage = error instanceof Error ? error.message : String(error);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-destructive/10 p-6 text-center">
			<h2 className="mb-4 text-2xl font-bold text-destructive">Oops! Algo deu errado.</h2>
			<pre className="mb-6 max-w-lg overflow-auto rounded bg-destructive/20 p-4 text-sm font-mono">
				{errorMessage}
			</pre>
			<div className="flex gap-4">
				<Button onClick={resetErrorBoundary} variant="default">
					Tentar novamente
				</Button>
				<Button onClick={() => window.location.reload()} variant="outline">
					Recarregar aplicação
				</Button>
			</div>
		</div>
	);
}

export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ReactErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// Lógica para resetar o estado da aplicação aqui, se necessário.
			}}
		>
			{children}
		</ReactErrorBoundary>
	);
};
