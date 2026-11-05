# Hanzala Iqbal Portfolio (Home + Portfolio pages)
Open index.html in a browser. No build step. Keep all files together.

Files: index.html (Home), portfolio.html, js/config.js, js/projects.js, js/portfolio.js
Edit your email and social/page links: js/config.js
Edit or add projects: js/projects.js (fields: id, title, category, shortDescription, fullDescription,
thumbnail, gallery, status, order, featured). Set thumbnail to an image URL to replace the placeholder.
status "sample" shows the placeholder label; "unpublished" hides a project.
The Admin Panel will later read and write this same shape. No secrets are included.

About page: about.html. Edit its text and skill lists in js/about-content.js.
Services page: services.html. Edit services, prices, platforms and experience in js/services-content.js.
Contact page address (js/config.js links.contact) receives ?service=Name from the Discuss buttons.

Awards page: awards.html. Content in js/awards-content.js. An achievement shows publicly only when status is "published" AND sample is false.
Set showSamplePreview:true in js/config.js ONLY to review the layout locally; keep it false on the live site.
Skill levels are null (neutral) until you set a number 0-100. There is no Admin Panel yet: it needs a real backend (see chat).
