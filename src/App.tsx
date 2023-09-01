import "./styles/app.scss";
import { useForm, SubmitHandler } from "react-hook-form";


type FormData = {
  name: string;
  email: string;
  business: string;
  content: string;
};


const App = () => {
  const {
    register, 
    handleSubmit,
    formState: {errors}
  
  } = useForm<FormData>();

  const handleSave: SubmitHandler<FormData> = (data) => {
    console.log(data);
    console.log(errors);
    // Send data to Slack
  //   try {
  //     const response = await fetch(YOUR_SLACK_WEBHOOK_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         text: `New form submission:\nName: ${data.name}\nEmail: ${data.email}\n...`,
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log('Form data sent to Slack successfully');
  //     } else {
  //       console.error('Failed to send form data to Slack');
  //     }
  //   } catch (error) {
  //     console.error('Error sending form data to Slack:', error);
  //   }
  // }
  }
  return (
    <main>
      <section className="content__page-title">
        <h1>お問い合わせ</h1>
      </section>
      <section className="content__maincont">
        <p className="content__form-title">
          土日祝を除く3営業日以内に担当者よりご連絡させていただきます。お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。
        </p>
        <form 
        className="container"
        onSubmit={handleSubmit(handleSave)}
        
        >
          <div className="input__box">
            <input
              className={errors.name ? "input__text input-error" : "input__text"}
              type="text"
              placeholder=" "
              {...register('name',
              {required: {
                value: true,
                message: "お名前を入力してください"
              }, 
                maxLength: {
                  value: 30,
                  message: "お名前は30文字以内で入力してください"
                }
              })}
            />
            <label className={errors.name ? "input__label label-error" : "input__label"}>お名前 *</label>
            <div className="error-message">
              {errors.name?.message}
            </div>
          </div>
          <div className="input__box">
            <input
              className={errors.email ? "input__text input-error" : "input__text"}
              type="text"
              placeholder=" "
              {...register('email',
              {required: {
                value: true,
                message: "メールアドレスを入力してください"
              },
                pattern: {
                value: /^\S+@\S+$/i,
                message: "有効なメールアドレスではありません"
              },
                maxLength: {
                  value: 254,
                  message: "メールアドレスは254文字以内で入力してください"
                }
            }
                
              )}
            />
            <label className={errors.email ? "input__label label-error" : "input__label"}>メールアドレス *</label>
            <div className="error-message">
              {errors.email?.message}
            </div>
          </div>
          <div className="radio__wrapper">
            <label className="radio__title">ご用件 *</label>
            <div className="radio__section">
              <input 
              type="radio" 
              id="dev" 
              value="開発案件プロデュースのご依頼・ご相談" 
              {...register("business", { required: {
                value: true,
                message: "ご用件を選択してください"
              } })}
              />
              <label>開発案件プロデュースのご依頼・ご相談</label>
            </div>
            <div className="radio__section">
              <input 
              type="radio" 
              id="info" 
              value="Essential Workwareについて" 
              {...register("business", { required: {
                value: true,
                message: "ご用件を選択してください"
              } })}
              />
              <label>Essential Workwareについて</label>
            </div>
            <div className="radio__section">
              <input 
              type="radio" 
              id="other" 
              value="その他" 
              {...register("business", { required: {
                value: true,
                message: "ご用件を選択してください"
              } })} 
              />
              <label>その他</label>
            </div>
            <div className="error-message">
              {errors.business?.message}
            </div>
          </div>
          <div className="input__box">
            <textarea
              className={errors.content ? "input__textarea input-error" : "input__textarea"}
              placeholder=""
              id="text"
              cols={30}
              rows={8}
              {...register("content", {required: {
                value: true,
                message: "お問い合わせ内容を入力してください"
              },
                maxLength: {
                  value: 300,
                  message: "お問い合わせ内容は300文字以内で入力してください"
                }
            })}
            ></textarea>
            <label className={errors.content ? "input__label label-error" : "input__label"}>お問い合わせ内容 *</label>
            <div className="error-message">
              {errors.content?.message}
            </div>
          </div>
          <input 
          className="submit__button" 
          type="submit" 
          value="内容確認" />
        </form>
      </section>
    </main>
  );
};

export default App;
