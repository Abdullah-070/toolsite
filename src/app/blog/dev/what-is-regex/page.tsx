import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Regex Explained for Beginners",
  description:
    "What regex actually is, why it's useful even if you're not a programmer, and how to read, write, and test your first regular expressions in Python and JavaScript.",
};

export default function WhatIsRegex() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14 prose-article">
      <BackButton />
      <p className="text-sm text-slate mb-2">Dev Explained</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
        Regex Explained: A Beginner's Guide to Regular Expressions
      </h1>
      <p className="text-slate mb-10">
        If you've ever seen a string like <code>^\d{"{3}"}-\d{"{4}"}$</code> and
        wondered what it even means, this guide is for you. No prior coding
        experience assumed.
      </p>

      <h2>What is regex, actually</h2>
      <p>
        Regex is short for regular expression, and at its core it's just a
        compact way of describing a pattern in text. Instead of writing "find
        me anything that looks like an email address" in plain English, you
        write a short sequence of characters that a computer can check
        against any piece of text almost instantly. That's really the whole
        idea. A regular expression is a search pattern, and it can be used to
        find matches, validate input, or replace parts of text automatically.
      </p>
      <p>
        You don't need to be a programmer to use one. Regex shows up in
        places far beyond code: search-and-replace in a text editor, form
        validation on a website, filtering log files, even certain settings
        inside spreadsheet apps. If you've ever used "find and replace" with
        an option for "match pattern," you've already brushed up against
        regex without necessarily calling it that.
      </p>

      <h2>Why regex is worth learning even a little of</h2>
      <p>
        The honest pitch for regex is speed and precision. A task like
        "pull every phone number out of this document" or "check that this
        field is actually a valid email before submitting a form" would take
        many lines of manual code without regex. With a regular expression,
        it's often a single line. Once the pattern is written correctly, it
        works instantly and consistently, which is exactly why it's used so
        heavily in form validation, data cleaning, and search tools across
        nearly every programming language.
      </p>
      <p>
        It's also one of those skills that transfers almost entirely between
        languages. A regular expression written for JavaScript looks nearly
        identical to one written for Python, PHP, or Java, with only small
        differences in how it's actually called in code. Learn the pattern
        syntax once, and you can reuse that knowledge almost everywhere.
      </p>

      <h2>The building blocks, explained simply</h2>
      <p>
        Regex syntax looks intimidating mostly because it's dense, not
        because any individual piece is hard. Here are the pieces that show
        up constantly:
      </p>
      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li><code>\d</code> means any digit, so <code>\d\d\d</code> matches three digits in a row.</li>
        <li><code>\w</code> means any letter, number, or underscore, useful for matching words.</li>
        <li><code>\s</code> means any whitespace, like a space or tab.</li>
        <li><code>.</code> means any single character at all, used as a wildcard.</li>
        <li><code>*</code> means "zero or more of the previous thing," and <code>+</code> means "one or more."</li>
        <li><code>?</code> means "zero or one," essentially making something optional.</li>
        <li><code>{"{3}"}</code> means exactly three of the previous thing, and <code>{"{2,5}"}</code> means between two and five.</li>
        <li><code>^</code> anchors the match to the start of the text, and <code>$</code> anchors it to the end.</li>
        <li><code>[abc]</code> matches any single character inside the brackets, so <code>[aeiou]</code> matches any vowel.</li>
        <li>Parentheses <code>(...)</code> create a group, which lets you capture part of a match separately.</li>
      </ul>
      <p>
        Put a few of these together and patterns start making sense fast.
        The earlier example, <code>^\d{"{3}"}-\d{"{4}"}$</code>, simply means
        "the entire text must be exactly three digits, a dash, then four
        digits," which is a simplified phone number format.
      </p>

      <h2>Regular expression examples you'll actually use</h2>
      <p>Here are a few genuinely common patterns, explained plainly:</p>
      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>
          <strong>Email address:</strong> <code>[\w.-]+@[\w.-]+\.\w+</code> looks for
          some word characters, an @ symbol, more word characters, a dot, and a domain ending.
        </li>
        <li>
          <strong>Basic URL:</strong> <code>https?:\/\/[\w.-]+</code> matches
          "http" or "https" followed by "://" and a domain.
        </li>
        <li>
          <strong>US phone number:</strong> <code>\(?\d{"{3}"}\)?[-.\s]?\d{"{3}"}[-.\s]?\d{"{4}"}</code>
          handles common formats with or without parentheses and dashes.
        </li>
        <li>
          <strong>Date in YYYY-MM-DD format:</strong> <code>\d{"{4}"}-\d{"{2}"}-\d{"{2}"}</code>
          checks for four digits, a dash, two digits, a dash, two digits.
        </li>
      </ul>

      <h2>Regular expressions in Python</h2>
      <p>
        Python handles regex through a built-in module called <code>re</code>.
        A quick example of checking whether a string matches a pattern looks
        like this:
      </p>
      <pre className="bg-ink text-paper text-sm p-4 rounded-md overflow-auto my-4">
{`import re

pattern = r"\\d{3}-\\d{4}"
text = "Call me at 555-1234"

match = re.search(pattern, text)
if match:
    print("Found:", match.group())`}
      </pre>
      <p>
        The <code>r</code> before the pattern string tells Python to treat
        backslashes literally, which avoids a lot of confusion, since regex
        already uses backslashes heavily on its own. Python's <code>re</code>{" "}
        module also supports <code>findall</code> to get every match,
        and <code>sub</code> to find and replace text automatically.
      </p>

      <h2>Regular expressions in JavaScript</h2>
      <p>
        In JavaScript, regex has native support, meaning you don't need to
        import anything. Patterns are written between slashes:
      </p>
      <pre className="bg-ink text-paper text-sm p-4 rounded-md overflow-auto my-4">
{`const pattern = /\\d{3}-\\d{4}/;
const text = "Call me at 555-1234";

const match = text.match(pattern);
if (match) {
  console.log("Found:", match[0]);
}`}
      </pre>
      <p>
        JavaScript also supports flags right after the closing slash, like{" "}
        <code>g</code> for finding every match instead of stopping at the
        first one, or <code>i</code> for ignoring uppercase and lowercase
        differences.
      </p>

      <h2>What people mean by "regex calculator" or "regex builder"</h2>
      <p>
        These terms come up a lot in search, and they're really pointing at
        the same idea from different angles. A regex isn't something you
        calculate the way you'd calculate a math problem, but tools often
        marketed as a regex calculator or regex builder are usually just an
        interactive way to construct and test a pattern without memorizing
        the syntax yourself, often through a visual interface or preset
        building blocks. A regex generator works similarly, sometimes
        suggesting a pattern automatically based on example text you provide.
        All of these ultimately feed into the same thing: a regular
        expression you can test against real text before using it in actual
        code.
      </p>

      <h2>How to actually test a regular expression</h2>
      <p>
        The fastest way to learn regex isn't reading syntax references, it's
        writing a pattern and immediately seeing what it matches. That's the
        entire point of a regex tester: type a pattern, paste in some sample
        text, and watch matches highlight instantly, without writing any
        code or running anything locally. It turns regex from an abstract
        set of rules into something you can experiment with directly.
      </p>
      <p>
        You can try this yourself with the{" "}
        <a href="/tools/dev/regex-tester" className="text-rust hover:underline">
          free regex tester
        </a>{" "}
        on this site. It highlights matches live, shows the exact position
        and any capture groups for each match, and includes preset patterns
        for common cases like emails and phone numbers, so you can start from
        a working example instead of a blank box.
      </p>

      <h2>Common mistakes beginners make</h2>
      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>Forgetting to escape special characters. A literal dot needs to be written as <code>\.</code>, otherwise it matches any character.</li>
        <li>Writing a pattern that's too greedy, matching more text than intended because quantifiers like <code>*</code> grab as much as possible by default.</li>
        <li>Not anchoring the pattern with <code>^</code> and <code>$</code>, which can cause partial matches inside a larger string when you actually wanted an exact match.</li>
        <li>Assuming regex can validate absolutely everything. Fully validating an email address, for instance, is far messier than most people expect, and a simpler pattern combined with an actual verification step is usually more practical.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>
        Regex looks like a wall of symbols at first, but it's really just a
        compact language for describing patterns in text, and a small
        vocabulary of symbols covers the vast majority of real-world use
        cases. Whether you're validating a form, searching through log
        files, or just curious what those slashes and backslashes actually
        mean, the fastest way to get comfortable is to open a regex tester
        and start experimenting with real text.
      </p>

      <div className="not-prose mt-14 pt-8 border-t border-ink/10">
        <p className="text-sm text-slate mb-4">Keep reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/tools/dev/regex-tester"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">Try the regex tester</span>
            <span className="block text-xs text-slate mt-1">Test patterns live with match details and a cheat sheet</span>
          </a>
          <a
            href="/tools/dev/json-formatter"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">Try the JSON formatter</span>
            <span className="block text-xs text-slate mt-1">Format, minify, or explore JSON as a tree</span>
          </a>
        </div>
      </div>
    </article>
  );
}
