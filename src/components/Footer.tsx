import React from 'react'
import logo from '../assets/nav_title_footer.svg'

const Footer = () => {
  return (
    <>
    <footer>
    <div className="footer">
      <div className="footer__left">
        <img src={logo} alt="essential workware" />
      </div>
      <div className="footer__right">
      <div className="footer__link">
        <a href="">ホーム</a>
        <a href="">活用例</a>
        <a href="">特徴・機能</a>
      </div>
      <div className="footer__link">
        <a href="">ブログ</a>
        <a href="">お問い合わせ</a>
        <a href="">会社情報</a>
      </div>
    </div>
    </div>
  </footer>
  </>
  )
}

export default Footer