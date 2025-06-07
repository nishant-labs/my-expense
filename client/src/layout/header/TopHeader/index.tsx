import { Col, Menu, Row, Space, Typography } from 'antd';
import { TOP_MENUS } from '../../../constants/topMenu';
import { useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

const { Link } = Typography;

export const TopHeader = () => {
	const navigate = useNavigate();

	const handleMenuClick = (info: MenuInfo) => {
		navigate(info.key);
	};
	return (
		<Row style={{ flexFlow: 'nowrap', height: '64px' }}>
			<Col span={2}>
				<Link href="/" style={{ marginLeft: '-50px' }}>
					<Space>
						<img
							draggable="false"
							src="/brand-dark-no-border.png"
							alt="logo"
							style={{ width: '160px', height: '57px' }}
						/>
						{/* <Title style={{ display: 'inline-block', color: '#fff', marginBottom: 'unset' }}>My Expense</Title> */}
					</Space>
				</Link>
			</Col>
			<Col span={18}>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={handleMenuClick}
					defaultSelectedKeys={['home']}
					items={TOP_MENUS}
				/>
			</Col>
		</Row>
	);
};
