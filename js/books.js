// js/books.js
export const BOOKS = [
  {
    bookId: "little-women",
    title: "Little Women",
    author: "Louisa May Alcott",
    ageBand: "Early (12-14)",
    primaryVirtue: "Self-Control",
    hiddenTrap: "Follow your heart",
    characterHook: "Quick tempers and big wishes collide when four sisters learn what real generosity costs.",
    recapAnchor: "Meg, Jo, Beth, and Amy try to grow up without their father while each battles her sharpest impulse.",
    libraryUrl: "https://www.gutenberg.org/ebooks/37106"
  },
  {
    bookId: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ageBand: "Early (12-14)",
    primaryVirtue: "Compassion",
    hiddenTrap: "Poor listening",
    characterHook: "Real empathy means stepping into someone else's perspective even when town gossip is loud.",
    recapAnchor: "Scout and Jem begin seeing beyond rumors and fear in Maycomb as Atticus takes on a heavy case.",
    libraryUrl: "https://archive.org/details/tokillamockingbi00leeh"
  },
  {
    bookId: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    ageBand: "Older (15-18)",
    primaryVirtue: "Discernment",
    hiddenTrap: "Poor listening",
    characterHook: "Fast judgments and wounded pride can trick even sharp minds into misreading what is right in front of them.",
    recapAnchor: "Elizabeth Bennet holds tight to her first impressions while Mr. Darcy confronts how his manner comes across.",
    libraryUrl: "https://www.gutenberg.org/ebooks/1342"
  },
  {
    bookId: "great-expectations",
    title: "Great Expectations",
    author: "Charles Dickens",
    ageBand: "Older (15-18)",
    primaryVirtue: "Responsibility",
    hiddenTrap: "Wanting shortcuts",
    characterHook: "Sudden fortune feels exciting until you realize who you might overlook on the way up.",
    recapAnchor: "Pip is pulled from his quiet life at the forge toward London expectations and costly loyalties.",
    libraryUrl: "https://www.gutenberg.org/ebooks/1400"
  },
  {
    bookId: "the-secret-garden",
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    ageBand: "Early (12-14)",
    primaryVirtue: "Patience",
    hiddenTrap: "Main character energy",
    characterHook: "Tending something dormant takes quiet patience—and stops revolving the whole world around your own mood.",
    recapAnchor: "Mary Lennox discovers a locked, overgrown garden at Misselthwaite Manor and begins tending it bit by bit.",
    libraryUrl: "https://www.gutenberg.org/ebooks/17396"
  },
  {
    bookId: "jane-eyre",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    ageBand: "Older (15-18)",
    primaryVirtue: "Self-Control",
    hiddenTrap: "Follow your heart",
    characterHook: "Knowing your worth and holding your boundaries matters most when feelings pull you to bend your conscience.",
    recapAnchor: "Jane carves out steadiness after harsh early years and enters a complicated new chapter at Thornfield.",
    libraryUrl: "https://www.gutenberg.org/ebooks/1260"
  }
];

export function matchBooksFromQuiz({ ageBand = "", focusArea = "", mood = "" }) {
  return BOOKS.filter((book) => {
    const matchesAge = !ageBand || book.ageBand === ageBand;
    const matchesFocus = !focusArea || book.primaryVirtue === focusArea;
    const matchesMood =
      !mood ||
      (mood === "steady" && (book.primaryVirtue === "Patience" || book.primaryVirtue === "Self-Control")) ||
      (mood === "clear-eyed" && (book.primaryVirtue === "Discernment" || book.primaryVirtue === "Compassion")) ||
      (mood === "grounded" && book.primaryVirtue === "Responsibility");
    return matchesAge && matchesFocus && matchesMood;
  });
}
