function sleep(delay) {
    let start = Date.now();
    while (Date.now() - start < delay);
}

// delayミリ秒の遅延を発生させる
export default function HeavyUI({delay}) {
    sleep(delay);
    return <p>遅延時間は{delay}ミリ秒</p>
}
