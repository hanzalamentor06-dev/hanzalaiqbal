/* Awards page content. Editable here now; the future Admin Panel will read and write this same shape.
   Achievement fields: id, title, category, categoryLabel, year, organization, shortDescription, fullDescription,
   image, verificationUrl, sample, status ("draft" | "published" | "archived"), order, featured.
   PUBLIC RULE: an achievement shows only when status is "published" AND sample is false.
   Skill "level": a number 0-100 (self-assessed), or null for the neutral "not set" indicator.
   Foundation: institute, period and grade stay hidden until filled in. */
window.AWARDS_CONTENT={
 "label": "Recognition & Professional Growth",
 "headline": "Awards & Achievements",
 "description": "A collection of professional milestones, learning experiences, and achievements across Mechanical Engineering, Social Media Management, Digital Marketing, and online business activities.",
 "achievementsEmpty": "No achievements have been published yet. Confirmed awards and milestones will appear here.",
 "achievements": [
  {
   "id": "ach-001",
   "title": "Best Editing Award 2024",
   "category": "video",
   "categoryLabel": "Video Editing",
   "year": "2024",
   "organization": "A local content creators group",
   "shortDescription": "Recognizing outstanding storytelling through video editing.",
   "fullDescription": "Recognizing outstanding storytelling through video editing.",
   "image": "",
   "verificationUrl": "",
   "sample": true,
   "status": "draft",
   "order": 1,
   "featured": false
  },
  {
   "id": "ach-002",
   "title": "Featured Editor",
   "category": "video",
   "categoryLabel": "Video Editing",
   "year": "",
   "organization": "A video-editing software brand",
   "shortDescription": "Recognition for consistent, high-quality client work.",
   "fullDescription": "Recognition for consistent, high-quality client work.",
   "image": "",
   "verificationUrl": "",
   "sample": true,
   "status": "draft",
   "order": 2,
   "featured": false
  },
  {
   "id": "ach-003",
   "title": "Guest Speaker",
   "category": "video",
   "categoryLabel": "Video Editing",
   "year": "",
   "organization": "A local college seminar",
   "shortDescription": "Invited to speak about video editing as a career.",
   "fullDescription": "Invited to speak about video editing as a career.",
   "image": "",
   "verificationUrl": "",
   "sample": true,
   "status": "draft",
   "order": 3,
   "featured": false
  }
 ],
 "foundation": {
  "title": "My Technical Foundation",
  "qualification": "DAE Mechanical Engineering",
  "institute": "",
  "period": "",
  "grade": "",
  "summary": "Mechanical Engineering is my main educational background. My digital marketing and online business work are additional practical skills and part-time work.",
  "items": [
   {
    "title": "Technical education",
    "text": "An engineering foundation from my DAE Mechanical Engineering studies."
   },
   {
    "title": "Technical thinking",
    "text": "Breaking problems down and working through them step by step."
   },
   {
    "title": "Attention to detail",
    "text": "Careful, accurate work, whether technical or digital."
   },
   {
    "title": "Practical learning",
    "text": "Continuing to learn new tools and skills through hands-on practice."
   }
  ]
 },
 "skillsNote": "Skill levels are my own self-assessment, not independently verified rankings. A skill with no level set shows a neutral indicator.",
 "skillGroups": [
  {
   "id": "technical",
   "title": "Primary Technical & Educational Background",
   "skills": [
    {
     "id": "technical-1",
     "name": "Mechanical Engineering",
     "level": null
    },
    {
     "id": "technical-2",
     "name": "Technical Problem-Solving",
     "level": null
    },
    {
     "id": "technical-3",
     "name": "Technical Understanding",
     "level": null
    }
   ]
  },
  {
   "id": "marketing",
   "title": "Digital Marketing & Social Media",
   "skills": [
    {
     "id": "marketing-1",
     "name": "Social Media Management",
     "level": null
    },
    {
     "id": "marketing-2",
     "name": "Pinterest Organic Marketing",
     "level": null
    },
    {
     "id": "marketing-3",
     "name": "Affiliate Product Marketing",
     "level": null
    },
    {
     "id": "marketing-4",
     "name": "Digital Marketing",
     "level": null
    },
    {
     "id": "marketing-5",
     "name": "Content Planning",
     "level": null
    }
   ]
  },
  {
   "id": "ecommerce",
   "title": "E-commerce",
   "skills": [
    {
     "id": "ecommerce-1",
     "name": "eBay Product Research",
     "level": null
    },
    {
     "id": "ecommerce-2",
     "name": "eBay Product Listing",
     "level": null
    },
    {
     "id": "ecommerce-3",
     "name": "Basic Shopify Store Setup",
     "level": null
    }
   ]
  },
  {
   "id": "ai",
   "title": "AI & Digital Tools",
   "skills": [
    {
     "id": "ai-1",
     "name": "AI Prompt Writing",
     "level": null
    },
    {
     "id": "ai-2",
     "name": "AI-Assisted Content Creation",
     "level": null
    },
    {
     "id": "ai-3",
     "name": "Basic AI Video Creation",
     "level": null
    },
    {
     "id": "ai-4",
     "name": "Basic AI-Assisted Workflow Organization",
     "level": null
    }
   ]
  },
  {
   "id": "soft",
   "title": "Soft Skills",
   "skills": [
    {
     "id": "soft-1",
     "name": "Communication",
     "level": null
    },
    {
     "id": "soft-2",
     "name": "Creativity",
     "level": null
    },
    {
     "id": "soft-3",
     "name": "Time Management",
     "level": null
    },
    {
     "id": "soft-4",
     "name": "Adaptability",
     "level": null
    },
    {
     "id": "soft-5",
     "name": "Problem-Solving",
     "level": null
    },
    {
     "id": "soft-6",
     "name": "Continuous Learning",
     "level": null
    }
   ]
  }
 ]
};
