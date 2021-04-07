import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import HeroSection from './HeroSection'
import StrengthsSection from './StrengthsSection'
import PartnerSection from './PartnerSection'
import SuccessesSection from './SuccessesSection'
import ContactForm from './ContactForm'
import Footer from '../../global/Footer'

function LandingPage(props) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <HeroSection />
            </Grid>
            <Grid item xs={12}>
                <StrengthsSection />
            </Grid>
            <Grid item xs={12}>
                <PartnerSection />
            </Grid>
            <Grid item xs={12}>
                <SuccessesSection />
            </Grid>
            <Grid item xs={12}>
                <ContactForm />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}

LandingPage.propTypes = {

}

export default LandingPage

