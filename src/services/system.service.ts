import { invoke } from '@tauri-apps/api/core';

/**
 * Exemplo de camada de serviço para desacoplar lógica do Tauri dos componentes/composables.
 */
export const SystemService = {
  async getSystemInfo(): Promise<string> {
    try {
      return await invoke<string>('get_system_info');
    } catch (error) {
      console.error('Falha ao obter info do sistema:', error);
      throw error;
    }
  },

  // Adicione outras chamadas de sistema aqui
};
