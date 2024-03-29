module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
 Option_bg: " url(./assets/images/options_img_1.avif)",
 Landloard_bg: " url(./assets/images/lanlord_page.avif)",
 Tenant_bg: " url(./assets/images/tenant.avif)"  
      },

      colors:{
        primary_bg: "#1b1a1a",
        secondary_bg: "#1E293B",
        secondary_color: "#22C55E"
      }
    },
  },
  plugins: [],
};
