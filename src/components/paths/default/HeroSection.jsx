import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import LearnMoreButton from '../../global/LearnMoreButton'
import CharlotteImage from '../../../resources/images/charlotte.jpg'
import { heroHeader, heroBody } from '../../../copyText/landingCopy'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            height: '600px'
        },
        minHeight: '400px'
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '64px',
        paddingBottom: '64px',
        height: '100%',
        width: '100%'
    },
    header: {
        fontSize: 24,
        fontWeight: '900',
        textAlign: 'center',
        width: '100%',
        color: 'white'
    }, 
    body: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: 'white'
    },
    image: {
        position: 'absolute',
        width: '120%',
        transform: 'translateX(-10%)',
        height: 'auto',
        filter: 'brightness(20%)',
        zIndex: -1,
        minHeight: '400px'
    }
}))

function HeroSection(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img className={classes.image} src={CharlotteImage} />
            <div className={classes.contentContainer}>
            <Typography className={classes.header}>
                {heroHeader}
            </Typography>
            <Typography className={classes.body}>
                {heroBody}
            </Typography>
            <LearnMoreButton style={{marginTop: '32px'}}/>
            </div>
        </div>
    )
}

HeroSection.propTypes = {

}

export default HeroSection

