import { Layout } from 'antd';
import { AppHeader } from './header';
import { AppBody } from './body';
import { AppFooter } from './footer';

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {};

const contentStyle: React.CSSProperties = {
	minHeight: 'calc(100vh - 135px)',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#rgba(0,0,0,0.65)',
	backgroundColor: '#f0f3fa',
};

const layoutStyle: React.CSSProperties = {
	width: '100vw',
};

export const AppLayout = () => {
	return (
		<Layout style={layoutStyle}>
			<Header style={headerStyle}>
				<AppHeader />
			</Header>
			<Content style={contentStyle}>
				<AppBody />
			</Content>
			<Footer style={footerStyle}>
				<AppFooter />
			</Footer>
		</Layout>
	);
};
