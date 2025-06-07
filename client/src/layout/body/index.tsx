import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Col, Row, Spin, theme } from 'antd';

export const AppBody = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Row align="middle" wrap={false}>
			<Col
				span={24}
				style={{
					background: colorBgContainer,
					padding: 24,
					borderRadius: borderRadiusLG,
					minHeight: 'calc(100vh - 135px)',
				}}
			>
				<Suspense fallback={<Spin fullscreen indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />}>
					<Outlet />
				</Suspense>
			</Col>
		</Row>
	);
};
