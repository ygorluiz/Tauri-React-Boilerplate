import { invoke } from '@tauri-apps/api/core';

/**
 * Exemplo de camada de serviço para desacoplar lógica do Tauri dos componentes/composables.
 */
export const SystemService = {
	async getSystemInfo(): Promise<string> {
		return await invoke<string>('get_system_info');
	},

	// Adicione outras chamadas de sistema aqui
};
