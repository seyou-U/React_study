import { useEffect, useState } from "react";


// delay秒だけ処理を休止するsleep関数
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

// 天気情報を取得するための関数
const fetchWeather = async () => {
    // 処理を遅延させ、ローディングメッセージを表示させるための休止処理
    await sleep(2000);
    // 動作確認完了したため、Apiキーをダミーに変更している
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=HogeHoge&lang=ja&appid=××××××××××××××××××`);

    // 戻り値はPromise (非同期通信の結果を成功もしくは失敗で返すオブジェクト)
    if (res.ok) { return res.json(); }
    throw new Error(res.statusText);
};

export default function QueryPre({ id }) {
    // 天気情報(info), loading(ロード中か), error(エラー情報)を準備
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // コンポーネント起動時に天気情報を取得
    // useEffect関数はコンポーネント起動時に実行される
    useEffect(() => {
        setLoading(true);
        fetchWeather()
          // 成功時にはinfoを更新
          .then(result => setData(result))
          // 失敗時にはerrorを更新
          .catch(err => setError(err))
          // 成功、失敗に関わらずloadingを更新する
          .finally(() => setLoading(false))
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    // 通信エラーが発生した場合には、エラーメッセージを表示する
    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <figure>
            <img
            src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}/>
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}
