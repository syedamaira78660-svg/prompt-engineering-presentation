# Reader feedback — setup (free, Google Sheets)

The site is static (GitHub Pages, no server), so feedback is stored in a
**private Google Sheet** that only you can open, via a small **Google Apps
Script Web App** that acts as the API. This is entirely free and needs no
account beyond your existing Google account.

How it works:
- Visitors submit the form on the homepage → it POSTs to your Web App →
  the script appends a row to your Sheet with `Approved = FALSE`.
- The homepage GET-fetches the same Web App → it returns only the rows
  you've flipped to `Approved = TRUE`.
- The raw sheet (names, unapproved submissions, everything) is never
  public — only rows you explicitly approve are ever exposed, and only
  the four fields (date, name, message, rating), never the sheet itself.

## Setup (5 minutes)

1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   blank spreadsheet. Name it something like "Course Feedback".
2. In row 1, add these headers across columns A–E:
   `Timestamp | Name | Message | Rating | Approved`
3. In the sheet, go to **Extensions → Apps Script**. Delete the
   placeholder code and paste in the contents of [Code.gs](Code.gs) from
   this folder. Save (Ctrl+S).
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, then authorize it with your Google account when
     prompted (you'll see an "unverified app" warning — that's normal for
     a script only you deployed; click Advanced → Go to (project) →
     Allow).
5. Copy the **Web app URL** it gives you (ends in `/exec`).
6. Paste that URL into [`assets/js/feedback-config.js`](../assets/js/feedback-config.js)
   as the value of `FEEDBACK_API_URL`.
7. Commit and push. Submit a test message from the live site, then open
   the Sheet — you should see a new row with `Approved` unchecked.

## Moderating feedback

Open the Sheet any time. To publish a submission on the site, check the
box (or type `TRUE`) in its **Approved** column. Uncheck it to unpublish.
Nothing shows on the site until you approve it.

## Notes

- If you ever redeploy the script (not just "manage deployments → edit"),
  Apps Script gives you a new URL — update `feedback-config.js` again.
- The script trims messages to 1000 characters and names to 80, and
  silently drops submissions that fill the hidden honeypot field (bots).
- There's no rate limiting beyond that — if spam becomes a problem, the
  simplest fix is to just leave it unapproved and delete the row.
