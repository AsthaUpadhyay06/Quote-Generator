
    // 20 quotes ka array
    const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
      { text: "Software and cathedrals are much the same-first we build them,then we pray.", author: "Vince Lombardi" },
      { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
      { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
      { text: "Hard times create strong men.", author: "G. Michael Hopf" },
      { text: "Talk is cheap.Show me the code.", author: " Linus Torvalds" },
      { text: "Great things never come from comfort zones.", author: "Unknown" },
      { text: "Dream it. Wish it. Do it.", author: "Unknown" },
      { text: "The best way to get a project done faster is to start sooner", author: "Jim Highsmith" },
      { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Unknown" },
      { text: "Weeks of coding can save you hours of planning.", author: "Anonymous" },
      { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
      { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
      { text: "Do something today that your future self will thank you for.", author: "Unknown" },
      { text: "Simplicity is prerequisite for reliability", author: "Unknown" },
      { text: "Code never lies,comments sometimes do.", author: "Ron Jeffries" },
      { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
      { text: "Programming isn't about what you know; it's about what you can figure out", author: "Chris Pine" },
      { text: "Programmer: A machine that turns coffee into code.", author: "Anonymous" }
    ];

    let remainingQuotes = [...quotes]; // copy

    function getQuote() {
      if (remainingQuotes.length === 0) {
        remainingQuotes = [...quotes]; // reset after 20
        alert("All 20 quotes shown! Starting again...");
      }

      const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
      const selected = remainingQuotes.splice(randomIndex, 1)[0]; // remove to avoid repeat

      document.getElementById("quote").innerText = selected.text;
      document.getElementById("author").innerText = "— " + selected.author;
    }

    // Copy
    document.getElementById("copy-quote").addEventListener("click", () => {
      const text = document.getElementById("quote").innerText + " " + document.getElementById("author").innerText;
      navigator.clipboard.writeText(text);
      alert("Quote copied!");
    });

    // Tweet
    document.getElementById("tweet-quote").addEventListener("click", () => {
      const text = document.getElementById("quote").innerText + " " + document.getElementById("author").innerText;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}` ;
      window.open(twitterUrl, "_blank");
    });

    // New quote button
    document.getElementById("new-quote").addEventListener("click", getQuote);

    // First load
    getQuote();
  