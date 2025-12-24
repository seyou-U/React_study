import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Button } from "@mui/material";

export default function HookThemeButton() {
    const { mode, toggleMode } = useContext(ThemeContext);
    return (
        <Button variant="contained" onClick={toggleMode}>
            Mode {mode}
        </Button>
    );
}
