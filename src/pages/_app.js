import "@/styles/globals.css";
import { ConfigProvider } from 'antd';

import theme from '@/theme/themeConfig';

const App = ({ Component, pageProps }) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
