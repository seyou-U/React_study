import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
// 本来は下記の「Unstable_Grid2」をインポートすべきであるが推奨されていないため上記で代用
// import Grid from '@mui/material/Unstable_Grid2';

export default function MaterialGrid() {
    return(
      // spacingはカラム間の余白を指している
      // xs属性は分割表現を指している
      <Grid container spacing={2}>
        <Grid xs={12} sm={9} md={6}>
          <Button variant="contained" fullWidth>1</Button>
        </Grid>
        <Grid xs={12} sm={3} md={2}>
          <Button variant="contained" fullWidth>2</Button>
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <Button variant="contained" fullWidth>3</Button>
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" fullWidth>4</Button>
        </Grid>
      </Grid>
    );
}
