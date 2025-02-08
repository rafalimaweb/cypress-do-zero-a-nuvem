it.only("testa a página da política de privacidade de forma independente", () => {
  cy.visit("http://127.0.0.1:5500/src/privacy.html");
  cy.contains("h1", "CAC TAT - Política de Privacidade").should("be.visible");
  cy.contains("p", "Talking About Testing").should("be.visible");
});
