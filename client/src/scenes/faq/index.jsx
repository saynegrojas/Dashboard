import React from 'react';
import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // TODO: Create a list of questions and answers
  // DB structure: faqs (id, question, answer)

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5' color={colors.greenAccent[500]}>
            How do you reset password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reset your password, go to the login page and click on the "Forgot Password" link.
            Enter your email address and we'll send you a link to reset your password.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5' color={colors.greenAccent[500]}>
            Another question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reset your password, go to the login page and click on the "Forgot Password" link.
            Enter your email address and we'll send you a link to reset your password.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5' color={colors.greenAccent[500]}>
            Random Question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reset your password, go to the login page and click on the "Forgot Password" link.
            Enter your email address and we'll send you a link to reset your password.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5' color={colors.greenAccent[500]}>
            How do you reset password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reset your password, go to the login page and click on the "Forgot Password" link.
            Enter your email address and we'll send you a link to reset your password.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
