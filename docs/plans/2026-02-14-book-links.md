# Book Links Scraping

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** fill book links to data spreadsheet automatically and build the workflow into Google Sheet to help humans review the links easily .

**Design:**
- Add a new script `book-links.js`.  It looks for new titles in the data spreasheet's "暫貼區" tab, use Google's "I'm Feeling Lucky" feature to find the most likely book links for the following bookstores, and fill the links into the sheet:
  - books.com.tw
  - momoshop.com.tw
  - readmoo.com
  - www.rakuten.com.tw
  - ... and potentially more
- Make "暫貼區" a reviewer's workbench.  Add a button with AppScript to copy the book links to the book data tab once reviewers confirmed that the links are correct.
- Make the `book-links.js` a CLI that opens book links to review automatically in the local browser so that reviewers can use the same reviewing process on their local side.

---
