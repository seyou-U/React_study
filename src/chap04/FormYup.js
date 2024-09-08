/* eslint-disable no-template-curly-in-string */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

// 特定のフィールドだけでなく、複数のフィールドに適応したい場合に有効
// yup.addMethod(データ型, 検証名, 検証ルール)
// 検証ルールはアロー関数は使えずfunctionで定義する。戻り値はschemaオブジェクトであること
yup.addMethod(yup.string, 'ng', function() {
    return this.test('ng',
        ({ label }) => `${label}にNGワードが含まれています。`,
        value => {
            // 不適切ワードの準備
            const ngs = ['死', 'グロ', '暴力'];
            // 入力文字列に不適切ワードが含まれているか判定する
            for (const ng of ngs) {
                if (value.includes(ng)) {
                    return false;
                }
            }
            return true;
        }
    );
});
// Yupを利用する場合はまずschemaを定義する。schemaはデータ項目と検証ルールのことを指す
// フィールド名: yup
//  .データの型
//  .label(フィールドの日本語名)
//  .検証ルール ...を記述することができる
// transformメソッドを利用することで独自の変換ルールを自作することができる。(変換済みの値はvalue, 元の値がorgValue, 戻り値は変換済みの値を返す)
const schema = yup.object({
    name: yup
      .string()
      .label('名前')
      .transform((value, orgValue) => value.normalize('NFKC'))
      .required('${label}は必須入力です。')
      .max(20, '${label}は${max}文字以内で入力してください。')
      .trim().lowercase(),
    gender: yup
      .string()
      .label('性別')
      .required('${label}は必須項目です。'),
    email: yup
      .string()
      .label('メールアドレス')
      .required('${label}は必須入力です。')
      .email('${label}の形式が不正です。'),
    memo: yup
      .string()
      .label('備考')
      .required('${label}は必須入力です。')
      .min(10, '${label}は${min}文字以上で入力してください。')
      .ng()
      // testメソッドを用いて独自のルールを作成することができる。
      // test(検証名, 検証メッセージ, 検証ルール(引数は入力値、戻り値は真偽値))
    //   .test('ng',
    //     ({ label }) => `${label}にNGワードが含まれています。`,
    //     value => {
    //         // 不適切ワードの準備
    //         const ngs = ['死', 'グロ', '暴力'];
    //         // 入力文字列に不適切ワードが含まれているか判定する
    //         for (const ng of ngs) {
    //             if (value.includes(ng)) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }),
});

export default function FormYup() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '名無権兵衞',
            email: 'amin@example.com',
            gender: 'male',
            memo: ''
        },
        // Yupに検証を委ねる
        // 定義された検証ルールをReact Hook Formに紐づけるのはResolverの役目
        resolver: yupResolver(schema)
    });

    // サブミット時の処理準備
    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return(
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">名前:</label><br/>
                {/* register(フィールド名, [動作オプション]) */}
                <input id="name" type="text"
                {...register('name')} />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">性別:</label><br/>
                <label>
                    <input value="male" type="radio"
                    {...register('gender')} />男性
                </label>
                <label>
                    <input value="female" type="radio"
                    {...register('gender')} />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">メールアドレス:</label><br/>
                <input id="email" type="email"
                {...register('email')} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">備考:</label><br/>
                <input id="memo"
                {...register('memo')} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">送信</button>
            </div>
        </form>
    )
};
