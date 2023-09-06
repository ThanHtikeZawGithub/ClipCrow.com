import "./styles/app.scss";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormConfirm from "./FormConfirm";
import FormComplete from "./FormComplete";

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
    formState: { errors },
  } = useForm<FormData>();

  const [formData, setFormData] = useState<FormData | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSave = (data: FormData) => {
    setFormData(data);
    setIsConfirmed(true);
  };

  const handleEdit = () => {
    setIsConfirmed(false);
  };

  const handleConfirm = async () => {
    // Send data to Slack
    if (formData) {
      try {
        await fetch(
          "https://hooks.slack.com/services/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",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: `New form submission:\nName: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nContent: ${formData.content}`,
            }),
          }
        );
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error sending form data to Slack:", error);
        // You can add code here for error handling
      }
    }
  };

  return (
    <main>
      <section className="content__page-title">
        <h1>お問い合わせ</h1>
      </section>
      {isSubmitted ? (
        <FormComplete />
      ) : (
        <section className="content__maincont">
          {isConfirmed ? (
            <FormConfirm
              Back={handleEdit}
              Confirm={handleConfirm}
              data={formData}
            />
          ) : (
            <>
              <p className="content__form-title">
                土日祝を除く3営業日以内に担当者よりご連絡させていただきます。お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。
              </p>
              <form className="container" onSubmit={handleSubmit(handleSave)}>
                <div className="input__box">
                  <input
                    className={
                      errors.name ? "input__text input-error" : "input__text"
                    }
                    type="text"
                    placeholder=" "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "お名前を入力してください",
                      },
                      maxLength: {
                        value: 30,
                        message: "お名前は30文字以内で入力してください",
                      },
                    })}
                  />
                  <label
                    className={
                      errors.name ? "input__label label-error" : "input__label"
                    }
                  >
                    お名前 *
                  </label>
                  <div className="error-message">{errors.name?.message}</div>
                </div>
                <div className="input__box">
                  <input
                    className={
                      errors.email ? "input__text input-error" : "input__text"
                    }
                    type="text"
                    placeholder=" "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "メールアドレスを入力してください",
                      },
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "有効なメールアドレスではありません",
                      },
                      maxLength: {
                        value: 254,
                        message:
                          "メールアドレスは254文字以内で入力してください",
                      },
                    })}
                  />
                  <label
                    className={
                      errors.email ? "input__label label-error" : "input__label"
                    }
                  >
                    メールアドレス *
                  </label>
                  <div className="error-message">{errors.email?.message}</div>
                </div>
                <div className="radio__wrapper">
                  <label className="radio__title">ご用件 *</label>
                  <div className="radio__section">
                    <input
                      type="radio"
                      id="dev"
                      value="開発案件プロデュースのご依頼・ご相談"
                      {...register("business", {
                        required: {
                          value: true,
                          message: "ご用件を選択してください",
                        },
                      })}
                    />
                    <label>開発案件プロデュースのご依頼・ご相談</label>
                  </div>
                  <div className="radio__section">
                    <input
                      type="radio"
                      id="info"
                      value="Essential Workwareについて"
                      {...register("business", {
                        required: {
                          value: true,
                          message: "ご用件を選択してください",
                        },
                      })}
                    />
                    <label>Essential Workwareについて</label>
                  </div>
                  <div className="radio__section">
                    <input
                      type="radio"
                      id="other"
                      value="その他"
                      {...register("business", {
                        required: {
                          value: true,
                          message: "ご用件を選択してください",
                        },
                      })}
                    />
                    <label>その他</label>
                  </div>
                  <div className="error-message">
                    {errors.business?.message}
                  </div>
                </div>
                <div className="input__box">
                  <textarea
                    className={
                      errors.content
                        ? "input__textarea input-error"
                        : "input__textarea"
                    }
                    placeholder=""
                    id="text"
                    cols={30}
                    rows={8}
                    {...register("content", {
                      required: {
                        value: true,
                        message: "お問い合わせ内容を入力してください",
                      },
                      maxLength: {
                        value: 300,
                        message:
                          "お問い合わせ内容は300文字以内で入力してください",
                      },
                    })}
                  ></textarea>
                  <label
                    className={
                      errors.content
                        ? "input__label label-error"
                        : "input__label"
                    }
                  >
                    お問い合わせ内容 *
                  </label>
                  <div className="error-message">{errors.content?.message}</div>
                </div>
                <input
                  className="submit__button"
                  type="submit"
                  value="内容確認"
                />
              </form>
            </>
          )}
        </section>
      )}
    </main>
  );
};

export default App;
