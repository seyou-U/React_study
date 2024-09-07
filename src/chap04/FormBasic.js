import { useForm } from "react-hook-form";

export default function FormBasic() {
    //初期値を準備する
    const defaultValues = {
        name: '名無権兵衞',
        email: 'amin@example.com',
        gender: 'male',
        memo: ''
    };

    // フォームを初期化
    // useForm(動作オプション)の使い方をする
    // register フォーム要素に紐付けるべきイベントハンドラーなどを含んだオブジェクトのこと
    // isDirtyはユーザーがいずれかの要素を変更したか
    // isValidは入力値が正しいかどうか
    const { register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting} } = useForm({
        defaultValues
    });

    // サブミット時の処理
    // onsubmitは引数で入力値(data)とイベントオブジェクト(e)を受け取ることができる
    // サブミット時に4000ミリ秒に処理 (ダミーの遅延処理)
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
            {/* 検証ルールなどをフォームに紐付け */}
            <div>
                <label>名前:</label><br/>
                {/* register(フィールド名, [動作オプション]) */}
                <input id="name" type="text"
                {...register('name', {
                    required: '名前は必須入力です。',
                    maxLength: {
                        value: 20,
                        message: '名前は20文字以内にしてください。'
                    }
                })} />
                {/* errors.フィールド名.(type or ref or message) で表現することができる */}
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label>性別:</label><br/>
                <label>
                    <input value="male" type="radio"
                    {...register('gender', {
                        required: '性別は必須です。',
                        maxLength: {
                            value: 20,
                            message: '名前は20文字以内にしてください。'
                        }
                    })} />男性
                </label>
                <label>
                    <input value="female" type="radio"
                    {...register('gender', {
                        required: '性別は必須です。',
                        maxLength: {
                            value: 20,
                            message: '名前は20文字以内にしてください。'
                        }
                    })} />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">メールアドレス:</label><br/>
                <input id="email" type="email"
                {...register('email', {
                    required: 'メールアドレスは必須入力です。',
                    pattern: {
                        value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                        message: 'メールアドレスの形式が不正です。'
                    }
                })} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">備考:</label><br/>
                <input id="memo"
                {...register('memo', {
                    required: '備考は必須入力です。',
                    maxLength: {
                        value: 10,
                        message: '名前は10文字以内にしてください。'
                    },
                    validate: {
                        // 検証名: 検証ルールの形式で記述する
                        // formValuesは今回使われていない。これはメールアドレスとメールアドレス(確認)のような複数項目にまたがる検証の際に利用される
                        ng: (value, formValues) => {
                            // 不適切ワードの準備
                            const ngs = ['暴力', '死', 'グロ'];

                            // 入力文字列に不適切ワードが含まれているか判定する
                            for (const ng of ngs) {
                                if (value.includes(ng)) {
                                    return '備考にNGワードが含まれています。'
                                }
                            }
                            return true;
                        }
                    },
                })} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>送信</button>
                {isSubmitting && <div>...送信中...</div>}
            </div>
        </form>
    )
};
