/* Backend for the "Order It Right" reader feedback form.
   Deploy this as a Google Apps Script Web App bound to a private Google
   Sheet. See README.md in this folder for setup steps.

   Sheet columns (row 1 = header): Timestamp | Name | Message | Rating | Approved
   Only rows with Approved = TRUE are ever returned by doGet(), so the raw
   sheet (and anything not yet approved) stays visible to you only. */

var MAX_MESSAGE_LEN = 1000;
var MAX_NAME_LEN = 80;
var MAX_PUBLISHED = 30;

function getSheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
}

function doPost(e) {
  var sheet = getSheet();
  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return respond({ ok: false, error: "Invalid request." });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (data.website) {
    return respond({ ok: true });
  }

  var name = String(data.name || "Anonymous").trim().slice(0, MAX_NAME_LEN) || "Anonymous";
  var message = String(data.message || "").trim().slice(0, MAX_MESSAGE_LEN);
  var rating = Math.max(0, Math.min(5, Number(data.rating) || 0));

  if (!message) {
    return respond({ ok: false, error: "Message is required." });
  }

  sheet.appendRow([new Date(), name, message, rating, false]);
  return respond({ ok: true });
}

function doGet(e) {
  var sheet = getSheet();
  var rows = sheet.getDataRange().getValues();
  var body = rows.slice(1); // drop header row

  var feedback = body
    .filter(function (row) {
      return row[4] === true;
    })
    .map(function (row) {
      return {
        date: row[0] instanceof Date ? row[0].toISOString() : "",
        name: row[1],
        message: row[2],
        rating: row[3]
      };
    })
    .reverse()
    .slice(0, MAX_PUBLISHED);

  return respond({ ok: true, feedback: feedback });
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
