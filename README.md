# 🚀 Personal Portfolio Website for ASP.NET Developers

A modern, creative, and professional portfolio website designed specifically for Fullstack ASP.NET Developers. Features a dark theme with purple accents, animated backgrounds, and responsive design.

![Portfolio Preview](https://via.placeholder.com/800x400/0f0f23/6b46c1?text=Portfolio+Website+Preview)

## ✨ Features

### 🎨 Design & Theme
- **Dark Mode Theme** with professional purple accents
- **Creative & Bold** design approach
- **Roboto Font** for professional typography
- **Responsive Design** optimized for desktop, tablet, and mobile

### 🧭 Navigation
- **Multi-page Experience** with 4 main sections
- **Smooth Scrolling** between sections
- **Active Link Highlighting** based on scroll position
- **Mobile-Friendly** hamburger menu

### 🎭 Hero Section
- **Full-Screen Hero** with profile photo
- **Animated Particle Background** with mouse interaction
- **Scrolling Code Snippet Effect**
- **Typing Animation** for dynamic text
- **Call-to-Action Buttons** for Projects and Contact

### 📁 Projects Section
- **Grid Gallery Layout** for project showcase
- **Hover Effects** revealing tech stack details
- **Project Cards** with screenshots and descriptions
- **"View Details" Links** for each project

### 🎯 Skills Section
- **Progress Bars** showing proficiency levels
- **Animated Skill Loading** on scroll
- **Categorized Skills** (Backend, Frontend, Database & Cloud)
- **Glowing Purple Accents** around skill cards

### 📬 Contact Section
- **Contact Information** with social links
- **Interactive Contact Form** with validation
- **Animated Submit Button** with hover effects
- **Glowing Icon Effects** on hover

### 🎬 Animations & Interactions
- **Smooth Scroll** between sections
- **Fade-in Animations** for sections
- **Particle System** with mouse interaction
- **Hover Interactions** throughout the site
- **Loading States** and form feedback

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Interactive functionality
- **Canvas API** - Particle animation system
- **Intersection Observer API** - Scroll-based animations
- **CSS Variables** - Consistent theming
- **Font Awesome** - Icons
- **Google Fonts** - Roboto typography

## 📁 Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Image assets (create this folder)
│   ├── profile.jpg        # Your profile photo
│   ├── project1.jpg       # Project screenshots
│   ├── project2.jpg
│   └── ...
└── README.md              # This file
```

## 🚀 Getting Started

### 1. Clone or Download
Download the portfolio files to your local machine.

### 2. Customize Content
Edit the following sections in `index.html`:

#### Personal Information
```html
<!-- Update these with your information -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span><br>
    Fullstack ASP.NET Developer
</h1>
```

#### Contact Information
```html
<!-- Update contact links -->
<a href="mailto:your.email@example.com" class="contact-link">
<a href="https://linkedin.com/in/yourprofile" class="contact-link">
<a href="https://github.com/yourusername" class="contact-link">
```

### 3. Add Your Images
Create an `images` folder and add:
- `profile.jpg` - Your professional photo (400x400px recommended)
- Project screenshots for the portfolio section

### 4. Update Projects
Modify the project cards in the Projects section:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
        <!-- Update tech stack tags -->
        <span class="tech-tag">Your Tech</span>
    </div>
    <div class="project-info">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description...</p>
    </div>
</div>
```

### 5. Customize Skills
Update the skills section with your proficiency levels:
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percentage">Your%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="Your%"></div>
    </div>
</div>
```

### 6. Launch Your Site
- **Local Development**: Open `index.html` in your browser
- **Web Hosting**: Upload files to your web hosting service
- **GitHub Pages**: Push to a GitHub repository and enable Pages

## 🎨 Customization Guide

### Color Scheme
The color scheme is defined using CSS variables in `style.css`:
```css
:root {
    --primary-color: #6b46c1;      /* Main purple */
    --primary-light: #8b5cf6;      /* Light purple */
    --secondary-color: #a855f7;     /* Accent purple */
    --bg-primary: #0f0f23;         /* Dark background */
    --bg-secondary: #1a1a2e;       /* Card background */
    /* ... more variables */
}
```

### Fonts
To change the font family, update the Google Fonts link and CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Animations
Adjust animation speeds and effects in `script.js`:
```javascript
// Particle system settings
const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);

// Typing animation speed
new TypingAnimation(element, texts, 150); // Speed in milliseconds
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Advanced Customization

### Adding New Sections
1. Add the HTML structure
2. Update the navigation menu
3. Add CSS styles following the existing pattern
4. Update JavaScript for smooth scrolling

### Contact Form Integration
The contact form currently simulates submission. To integrate with a backend:

1. **Backend API**: Create an endpoint to handle form submissions
2. **Email Service**: Use services like EmailJS, Formspree, or Netlify Forms
3. **Update JavaScript**: Modify the `ContactForm` class in `script.js`

Example EmailJS integration:
```javascript
async handleSubmit() {
    try {
        await emailjs.send('your_service_id', 'your_template_id', data);
        this.showSuccess();
    } catch (error) {
        this.showError('Failed to send message.');
    }
}
```

### Performance Optimization
- **Image Optimization**: Use WebP format for better compression
- **Lazy Loading**: Images are already set up for lazy loading
- **Minification**: Minify CSS and JavaScript for production
- **CDN**: Use a CDN for faster asset delivery

## 🌟 Features Breakdown

### Particle System
- **Mouse Interaction**: Particles respond to mouse movement
- **Dynamic Connections**: Lines connect nearby particles
- **Performance Optimized**: Adjusts particle count based on screen size

### Skill Animations
- **Intersection Observer**: Triggers animations when scrolled into view
- **Progressive Loading**: Bars animate to their target percentage
- **Smooth Transitions**: CSS transitions for polished effects

### Contact Form
- **Real-time Validation**: Instant feedback on form inputs
- **Loading States**: Visual feedback during submission
- **Error Handling**: Graceful error messages
- **Success Animation**: Confirmation of successful submission

## 📄 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 🐛 Common Issues & Solutions

### Particles Not Loading
- Ensure Canvas API is supported
- Check console for JavaScript errors

### Animations Not Working
- Verify Intersection Observer API support
- Check if CSS animations are enabled

### Form Not Submitting
- Update the form handler in `script.js`
- Implement backend integration

### Mobile Menu Not Working
- Check JavaScript console for errors
- Verify click events are properly bound

## 📧 Support & Customization

Need help customizing your portfolio? Here are some resources:

- **CSS Grid Guide**: [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- **JavaScript Animations**: [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- **Responsive Design**: [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 📝 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🙏 Credits

- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Inspiration**: Modern web design trends and ASP.NET community

---

**Ready to showcase your ASP.NET skills?** 🚀 Customize this portfolio and make it uniquely yours!

For questions or support, feel free to reach out. Happy coding! 💻✨
