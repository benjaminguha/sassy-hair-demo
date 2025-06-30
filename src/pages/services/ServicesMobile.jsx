import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const servicesData = [
  {
    category: 'Cuts',
    services: [
      { name: 'Ladies Cut', price: 'from $85.00', description: 'Express shampoo, cut and express dry off.' },
      { name: 'Ladies Maintenance Cut', price: 'from $103.00', description: 'Full shampoo service, cut and full blow wave.' },
      { name: 'Ladies Deluxe Creative Cut', price: 'from $116.00', description: 'Full shampoo service, specialised cut and full blow wave.' },
      { name: 'Ladies Restyle', price: 'from $125.00', description: 'Full shampoo service, specialised cut creating significant change and full blow wave.' },
      { name: 'Mens Maintenance Cut', price: 'from $60.00', description: 'Express shampoo, cut and express dry off.' },
      { name: 'Mens Restyle Cut', price: 'from $85.00', description: 'Full shampoo service, specialised cut creating significant change and full blow wave.' },
      { name: 'Beard Cut', price: 'from $15.00', description: '' },
      { name: 'Buzz Cut', price: 'from $29.00', description: '' },
      { name: 'Fringe Cut', price: 'from $27.00', description: '' },
      { name: 'Child Under 15 Years Full Service Cut', price: 'from $85.00', description: 'Full shampoo service, cut and full blow wave.' },
      { name: 'Child Under 15yrs Basic Cut', price: 'from $53.00', description: 'Dry cut - on hair cleaned within past 48hrs.' },
    ],
  },
  {
    category: 'Colouring',
    services: [
      { name: 'Colour Hairline', price: 'from $51.00', description: 'Part and hairline only.' },
      { name: 'Colour Revamp', price: 'from $86.00', description: 'Regrowth of no more than 6 weeks.' },
      { name: 'Colour Scalp Lightening', price: 'from $98.00', description: '' },
      { name: 'All over Colour', price: 'from $100.00', description: 'Permanent or semi colour.' },
      { name: 'Micro Panel Foils', price: 'from $62.00', description: 'Scattering of up to 10 foils.' },
      { name: 'Half Head Foils', price: 'from $89.00', description: 'Foils focus on top, sides and hairline – providing a more natural look.' },
      { name: 'Full Head Foils', price: 'from $145.00', description: 'Foils cover all over the head – providing a high impact of colour.' },
      { name: 'Toning', price: 'from $75.00', description: '' },
    ],
  },
  {
    category: 'Styling',
    services: [
      { name: 'Unique Styling', price: 'from $53.00', description: 'Tailored styling to suit your needs.' },
      { name: 'Glamour Styling', price: 'from $102.00', description: 'Ultimate straight or full-bodied curl blow dry.' },
      { name: 'Signature Styling', price: 'from $147.00', description: 'Specialised styling for formals and weddings.' },
    ],
  },
  {
    category: 'Specialist Services',
    services: [
      { name: 'Partial Crown Perm', price: 'POA', description: '' },
      { name: 'Perm', price: 'POA', description: '' },
      { name: 'Spiral Perm', price: 'POA', description: '' },
    ],
  },
  {
    category: 'Treatments',
    services: [
      { name: 'Cleansing', price: 'from $25.00', description: 'Used to deeply cleanse the hair below a colour service.' },
      { name: 'Damage Repair', price: 'from $40.00', description: 'A specialised in-salon treatment to repair damage.' },
      { name: 'Miracle', price: 'from $40.00', description: 'A specialised in-salon keratin treatment.' },
      { name: 'Moisturising', price: 'from $25.00', description: 'Adds intensive moisture to the hair.' },
      { name: 'Specialised Treatment Bed', price: 'from $65.00', description: 'A steaming bed offering a unique treatment to suit your hair’s needs.' },
    ],
  },
];

function ServicesMobile() {
  return (
    <Box sx={{ width: '90%', mt: 4, mx: 'auto' }}>
    <Paper elevation={2} sx={{ p: 3, borderRadius: '12px' }}>  
        <Typography variant="pageHeader" gutterBottom>
          Services
        </Typography>

        {//<Typography variant="sectionHeader" gutterBottom>
        //  Pricing
        //</Typography>
        }
        <Typography variant="text" paragraph>
          All prices apply to Sassy Hair Pearce and are a starting point. Pricing will be
          dependent on your hair’s condition, the amount of time taken, products used, and the
          level of expertise required to achieve your desired look.
        </Typography>

        <Typography variant="text" paragraph>
          Our services are based on the following length types:
        </Typography>

        <Box component="ul" sx={{ pl: 2 }}>
          <li>
            <Typography component="span" variant="text">
              Short – above the jawline
            </Typography>
          </li>
          <li>
            <Typography component="span" variant="text">
              Medium – above the shoulders
            </Typography>
          </li>
          <li>
            <Typography component="span" variant="text">
              Long – above the shoulder blades
            </Typography>
          </li>
          <li>
            <Typography component="span" variant="text">
              Extra Long – below the shoulder blades
            </Typography>
          </li>
        </Box>

        <Typography variant="text" paragraph>
          Quotes cannot be given over the phone. However, we do offer appointments for a
          complimentary in-salon client consultation to discuss your options.
        </Typography>

        <Typography variant="text" paragraph>
          All services can be quoted before the commencement of a service. The prices listed
          include GST and are subject to change without notification.
        </Typography>

        <Typography variant="text" paragraph>
          Please note that due to the nature of their independence, any stylists working at The
          Sassy Collective are responsible for setting their own services and pricing. Please
          speak with them directly regarding quotes for their services.
        </Typography>

        <Box mt={4}>
          {servicesData.map((section, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="pinkHeader" color="primary">
                  {section.category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {section.services.map((service, idx) => (
                  <Box key={idx} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="text">{service.name}</Typography>
                      <Typography variant="text" color="text.secondary">
                        {service.price}
                      </Typography>
                    </Box>
                    {service.description && (
                      <Typography variant="text" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                        {service.description}
                      </Typography>
                    )}
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}

          <Typography variant="text" mt={2}>
            <em>
              Our pricing is a genuine reflection of our commitment to continual training,
              education, and the high-quality Keune products we use.
            </em>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ServicesMobile;
