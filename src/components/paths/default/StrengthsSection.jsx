import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import HoverTextSection from '../../global/HoverTextSection'
import { strengthsHeader, strengthsItems } from '../../../copyText/landingCopy'


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            height: '600px',
            paddingLeft: '25%',
            paddingRight: '25%'
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '4%',
            paddingRight: '4%'
        },
        paddingTop: '64px',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '128px'
    },
    header: {
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase',
        textAlign: 'center',
        width: '100%',
        marginBottom: '48px'
    }
}))

function StrengthsSection(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.header}>
                        {strengthsHeader}
                    </Typography>
                </Grid>
                <Grid item xs={12} container>
                    {strengthsItems.map(({header, body}) => (
                        <Grid item xs={6}>
                            <HoverTextSection header={header} body={body}  />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

StrengthsSection.propTypes = {

}

export default StrengthsSection

