# Aether Portfolio

Build a modern, high-tech single-page 3D interactive portfolio landing page for an IT & Cloud Solutions company using React, Tailwind CSS, Lucide Icons, Framer Motion, and React Three Fiber (@react-three/fiber, @react-three/drei, three, gsap).

### Theme & Styling:
- Futuristic Dark Mode UI (Deep Navy/Slate background `#0a0f1d`, glowing cyan `#00f0ff`, and purple `#7000ff` accents).
- Glassmorphism overlays, glowing grid backgrounds, modern typography, and responsive layouts.

### 3D Scroll Mechanics (Core Concept):
- Use React Three Fiber and Drei (or GSAP ScrollTrigger) to build a continuous 3D canvas fixed in the background/viewport that responds to vertical page scrolling.
- **Section 1 (Infrastructure Intro):** Render a high-tech 3D Data Center / Server Rack room. As the user scrolls down, animate a 3D Ethernet Cable moving forward and smoothly plugging into a glowing server port. Scrolling back up should smoothly unplug the cable.
- **Section Transitions:** As the user continues scrolling down through the sections, transition the 3D scene smoothly to represent each service category visually (e.g., Cloud floating nodes, Cyber Security Shield, Managed Network node hubs).

### Page Structure & Sections (Single Page Layout):

1. **Hero & Cloud Infrastructure Section:**
   - Heading: "Cloud & Infrastructure Modernization"
   - Subtext: "Comprehensive cloud migration, infrastructure management, and network solutions."
   - Service Cards / Features:
     • Cloud Migration & Transformation
     • Cloud Infrastructure Management
     • Infrastructure & Network Solutions

2. **Business Applications Section:**
   - Heading: "Enterprise Business Applications"
   - Service Cards / Features:
     • ERP Implementation & Integration
     • Cloud POS Solution

3. **Security & Data Management Section:**
   - Heading: "Cyber Security & Data Protection"
   - Service Cards / Features:
     • Cybersecurity Services
     • Data Backup & Disaster Recovery

4. **Managed IT Services Section:**
   - Heading: "24/7 Managed IT & Operations"
   - Service Cards / Features:
     • Managed IT Services
     • Email & Communication Services

5. **Consulting & Digital Services Section:**
   - Heading: "Strategic Consulting & Growth"
   - Service Cards / Features:
     • IT Consulting & Strategy
     • Web Development (via AWSOL)
     • Digital Marketing (via AWSOL)

6. **Footer / Contact CTA:**
   - High-impact call-to-action button "Schedule a Consultation" with contact form modal trigger.

### Code & Component Standards:
- Keep the code modular, responsive, clean, and fully production-ready.
- Use placeholders or procedural Three.js geometries (boxes, glowing spheres, lines/curves for cables) if custom .GLTF 3D models are not pre-loaded, ensuring the 3D scene renders cleanly immediately.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/45807fb5-f677-4356-8b98-6400771145fc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
