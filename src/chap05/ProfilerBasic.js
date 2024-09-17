import { Profiler } from "react";
import HeavyUI from "./HeavyUI";

export default function ProfilerBasic() {
    // パフォオーマンス計測用の関数
    // バックエンドに計測情報を送信&記録したい際に使われる
    const handleMeasure = (id, phase, actualDuration, baseDuration, startTime, endTime) => {
        // idの属性値
        console.log('id: ', id);
        // 描画の発生理由
        console.log('phase: ', phase);
        // Profiler配下の描画に要する時間
        console.log('actualDuration: ', actualDuration);
        // メモ化などが実施されずにProfiler配下が描画される場合にかかると予想されている時間
        console.log('baseDuration: ', baseDuration);
        // 描画開始時刻
        console.log('startTime: ', startTime);
        // 描画終了時刻
        console.log('endTime: ', endTime);
    };

    // Profiler(プロファイラー)とは、プログラムの実行時の各種情報を収集 / 解析するツールのこと
    // <Profiler>要素をアプリ全体もしくは一部を括ることで、配下の要素が描画に要した時間を計測することができる。
    return (
        <Profiler id="heavy" onRender={handleMeasure}>
            <HeavyUI delay={1500} />
            <HeavyUI delay={500} />
            <HeavyUI delay={2000} />
        </Profiler>
    );
}
