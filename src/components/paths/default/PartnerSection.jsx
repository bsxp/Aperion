import React from 'react'
import PropTypes from 'prop-types'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import { partnerHeader } from '../../../copyText/landingCopy'
import AWSLogo from '../../../resources/images/aws.png'
import GCPLogo from '../../../resources/images/gcp.png'



const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
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
        paddingBottom: '64px',
        backgroundColor: 'rgb(240,240,240)'
    },
    header: {
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase',
        textAlign: 'center',
        width: '100%',
        marginBottom: '48px'
    },
    image: {
        height: 'auto',
        width: '100%'
    },
    viewAllButton: {
        marginTop: '32px',
        textTransform: 'none',
        color: 'var(--theme-main)',
        border: '1px solid var(--theme-main)',
        borderRadius: '2px',
    }
}))

const partnerImages = [
    AWSLogo, GCPLogo, AWSLogo, GCPLogo
]

function PartnerSection(props) {

    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography className={classes.header}>
                    { partnerHeader }
                </Typography>
            </Grid>
            <Grid item xs={12} container spacing={4}>
                {partnerImages.map(image => (
                    <Grid item xs={3}>
                        <img src={image} className={classes.image} />
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Button className={classes.viewAllButton}>
                    View all
                </Button>
            </Grid>
        </Grid>
    )
}

PartnerSection.propTypes = {

}

export default PartnerSection

