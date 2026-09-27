// Этот код вставляется в Google Таблицу: Расширения → Apps Script.
// Он принимает данные с теста и добавляет новую строку в таблицу.

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // Если таблица пустая — создаём заголовки
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Дата", "Имя", "Email", "Результат", "Баллы", "Согласие", "Страница"]);
  }

  const p = e.parameter;
  sheet.appendRow([new Date(), p.name, p.email, p.result, p.scores, p.consent, p.page]);

  return ContentService.createTextOutput("ok");
}
