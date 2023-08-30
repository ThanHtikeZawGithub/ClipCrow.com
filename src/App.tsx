
import './styles/app.scss';

const App = () => {
  return (
    <main>
    <section className="content__page-title">
      <h1>お問い合わせ</h1>
    </section>
    <section className="content__maincont">
      <p className="content__form-title">土日祝を除く3営業日以内に担当者よりご連絡させていただきます。お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。</p>
      <form className="container">
        <div className="input__box">
          <input 
          className="input__text" 
          type="text" 
          placeholder=" " 
          required
          />
          <label className="input__label">お名前 *</label>
        </div>
          <div className="input__box">
          <input className="input__text error" type="text" placeholder=" " required/>
          <label className="input__label">メールアドレス *</label>
          <div className="error-message">メールアドレスを入力してください</div>
        </div>
        <div className="radio__wrapper">
          <label className="radio__title">ご用件 *</label>
          <div className="radio__section">
            <input type="radio" id="dev" value="dev" name="questions"/>
            <label>開発案件プロデュースのご依頼・ご相談</label>
          </div>
          <div className="radio__section">
            <input type="radio" id="info" value="info" name="questions"/>
            <label>Essential Workwareについて</label>
          </div>
          <div className="radio__section">
            <input type="radio" id="other" value="other" name="questions"/>
            <label>その他</label>
          </div>
        </div>
        <div className="input__box">
          <textarea className="input__textarea" placeholder="" name="content" id="text" cols="30" rows="8" required></textarea>
          <label className="input__label">お問い合わせ内容 *</label>
        </div>
        <input className="submit__button" type="submit" value="内容確認" />
      </form>
    </section>
  </main>
  )
}

export default App
