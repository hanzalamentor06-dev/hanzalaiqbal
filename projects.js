/* Portfolio data. Each project: id, title, category, shortDescription, fullDescription,
   thumbnail (image URL or null for a placeholder), gallery (optional image URLs),
   status ("sample" | "published" | "unpublished" hides it), order, featured.
   The Admin Panel will later read and write this same shape (e.g. from MongoDB). Thumbnails will be Cloudinary URLs. */
window.PORTFOLIO_CATEGORIES=[
 {
  "id": "social",
  "label": "Social Media Management",
  "colors": [
   "#FF6B35",
   "#7a2d12"
  ]
 },
 {
  "id": "marketing",
  "label": "Digital Marketing",
  "colors": [
   "#318BFF",
   "#143a73"
  ]
 },
 {
  "id": "content",
  "label": "Instagram & TikTok Content",
  "colors": [
   "#FF6B35",
   "#318BFF"
  ]
 },
 {
  "id": "ecommerce",
  "label": "eBay & E-commerce",
  "colors": [
   "#318BFF",
   "#7a2d12"
  ]
 },
 {
  "id": "shopify",
  "label": "Shopify Store Design",
  "colors": [
   "#FF6B35",
   "#143a73"
  ]
 },
 {
  "id": "ai",
  "label": "AI Automation & Prompt Engineering",
  "colors": [
   "#318BFF",
   "#FF6B35"
  ]
 },
 {
  "id": "mechanical",
  "label": "Mechanical Engineering",
  "colors": [
   "#6b7280",
   "#318BFF"
  ]
 }
];
window.PORTFOLIO_PROJECTS=[
 {
  "id": "proj-001",
  "title": "Instagram Account Management",
  "category": "social",
  "shortDescription": "Sample idea for instagram account management. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Social Media Management project titled “Instagram Account Management”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 1,
  "featured": true
 },
 {
  "id": "proj-002",
  "title": "Social Media Content Planning",
  "category": "social",
  "shortDescription": "Sample idea for social media content planning. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Social Media Management project titled “Social Media Content Planning”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 2,
  "featured": false
 },
 {
  "id": "proj-003",
  "title": "Social Media Growth Strategy",
  "category": "social",
  "shortDescription": "Sample idea for social media growth strategy. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Social Media Management project titled “Social Media Growth Strategy”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 3,
  "featured": false
 },
 {
  "id": "proj-004",
  "title": "Social Media Page Management",
  "category": "social",
  "shortDescription": "Sample idea for social media page management. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Social Media Management project titled “Social Media Page Management”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 4,
  "featured": false
 },
 {
  "id": "proj-005",
  "title": "Digital Marketing Strategy",
  "category": "marketing",
  "shortDescription": "Sample idea for digital marketing strategy. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Digital Marketing project titled “Digital Marketing Strategy”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 5,
  "featured": true
 },
 {
  "id": "proj-006",
  "title": "Brand Awareness Campaign",
  "category": "marketing",
  "shortDescription": "Sample idea for brand awareness campaign. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Digital Marketing project titled “Brand Awareness Campaign”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 6,
  "featured": false
 },
 {
  "id": "proj-007",
  "title": "Audience Research",
  "category": "marketing",
  "shortDescription": "Sample idea for audience research. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Digital Marketing project titled “Audience Research”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 7,
  "featured": false
 },
 {
  "id": "proj-008",
  "title": "Social Media Marketing Campaign",
  "category": "marketing",
  "shortDescription": "Sample idea for social media marketing campaign. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Digital Marketing project titled “Social Media Marketing Campaign”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 8,
  "featured": false
 },
 {
  "id": "proj-009",
  "title": "Instagram Reels Content",
  "category": "content",
  "shortDescription": "Sample idea for instagram reels content. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Instagram & TikTok Content project titled “Instagram Reels Content”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 9,
  "featured": false
 },
 {
  "id": "proj-010",
  "title": "TikTok Short-Form Content",
  "category": "content",
  "shortDescription": "Sample idea for tiktok short-form content. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Instagram & TikTok Content project titled “TikTok Short-Form Content”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 10,
  "featured": false
 },
 {
  "id": "proj-011",
  "title": "Social Media Creative Posts",
  "category": "content",
  "shortDescription": "Sample idea for social media creative posts. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Instagram & TikTok Content project titled “Social Media Creative Posts”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 11,
  "featured": false
 },
 {
  "id": "proj-012",
  "title": "AI-Assisted Content Creation",
  "category": "content",
  "shortDescription": "Sample idea for ai-assisted content creation. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Instagram & TikTok Content project titled “AI-Assisted Content Creation”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 12,
  "featured": false
 },
 {
  "id": "proj-013",
  "title": "eBay Product Research",
  "category": "ecommerce",
  "shortDescription": "Sample idea for ebay product research. Replace with your real work.",
  "fullDescription": "This is a placeholder for a eBay & E-commerce project titled “eBay Product Research”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 13,
  "featured": true
 },
 {
  "id": "proj-014",
  "title": "eBay Product Listing Optimization",
  "category": "ecommerce",
  "shortDescription": "Sample idea for ebay product listing optimization. Replace with your real work.",
  "fullDescription": "This is a placeholder for a eBay & E-commerce project titled “eBay Product Listing Optimization”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 14,
  "featured": false
 },
 {
  "id": "proj-015",
  "title": "Product Title & Description Research",
  "category": "ecommerce",
  "shortDescription": "Sample idea for product title & description research. Replace with your real work.",
  "fullDescription": "This is a placeholder for a eBay & E-commerce project titled “Product Title & Description Research”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 15,
  "featured": false
 },
 {
  "id": "proj-016",
  "title": "E-commerce Store Management",
  "category": "ecommerce",
  "shortDescription": "Sample idea for e-commerce store management. Replace with your real work.",
  "fullDescription": "This is a placeholder for a eBay & E-commerce project titled “E-commerce Store Management”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 16,
  "featured": false
 },
 {
  "id": "proj-017",
  "title": "Basic Shopify Store Setup",
  "category": "shopify",
  "shortDescription": "Sample idea for basic shopify store setup. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Shopify Store Design project titled “Basic Shopify Store Setup”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 17,
  "featured": false
 },
 {
  "id": "proj-018",
  "title": "Shopify Homepage Design",
  "category": "shopify",
  "shortDescription": "Sample idea for shopify homepage design. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Shopify Store Design project titled “Shopify Homepage Design”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 18,
  "featured": false
 },
 {
  "id": "proj-019",
  "title": "Product Page Customization",
  "category": "shopify",
  "shortDescription": "Sample idea for product page customization. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Shopify Store Design project titled “Product Page Customization”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 19,
  "featured": false
 },
 {
  "id": "proj-020",
  "title": "AI Workflow Creation",
  "category": "ai",
  "shortDescription": "Sample idea for ai workflow creation. Replace with your real work.",
  "fullDescription": "This is a placeholder for a AI Automation & Prompt Engineering project titled “AI Workflow Creation”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 20,
  "featured": true
 },
 {
  "id": "proj-021",
  "title": "AI Business Automation",
  "category": "ai",
  "shortDescription": "Sample idea for ai business automation. Replace with your real work.",
  "fullDescription": "This is a placeholder for a AI Automation & Prompt Engineering project titled “AI Business Automation”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 21,
  "featured": false
 },
 {
  "id": "proj-022",
  "title": "ChatGPT Prompt Engineering",
  "category": "ai",
  "shortDescription": "Sample idea for chatgpt prompt engineering. Replace with your real work.",
  "fullDescription": "This is a placeholder for a AI Automation & Prompt Engineering project titled “ChatGPT Prompt Engineering”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 22,
  "featured": false
 },
 {
  "id": "proj-023",
  "title": "AI Image Generation Prompts",
  "category": "ai",
  "shortDescription": "Sample idea for ai image generation prompts. Replace with your real work.",
  "fullDescription": "This is a placeholder for a AI Automation & Prompt Engineering project titled “AI Image Generation Prompts”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 23,
  "featured": false
 },
 {
  "id": "proj-024",
  "title": "AI Video Generation Projects",
  "category": "ai",
  "shortDescription": "Sample idea for ai video generation projects. Replace with your real work.",
  "fullDescription": "This is a placeholder for a AI Automation & Prompt Engineering project titled “AI Video Generation Projects”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 24,
  "featured": false
 },
 {
  "id": "proj-025",
  "title": "Mechanical Engineering Technical Projects",
  "category": "mechanical",
  "shortDescription": "Sample idea for mechanical engineering technical projects. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Mechanical Engineering project titled “Mechanical Engineering Technical Projects”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 25,
  "featured": false
 },
 {
  "id": "proj-026",
  "title": "Engineering Concepts",
  "category": "mechanical",
  "shortDescription": "Sample idea for engineering concepts. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Mechanical Engineering project titled “Engineering Concepts”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 26,
  "featured": false
 },
 {
  "id": "proj-027",
  "title": "Technical Design Samples",
  "category": "mechanical",
  "shortDescription": "Sample idea for technical design samples. Replace with your real work.",
  "fullDescription": "This is a placeholder for a Mechanical Engineering project titled “Technical Design Samples”. It shows how a real project will look on this page. When you upload your actual work through the Admin Panel, this text, the thumbnail and the category will be replaced. This is not a completed client project.",
  "thumbnail": null,
  "gallery": [],
  "status": "sample",
  "order": 27,
  "featured": false
 }
];
