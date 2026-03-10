import { z } from 'zod';

const envSchema = z.object({
	VITE_TAURI_ENV: z.enum(['development', 'production', 'test']).default('development'),
	// Adicione outras variáveis de ambiente aqui
});

export const env = envSchema.parse({
	VITE_TAURI_ENV: import.meta.env.VITE_TAURI_ENV,
});
