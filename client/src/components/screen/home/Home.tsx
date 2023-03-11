import { Layout } from 'antd';
  
const { Sider } = Layout;

const Home = () => {

    return (
		<Layout hasSider style={{background: 'white'}}>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh'
				}}
				theme="light"
				collapsed={false}
				width='300'
			>
			</Sider>
			<div>Home content</div>
		</Layout>
    );
};

export default Home;