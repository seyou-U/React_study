export default function WrapPromise(promise) {
    // Promiseの状態を管理する。(pending, fulfilled, rejected)
    let status = 'pending';

    // Promiseから受け取ったデータ
    let data;

    // 元のPromiseに後処理を付与
    let wrapper = promise.then(
        // 成功時にはstatusをfulfilled(成功)、dataに取得したデータを設定する
        result => {
            status = 'fulfilled';
            data = result;
        },

        // 失敗時にはstatusをrejected (失敗)、dataにエラーオブジェクトを設定
        e => {
            status = 'rejected';
            data = e;
        },
    );

    return {
        get() {
            switch (status) {
                case 'fulfilled':
                    return data; // 成功時は実データを返却
                case 'rejected':
                    throw data; // 失敗時はエラーをスロー
                case 'pending':
                    throw wrapper; // 完了前はPromiseをスロー
                default:
                    break;
            }
        }
    };
}
