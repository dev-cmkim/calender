import { createGlobalStyle } from 'styled-components';
// 각 폰트 파일 import
import Font_Light from '../assets/font/Font-Light.woff';
import Font_Regular from '../assets/font/Font-Regular.woff';
import Font_Bold from '../assets/font/Font-Bold.woff';
import NotoSansKR_Thin from '../assets/font/NotoSansKR_Thin.woff';
import NotoSansKR_Light from '../assets/font/NotoSansKR_Light.woff';
import NotoSansKR_Regular from '../assets/font/NotoSansKR_Regular.woff';
import NotoSansKR_Medium from '../assets/font/NotoSansKR_Medium.woff';
import NotoSansKR_Bold from '../assets/font/NotoSansKR_Bold.woff';
import NotoSansKR_Black from '../assets/font/NotoSansKR_Black.woff';
import NanumMyeongjo_Regular from '../assets/font/NanumMyeongjo_Regular.woff';
import NanumMyeongjo_Bold from '../assets/font/NanumMyeongjo_Bold.woff';
import NanumMyeongjo_ExtraBold from '../assets/font/NanumMyeongjo_ExtraBold.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Light}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Regular}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Bold}) format('woff');
        font-weight: bold;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKR_Thin}) format('woff');
        font-weight: 100;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKR_Light}) format('woff');
        font-weight: 300;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKR_Regular}) format('woff');
        font-weight: 400;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKR_Medium}) format('woff');
        font-weight: 500;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKR_Bold}) format('woff');
        font-weight: 700;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKR_Black}) format('woff');
        font-weight: 900;
    }
    @font-face {
        font-family: "NanumMyeongjo";
        src: local("NanumMyeongjo"), url(${NanumMyeongjo_Regular}) format('woff');
        font-weight: 400;
        }
    @font-face {
        font-family: "NanumMyeongjo";
        src: local("NanumMyeongjo"), url(${NanumMyeongjo_Bold}) format('woff');
        font-weight: 700;
        }
    @font-face {
        font-family: "NanumMyeongjo";
        src: local("NanumMyeongjo"), url(${NanumMyeongjo_ExtraBold}) format('woff');
        font-weight: 800;
        }
`;
