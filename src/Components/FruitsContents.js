import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
//Css
import './Fruits.css';

const useStyles = makeStyles({
    root: {
        width: 'revert'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FruitsContents() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <div className="back-sky" />
            <Card className={classes.root} className="wrapper" >
                <CardContent>
                    <Typography component="h4" variant="">
                        Nutrition fact
        </Typography>

                    <Typography component="div" variant="body2" className="left-bold-inline">Serving size</Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline" >100g</Typography>

                    <Divider component="hr" className="hr-rule" />
                    <Typography component="div" variant="body2" className="plane" >Amount per serving</Typography>
                    <Typography component="h1" variant="" className="plane" >Calories</Typography>
                    <Divider component="hr" className="hr-rule" />
                    <Typography component="div" variant="body2" className="right-bold-inline"  >% Daily value *</Typography>
                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightBold">Total Fat </Box><Box fontWeight="fontWeightLight" ml={1}>0.3g</Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 0 %</Box>
                    </Typography>

                    <Divider component="hr" className="hr-width"/>

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight" ml={2}>Saturated fat 0.1g </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 0 %</Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightBold">Sodium </Box><Box fontWeight="fontWeightLight" ml={1}>1mg</Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 0 %</Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightBold">Total carbohydrate </Box><Box fontWeight="fontWeightLight" ml={1}>23g</Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 8 %</Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight" ml={2}>Dietary fiber 2.6g </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 9 %</Box>
                    </Typography>

                    <Divider component="hr" className="hr-width"/>

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight" ml={2}>Sugar 12g </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> </Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight" ml={2}>Protein 1.1g </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 2 %</Box>
                    </Typography>
                    <Divider component="hr" className="hr-rule"  />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight"  >Vitamin D 0.00mcg </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 0 % </Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight"  >Calcium 5.00mg </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular">0 % </Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight" >Iron 0.26mg </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 1 % </Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="div" variant="body2" className="left-bold-inline" ><Box fontWeight="fontWeightLight" >Potassium 358mg </Box>
                    </Typography>
                    <Typography component="div" variant="body2" className="right-bold-inline"  ><Box fontWeight="fontWeightRegular"> 8 % </Box>
                    </Typography>

                    <Divider component="hr" className="hr-width" />

                    <Typography component="p" variant="body2" className="right-bold-inline"  >
                    </Typography>
                </CardContent>
                <div className="expand-less-icon" ><ExpandLessIcon /></div>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <ul className="ul-rule">
                        <li>Delivering with love and care for you to relish</li>
                    </ul>
                    <Divider component="hr" className="hr-rule" />
                    <p className="p-bold">About Demo Group</p>
                    <p className="p">Leading the crops Division for demo Group is India's best branded fruit company and a market leader in controlled cultivation and marketing of high-quality fruits to domestic and international customers in a social responsible manner.
                    </p>
                    <p className="p">
                    we are happy to serve fresh & delicious fruits.
                    </p>
                    <Divider component="hr" className="hr-rule"  />
                </CardContent>
            </Card>

        </>
    );
}