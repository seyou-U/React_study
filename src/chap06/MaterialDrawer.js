import { useState } from "react";
import { AccountTree, Home, Info, Mail } from "@mui/icons-material";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// ドロワーの実装 / ハンバーガーメニュー作成に活かすことができる
const menu = [
    { title: 'ホーム', href: 'home.html', icon: Home },
    { title: '問い合わせ', href: 'contact.html', icon: Mail },
    { title: '会社概要', href: 'company.html', icon: Info },
    { title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree },
];

export default function MaterialDrawer() {
    // ドロワー開閉のためのフラグ
    const [show, setShow] = useState(false);
    // ボタンクリック時に呼び出されるハンドラー (showを反転する)
    const handleDraw = () => setShow(!show);

    return(
      <>
        <Button onClick={handleDraw}>ドローワー</Button>
        {/* Drawer要素を用いることでドロワーを定義することができる */}
        {/* anchor: ドロワーが現れる方向について指定する  open: ドロワーを表示させるかどうか */}
        <Drawer anchor="left" open={show}>
            {/* Boxは配下のコンポーネントをひとまとめにするためのコンテナーである。今回はheightプロパティを指定することでブラウザの高さを一杯に拡げている*/}
            <Box sx={{ height: '100vh' }} onClick={handleDraw}>
                {/* List要素を用いることでリストを形成することができる。 */}
                <List>
                {/* あらかじめ用意した配列をメニューとして展開 */}
                {menu.map(obj => {
                  const Icon = obj.icon;
                  return (
                    <ListItem key={obj.title}>
                      <ListItemButton href={obj.href}>
                        <ListItemIcon><Icon /></ListItemIcon>
                        <ListItemText primary={obj.title}/>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
                </List>
            </Box>
        </Drawer>
      </>
    );
}
