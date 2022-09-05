const { workspace } = require("@c4mjs/dsl");

const ws = workspace("Big Bank PLC", "1.0.0");

ws.group("Internet Banking System", (g) => {
  const personalBankingCustomer = g.person("Personal Banking Customer", (p) => {
    p.desc = "A customer of the bank, with personal bank accounts.";

    p.calls(internetBankingSystem, "Views account balances, and makes payments using");
  });

  const internetBankingSystem = g.system("Internet Banking System", (s) => {
    s.desc = "Allows customers to view information about their bank accountsm and make payments.";

    s.calls(emailSystem, "Sends e-mails using");
    s.calls(mainframeBankingSystem, "Gets account information from, and makes payments using");

    const webApp = s.container("Web Application", (c) => {
      c.desc = "Delivers the static content and the Internet Banking single page application.";
      c.tech = "Java and Spring MVC";

      c.receives(personalBankingCustomer, "Visits bigbank.com/ib using");
      c.calls(singlePageApp, "Delivers to the customers web browser");
    });
    const singlePageApp = s.container("Single-Page Application", (c) => {
      c.desc = "Provides all of the Internet Banking functionality to the customers via their web browser";
      c.tech = "Javascript and Angular";

      c.receives(personalBankingCustomer, "Views account balances, and makes payments using");
      c.calls(apiApp, "Makes API Calls to");
    });
    const mobileApp = s.container("Mobile Application", (c) => {
      c.desc = "Provides a limited subset of the internet banking functionality to customers via their mobile device.";
      c.tech = "Xamarmin";

      c.receives(personalBankingCustomer, "Views account balances, and makes payments using");
      c.calls(apiApp, "Makes API Calls to");
    });
    const apiApp = s.container("API Application", (c) => {
      c.desc = "Provides internet banking functionality via a JSON/HTTPS api.";
      c.tech = "Java and Spring MVC";

      c.calls(database, "Read from and Writes to");
      c.calls(mainframeBankingSystem, "Makes API Calls to");
      c.calls(emailSystem, "Sends emails using");
    });
    const database = s.container("Database", (c) => {
      c.desc = "Stores user registration information, hashed authentication credentials, access logs etc.";
      c.tech = "Oracle Database Schema";
    });
  });

  const mainframeBankingSystem = g.system("Mainframe Banking System", (s) => {
    s.desc = "Stores all of the core banking information about customers, accounts, transactions etc";
    s.external = true;

    s.calls(emailSystem, "Sends e-mail using");
  });

  const emailSystem = g.system("E-mail System", (s) => {
    s.desc = "The internal Microsoft Exchange e-mail system.";
    s.external = true;

    s.calls(personalBankingCustomer, "Sends e-mail to");
  });
});

module.exports = ws;
