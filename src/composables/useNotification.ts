import {
	isPermissionGranted,
	requestPermission,
	sendNotification,
} from '@tauri-apps/plugin-notification';

export function useNotification() {
	const checkPermission = async () => {
		return await isPermissionGranted();
	};

	const requestNotificationPermission = async () => {
		const permission = await requestPermission();
		return permission === 'granted';
	};

	const notify = async (title: string, body?: string) => {
		try {
			let permissionGranted = await isPermissionGranted();

			if (!permissionGranted) {
				const permission = await requestPermission();
				permissionGranted = permission === 'granted';
			}

			if (permissionGranted) {
				sendNotification({ title, body });
			} else {
			}
		} catch (_error) {}
	};

	return {
		checkPermission,
		requestNotificationPermission,
		notify,
	};
}
