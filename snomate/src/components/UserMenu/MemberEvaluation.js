import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
    width : '30vh',
  },
  
  form: {
    width: '50%',
    marginTop: theme.spacing(1),
  },
}));

const currencies1 = [
  {
    value: 'good',
    label: '😀 최고의 성실조원! ^^',
  },
  {
    value: 'normal',
    label: '🙂 그럭저럭 괜찮조원 ㅎ',
  },
  {
    value: 'bad',
    label: '🙁 많이 바쁘셨던 것 같아요 ㅠ',
  },
];

const currencies2 = [
  {
    value: 'good',
    label: '😀 업무처리 천재! ^^',
  },
  {
    value: 'normal',
    label: '🙂 괜찮게 일을 해오셨어요 ㅎ',
  },
  {
    value: 'bad',
    label: '🙁 조금만 더 꼼꼼히 처리해주세요 ㅠ',
  },
];

const currencies3 = [
  {
    value: 'good',
    label: '😀 최고의 조장감! ^^',
  },
  {
    value: 'normal',
    label: '🙂 주어지면 잘해요 ㅎ',
  },
  {
    value: 'bad',
    label: '🙁 조금만 더 적극적으로 ㅠ',
  },
];

const currencies4 = [
  {
    value: 'good',
    label: '😀 현황공유의 귀재! ^^',
  },
  {
    value: 'normal',
    label: '🙂 필요하면 이야기해요 ㅎ',
  },
  {
    value: 'bad',
    label: '🙁 우리 자주 연락해요 ㅠ',
  },
];

export default function MemberEvaluation() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      
        <div>
            <form className={classes.root} noValidate autoComplete="off">       
              <h1></h1>📌
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Hardworking"
                  value={currency}
                  onChange={handleChange}
                  helperText="성실성을 평가해주세요"
                  variant="outlined"
                >
                  {currencies1.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                  ))}
                </TextField>
              </div>
              <h1></h1>📌
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Ability"
                  value={currency}
                  onChange={handleChange}
                  helperText="능력을 평가해주세요"
                  variant="outlined"
                >
                  {currencies2.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <h1></h1>📌
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Leadership"
                  value={currency}
                  onChange={handleChange}
                 helperText="리더십을 평가해주세요"
                  variant="outlined"
                >
                  {currencies3.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <h1></h1>📌
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Communication"
                  value={currency}
                  onChange={handleChange}
                  helperText="의사소통을 평가해주세요"
                  variant="outlined"
                >
                  {currencies4.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>              
              </div>
            </form>
        </div>      
    </Grid>
  );
}