import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import LinkedInIcon from '../../resources/images/linkedin-icon.png'
import FacebookIcon from '../../resources/images/facebook-icon.png'
import TwitterIcon from '../../resources/images/twitter-icon.png'
import AperionLogo from '../../resources/images/AperionLogo.png'


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'var(--theme-gray)',
        padding: '64px',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    companyLogo: {
        width: '100%',
        height: 'auto',
    },
    list: {
        listItemStyle: 'none'
    },
    listItem: {
        color: 'white',
        font: theme.typography.body1,
        listItemStyle: 'none',
        paddingLeft: '0px'
    },
    sectionHeader: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: '900',
        fontSize: 14,
    },
    contactInfo: {
        color: 'white',
        marginTop: '16px',
        fontSize: 12
    },
    socialContainer: {
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    socialImage: {
        height: '34px',
        width: '34px'
    }
}))

const companyOptions = [
    "About us",
    "Mission",
    "Team",
    "Leadership",
    "Customers",
    "Partners"
]

const industryOptions = [
    "Finance",
    "Humna",
    "Legal",
    "Technology",
    "Consulting"
]

function Footer(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} className={classes.logoContainer}>
                    <img src={AperionLogo} className={classes.companyLogo}/>
                </Grid>
                <Grid item xs={6} style={{marginBottom: '32px'}}>
                    <Typography className={classes.sectionHeader}>
                        Company
                    </Typography>
                    <List>
                        {companyOptions.map(item => <ListItem className={classes.listItem}>{item}</ListItem>)}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.sectionHeader}>
                        Industries
                    </Typography>
                    <List>
                        {industryOptions.map(item => <ListItem className={classes.listItem}>{item}</ListItem>)}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.sectionHeader}>
                        Contact
                    </Typography>
                    <Typography className={classes.contactInfo}>
                        Email:
                        <br/>
                        <b>fizzbuzz@aperion.com</b>
                    </Typography>
                    <Typography className={classes.contactInfo}>
                        Phone:
                        <br/>
                        <b>(123) 456-7890</b>
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.socialContainer}>
                    {[LinkedInIcon, FacebookIcon, TwitterIcon].map(image => <img src={image} className={classes.socialImage} />)}
                </Grid>
            </Grid>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer

