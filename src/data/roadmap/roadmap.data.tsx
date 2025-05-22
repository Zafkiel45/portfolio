import { JavaScriptSvg } from "@/components/svg/javascript";
import { RustSVG } from "@/components/svg/rust";
import type { Roadmap } from "@/types/roadmap.type";

export const ROADMAPS: Roadmap[] = [
    {
      name: "rust",
      icon: <RustSVG className="sm:h-11 sm:w-11 h-9 w-9" />,
      goals: [
        {
          name: "Syntax and Semantics",
          isFinished: true,
          startedAt: "10/05/2025",
          finishedAt: "20/05/2025",
        },
        {
          name: "Ownership System",
          isFinished: false,
          startedAt: "21/05/2025",
          finishedAt: "?",
        },
        {
          name: "Concurrency and Parallelism",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Traits and Generics",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Lifetimes and Borrow Checker",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Macros and Metaprogramming",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Web Development",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Asynchronous Programming",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Networking",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Database and ORM",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Cryptography",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "GUI Development",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Testing",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
      ],
    },
    {
      name: "javascript",
      icon: <JavaScriptSvg className="sm:h-11 sm:w-11 h-9 w-9" />,
      goals: [
        {
          name: "Javascript Variables",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Datatypes",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Prototypes",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Type Casting",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Indexed collections",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Keyed Collections",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Equality Comparisons",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Loops and Iterations",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Control Flow",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Functions",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "DOM APIs",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Strict Mode",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "'This' Keyword",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Asynchronous JavaScript",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Event Loop",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Working with APIs",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Modules",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Javascript Iterators and Generators",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
      ],
    },
  ];
