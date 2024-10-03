import { useQuery } from "react-query";

// delay秒だけ処理を休止するsleep関数
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

// 天気情報を取得するための関数
const fetchWeather = async() => {
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=××××××××××××××××××`);
    if (res.ok) { return res.json(); }
    throw new Error(res.statusText);
}

export default function QueryBasic() {
    // fetchWeather関数でデータを取得する
    // useQuery関数でクエリを発行する。useQuery(一意なkey, query関数)
    const {data} = useQuery('weather', fetchWeather);

    return (
    // figureタグは図や写真などのまとまりを表すタグ
      <figure>
        <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main} />
        <figcaption>{data?.weather?.[0]?.description}</figcaption>
      </figure>
    );
}
