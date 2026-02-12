# Design Doc: Book Cover Enrichment using Google Books API

## Status
Proposed

## Context
The current book listing relies on manual `books.com.tw` URLs or falls back to a generic Unsplash placeholder. This results in poor visual coverage and an unreliable user experience for Taiwanese book titles.

## Goals
- Achieve high accuracy for book cover images.
- Automate the discovery of covers for books missing direct links.
- Maintain fast build times and snappy UI performance.

## Design
The solution transforms the data synchronization process from a simple CSV-to-TS conversion into an enrichment pipeline.

### Architecture
1. **Sync Script (`scripts/sync-data.js`)**: Modified to include an enrichment phase.
2. **Google Books Volumes API**: Queried during the sync process to find missing covers using title and author metadata.
3. **Local Cache (`scripts/cover_cache.json`)**: Stores successful lookups to minimize API calls and ensure consistent results across syncs.
4. **Data Output (`books_data.ts`)**: The final static data file will contain verified cover URLs.

### Matching Logic
- Strip common Taiwanese book punctuation (e.g., `《`, `》`, `：`).
- Query Google Books using `intitle:` and `inauthor:` parameters.
- Prioritize `thumbnail` or `smallThumbnail` from the API response.
- Validate image URL reachability before saving.

### Error Handling & Performance
- **Rate Limiting**: Sequential requests with a 200-500ms delay.
- **Fallbacks**: If no cover is found, use a branded placeholder instead of a random image.
- **API Failures**: Graceful failure handling; existing data is preserved if the API is unreachable.

## Implementation Plan
1. Refactor `scripts/sync-data.js` to support asynchronous enrichment.
2. Implement `fetchCoverFromGoogle(title, author)` with search optimization.
3. Add a local JSON cache to persist results.
4. Update the sync workflow to use the `GOOGLE_BOOKS_API_KEY` environment variable.
5. Verify output in `books_data.ts` and `missing_covers.log`.
