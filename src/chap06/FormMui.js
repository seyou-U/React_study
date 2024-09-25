import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormMui() {
    //初期値を準備する
    const defaultValues = {
        name: '名無権兵衞',
        email: 'amin@example.com',
        gender: 'male',
        memo: ''
    };

    // フォームを初期化
    const { register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting} } = useForm({
        defaultValues
    });

    // サブミット時の処理
    const onsubmit = data => {
        return new Promise(resolve => {
            setTimeout(()=> {
                // resolveは処理が成功した時のメッセージを表示する関数
                resolve();
                console.log(data);
            }, 4000);
        });
    };

    // onerrorは引数でエラー情報(err)とイベントオブジェクト(e)を受け取ることができる
    const onerror = err => console.log(err);

    return(
        // handleSubmit(サブミット時の検証成功時, サブミット時の検証失敗時)
        <form onSubmit={handleSubmit(onsubmit, onerror)} onValidate>
            <div>
              <TextField label="名前" margin="normal"
                {...register('name', {
                    required: '名前は必須入力です。',
                    maxLength: {
                        value: 20,
                        message: '名前は20文字以内にしてください。'
                    }
                })}
                error={'name' in errors}
                helperText={errors.name?.message}
                />
            </div>
            <div>
              <FormControl>
                  <FormLabel component="legend">性別:</FormLabel>
                  <RadioGroup name="gender">
                    <FormControlLabel value="male" control={<Radio />} label="男性"
                      {...register('gender', {
                        required: '性別は必須です。',
                      })}
                    />
                    <FormControlLabel value="female" control={<Radio />} label="女性"
                      {...register('gender', {
                        required: '性別は必須です。',
                      })}
                    />
                  </RadioGroup>
                  {/* Radio要素はerror/helperTextなどの属性がないので代わりにFormHelperText要素を用いて表現している */}
                  <FormHelperText error={'gender' in errors}>
                    {errors.gender?.message}
                  </FormHelperText>
              </FormControl>
            </div>
            <div>
              <TextField type="email" label="メールアドレス" margin="normal"
                {...register('email', {
                    required: 'メールアドレスは必須入力です。',
                    pattern: {
                        value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                        message: 'メールアドレスの形式が不正です。'
                    }
                })}
                error={'email' in errors}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField label="メモ" margin="normal" multiline
                {...register('memo', {
                    required: '備考は必須入力です。',
                    maxLength: {
                        value: 10,
                        message: '名前は10文字以内にしてください。'
                    },
                })}
                error={'memo' in errors}
                helperText={errors.memo?.message} />
            </div>
            <div>
              <Button variant="contained" type="submit">送信</Button>
            </div>
        </form>
    );
}
