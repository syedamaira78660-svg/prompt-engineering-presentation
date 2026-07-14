/* Single source of truth for the chapter list. Used by layout.js (sidebar,
   header, prev/next) and index.html (menu grid). */
var CHAPTERS = [
  {
    slug: "what-is-prompt",
    title: "What is Prompt Engineering, Really?",
    dish: "Order 101",
    desc: "The AI-as-brilliant-intern reframe that makes the rest of this menu make sense.",
    mins: 2
  },
  {
    slug: "core-concepts",
    title: "Core Concepts",
    dish: "House Basics",
    desc: "Tokenization, garbage-in-garbage-out, and the anatomy of a well-placed order.",
    mins: 3
  },
  {
    slug: "token-context-window",
    title: "Token Limits & Context Windows",
    dish: "Kitchen Capacity",
    desc: "What a token actually is, and what the AI quietly forgets when memory runs out.",
    mins: 5
  },
  {
    slug: "golden-rules",
    title: "The 5 Golden Rules",
    dish: "Chef's Formula",
    desc: "Role + Task + Context + Constraints + Output Format, built up one course at a time.",
    mins: 6
  },
  {
    slug: "techniques",
    title: "Prompting Techniques",
    dish: "Ways to Order",
    desc: "Standard, zero-shot, one-shot, and few-shot prompting, compared side by side.",
    mins: 7
  },
  {
    slug: "context-placement",
    title: "Context Placement",
    dish: "Plating Matters",
    desc: "Why LLMs get \"lost in the middle\" of a long order, and how to plate yours better.",
    mins: 6
  },
  {
    slug: "examples",
    title: "Interactive Examples",
    dish: "Taste Test",
    desc: "What you ordered vs. what you meant to order — toggle and compare.",
    mins: 5
  },
  {
    slug: "resources",
    title: "Resources",
    dish: "The Tab",
    desc: "Tools and further reading to take home.",
    mins: 1
  }
];
