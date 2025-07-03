import { Box, Typography, Link, Paper, Grid, IconButton, Stack } from '@mui/material';
import { Email, Phone, LocationOn, AccessTime } from '@mui/icons-material';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <Box id="contact" sx={{ mt: 10, px: 2 }}>
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        📞 Get in Touch
      </Typography>
      <Typography variant="subtitle1" align="center" mb={5} color="text.secondary">
        Connect with TETRABLESS for support, projects, and freelance services.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Phone Card */}
        {/* Phone Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={6}
            sx={{ p: 4, borderRadius: 3, textAlign: 'center', bgcolor: '#e8f5e9' }}
          >
            <Phone color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Call or Chat
            </Typography>

            {/* Phone number and WhatsApp side by side */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
              sx={{ mt: 1 }}
            >
              <IconButton
                href="https://wa.me/919363816161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{ color: '#25D366' }}
              >
                <FaWhatsapp size={20} />
              </IconButton>
              <Link href="tel:9363816161" underline="hover" color="inherit">
                +91 93638 16161
              </Link>

            </Box>

            {/* Availability info */}
            <Box display="flex" justifyContent="center" alignItems="center" >
              <AccessTime color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">
                Available: Mon–Sun | 9:00 AM – 8:00 PM
              </Typography>
            </Box>
          </Paper>
        </Grid>


        {/* Email Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: 'center', bgcolor: '#e8f5e9' }}>
            <Email color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Email Us
            </Typography>
            <Link href="mailto:tetrabless@gmail.com" underline="hover" color="inherit">
              tetrabless@gmail.com
            </Link>
            <Typography variant="body2" mt={2}>
              Drop us a mail anytime — we respond quickly!
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={6}
            sx={{ p: 4, borderRadius: 3, textAlign: 'center', bgcolor: '#e8f5e9' }}
          >
            <LocationOn color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Location
            </Typography>

            {/* Clickable Google Maps link */}
            <Link
              href="https://www.google.com/maps/place/Vallioor,+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              <Typography variant="body2">
                Vallioor, Tirunelveli – Tamil Nadu, India
              </Typography>
            </Link>

            <Typography variant="body2" mt={2}>
              Offering freelance support 🌍
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}
