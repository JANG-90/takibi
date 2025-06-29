import "./Footer.css"; // 파일 경로에 맞게 수정
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>公式アカウント</div>
      <br />
      <div>
        <Link to="/TermsofService">利用規約</Link> | <Link to="/PrivacyPolicy">プライバシー規約</Link> | <Link to="/PersonalizedAdvertisingTerms">パーソナライズド広告規約</Link> |
        <Link to="/VariousTermsandConditions">各種規約</Link> | <Link to="/Scta">特定商取引法に基づく表示</Link> | <Link to="/FeedbackandRequests">ご意見・ご要望 ヘルプ・お問い合わせ</Link>
      </div>
      <p>&copy; Copyright© 2025 Goden Egg Co.,ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
