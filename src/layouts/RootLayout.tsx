import { Outlet } from 'react-router-dom';
import { Updater } from '@/components/Updater';
import { TitleBar } from '@/components/common/TitleBar';
import { useTheme } from '@/composables';

export default function RootLayout() {
	useTheme();

	return (
		<div className="min-h-screen bg-background text-foreground pt-8">
			<TitleBar />
			<Outlet />
			<Updater />
		</div>
	);
}
