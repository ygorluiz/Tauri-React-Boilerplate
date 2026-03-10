import { Outlet } from 'react-router-dom';
import { Updater } from '@/components/Updater';
import { useTheme } from '@/composables';

export default function RootLayout() {
	useTheme();

	return (
		<div className="min-h-screen bg-background text-foreground">
			<Outlet />
			<Updater />
		</div>
	);
}
