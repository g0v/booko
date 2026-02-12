# Book Cover Enrichment (Books.com.tw Scraper) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Scrape `books.com.tw` for missing book covers during sync, controlled by a CLI flag.

**Architecture:** Use `https.get` to query the 博客來 search page, parse the HTML for the first product ID, and derive the image URL. Use a local cache to stay polite.

---

### Task 1: Implement Books.com.tw Search Scraper

**Files:**
- Modify: `scripts/sync-data.js` (add `fetchCoverFromBooksTW`)

**Step 1: Implement search scraper**
Add `fetchCoverFromBooksTW(title)`:
- Fetch `https://search.books.com.tw/search/query/key/${encodeURIComponent(title)}`.
- Use a regex to find the first `products/(\d+)` pattern in the HTML.
- If found, use the existing `getCoverFromUrl` logic to return the image URL.

**Step 2: Commit**
```bash
git add scripts/sync-data.js
git commit -m "feat: implement books.com.tw search scraper for covers"
```

---

### Task 2: Add CLI Flag and Integration

**Files:**
- Modify: `scripts/sync-data.js` (handle `--fetch-covers` flag)

**Step 1: Parse CLI arguments**
Check for `--fetch-covers` in `process.argv`.

**Step 2: Update enrichment logic**
In `enrichBooks`, call `fetchCoverFromBooksTW` instead of Google Books if the flag is enabled.

**Step 3: Commit**
```bash
git add scripts/sync-data.js
git commit -m "feat: add --fetch-covers flag and integrate scraper"
```

---

### Task 3: Final Verification

**Step 1: Run sync with scraper**
Run `node scripts/sync-data.js --fetch-covers`.

**Step 2: Verify cache and data**
Check `scripts/cover_cache.json` and `books_data.ts` for valid `books.com.tw` image URLs.

**Step 3: Commit**
```bash
git add scripts/cover_cache.json books_data.ts
git commit -m "chore: update book covers using 博客來 scraper"
```
