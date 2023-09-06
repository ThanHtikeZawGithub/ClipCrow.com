import React from "react";
import "./styles/app.scss";

interface FormConfirmProps {
    Back: () => void; // Back is a function with no arguments and no return value
    Confirm: () => void; // Confirm is a function with no arguments and no return value
    data: any;
  }


const FormConfirm: React.FC<FormConfirmProps> = ({Back, Confirm, data}) => {
  return (
    <main>
    <section className="content__maincont">
        <div className="confirm__title">
        <h4>内容確認</h4>
        <p>ご入力いただいた内容をご確認いただき、よろしければ「送信」ボタンをクリックして下さい。</p>
        </div>
        <div className="confirm__section">
            <div className="confirm__info">
                <p>お名前 *</p>
                <p className="customer__info">{data.name}</p>
            </div>
            <div className="confirm__info">
                <p>メールアドレス *</p>
                <p className="customer__info">{data.email}</p>      
            </div>
            <div className="confirm__info">
                <p>ご用件 *</p>
                <p className="customer__info">{data.business}</p>
            </div>
            <div className="confirm__info">
                <p>お問い合わせ内容 *</p>
                <p className="customer__info">
                    {data.content}
                </p>
            </div>
        </div>
        <div className="confirm__button-section">
            <button onClick={Back} className="confirm__button prev">戻る</button>
            <button onClick={Confirm} className="confirm__button next">送信</button>
        </div>
    </section>
</main>
  )
}

export default FormConfirm