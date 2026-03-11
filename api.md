# LegalEntity

Types:

- <code><a href="./src/resources/legal-entity.ts">PaginationResponse</a></code>
- <code><a href="./src/resources/legal-entity.ts">LegalEntityListResponse</a></code>

Methods:

- <code title="get /legal-entity">client.legalEntity.<a href="./src/resources/legal-entity.ts">list</a>() -> LegalEntityListResponse</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">Account</a></code>
- <code><a href="./src/resources/account.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/account.ts">AccountRetrieveBalanceResponse</a></code>

Methods:

- <code title="get /account/{accountId}">client.account.<a href="./src/resources/account.ts">retrieve</a>(accountID) -> Account</code>
- <code title="get /account">client.account.<a href="./src/resources/account.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /account/{accountId}/balance">client.account.<a href="./src/resources/account.ts">retrieveBalance</a>(accountID) -> AccountRetrieveBalanceResponse</code>

# VirtualAccount

Types:

- <code><a href="./src/resources/virtual-account.ts">CommissionDetails</a></code>
- <code><a href="./src/resources/virtual-account.ts">CommissionRule</a></code>
- <code><a href="./src/resources/virtual-account.ts">Money</a></code>
- <code><a href="./src/resources/virtual-account.ts">VirtualAccount</a></code>
- <code><a href="./src/resources/virtual-account.ts">VirtualAccountModel</a></code>
- <code><a href="./src/resources/virtual-account.ts">VirtualAccountCreateResponse</a></code>
- <code><a href="./src/resources/virtual-account.ts">VirtualAccountUpdateResponse</a></code>
- <code><a href="./src/resources/virtual-account.ts">VirtualAccountListResponse</a></code>

Methods:

- <code title="post /virtual-account">client.virtualAccount.<a href="./src/resources/virtual-account.ts">create</a>({ ...params }) -> VirtualAccountCreateResponse</code>
- <code title="get /virtual-account/{virtualAccountId}">client.virtualAccount.<a href="./src/resources/virtual-account.ts">retrieve</a>(virtualAccountID) -> VirtualAccount</code>
- <code title="patch /virtual-account/{virtualAccountId}">client.virtualAccount.<a href="./src/resources/virtual-account.ts">update</a>(virtualAccountID, { ...params }) -> VirtualAccountUpdateResponse</code>
- <code title="get /virtual-account">client.virtualAccount.<a href="./src/resources/virtual-account.ts">list</a>({ ...params }) -> VirtualAccountListResponse</code>

# Transaction

Types:

- <code><a href="./src/resources/transaction.ts">Transaction</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionAggregateResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionRetrieveFeeDetailsResponse</a></code>
- <code><a href="./src/resources/transaction.ts">TransactionUpdateNoteResponse</a></code>

Methods:

- <code title="get /transaction/{transactionId}">client.transaction.<a href="./src/resources/transaction.ts">retrieve</a>(transactionID) -> Transaction</code>
- <code title="get /transaction">client.transaction.<a href="./src/resources/transaction.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="get /transaction/aggregation">client.transaction.<a href="./src/resources/transaction.ts">aggregate</a>({ ...params }) -> TransactionAggregateResponse</code>
- <code title="get /transaction/{transactionId}/fee-details">client.transaction.<a href="./src/resources/transaction.ts">retrieveFeeDetails</a>(transactionID) -> TransactionRetrieveFeeDetailsResponse</code>
- <code title="patch /transaction/{transactionId}/note">client.transaction.<a href="./src/resources/transaction.ts">updateNote</a>(transactionID, { ...params }) -> TransactionUpdateNoteResponse</code>

# Transfer

Types:

- <code><a href="./src/resources/transfer.ts">TransferCreateVirtualAccountTransferResponse</a></code>

Methods:

- <code title="post /transfer/virtual-account">client.transfer.<a href="./src/resources/transfer.ts">createVirtualAccountTransfer</a>({ ...params }) -> TransferCreateVirtualAccountTransferResponse</code>

# Card

Types:

- <code><a href="./src/resources/card/card.ts">Card</a></code>
- <code><a href="./src/resources/card/card.ts">CardGroupUtilization</a></code>
- <code><a href="./src/resources/card/card.ts">CardStatus</a></code>
- <code><a href="./src/resources/card/card.ts">CardListResponse</a></code>

Methods:

- <code title="post /card">client.card.<a href="./src/resources/card/card.ts">create</a>({ ...params }) -> Card</code>
- <code title="get /card/{cardId}">client.card.<a href="./src/resources/card/card.ts">retrieve</a>(cardID, { ...params }) -> Card</code>
- <code title="patch /card/{cardId}">client.card.<a href="./src/resources/card/card.ts">update</a>(cardID, { ...params }) -> Card</code>
- <code title="get /card">client.card.<a href="./src/resources/card/card.ts">list</a>({ ...params }) -> CardListResponse</code>
- <code title="get /card/{cardId}/utilization">client.card.<a href="./src/resources/card/card.ts">getUtilization</a>(cardID) -> CardGroupUtilization</code>

## SpendingConstraint

Types:

- <code><a href="./src/resources/card/spending-constraint.ts">PartialSpendingConstraint</a></code>
- <code><a href="./src/resources/card/spending-constraint.ts">Restriction</a></code>
- <code><a href="./src/resources/card/spending-constraint.ts">SpendingConstraint</a></code>

Methods:

- <code title="put /card/{cardId}/spending-constraint">client.card.spendingConstraint.<a href="./src/resources/card/spending-constraint.ts">updateFull</a>(cardID, { ...params }) -> SpendingConstraint</code>
- <code title="patch /card/{cardId}/spending-constraint">client.card.spendingConstraint.<a href="./src/resources/card/spending-constraint.ts">updatePartial</a>(cardID, { ...params }) -> SpendingConstraint</code>

# CardGroup

Types:

- <code><a href="./src/resources/card-group/card-group.ts">CardGroup</a></code>
- <code><a href="./src/resources/card-group/card-group.ts">CardGroupListResponse</a></code>

Methods:

- <code title="post /card-group">client.cardGroup.<a href="./src/resources/card-group/card-group.ts">create</a>({ ...params }) -> CardGroup</code>
- <code title="get /card-group/{cardGroupId}">client.cardGroup.<a href="./src/resources/card-group/card-group.ts">retrieve</a>(cardGroupID) -> CardGroup</code>
- <code title="patch /card-group/{cardGroupId}">client.cardGroup.<a href="./src/resources/card-group/card-group.ts">update</a>(cardGroupID, { ...params }) -> CardGroup</code>
- <code title="get /card-group">client.cardGroup.<a href="./src/resources/card-group/card-group.ts">list</a>({ ...params }) -> CardGroupListResponse</code>
- <code title="get /card-group/{cardGroupId}/utilization">client.cardGroup.<a href="./src/resources/card-group/card-group.ts">getUtilization</a>(cardGroupID) -> CardGroupUtilization</code>

## SpendingConstraint

Methods:

- <code title="put /card-group/{cardGroupId}/spending-constraint">client.cardGroup.spendingConstraint.<a href="./src/resources/card-group/spending-constraint.ts">updateFull</a>(cardGroupID, { ...params }) -> SpendingConstraint</code>
- <code title="patch /card-group/{cardGroupId}/spending-constraint">client.cardGroup.spendingConstraint.<a href="./src/resources/card-group/spending-constraint.ts">updatePartial</a>(cardGroupID, { ...params }) -> SpendingConstraint</code>

# CardProduct

Types:

- <code><a href="./src/resources/card-product.ts">CardProductListResponse</a></code>

Methods:

- <code title="get /card-product">client.cardProduct.<a href="./src/resources/card-product.ts">list</a>({ ...params }) -> CardProductListResponse</code>

# SlashHandle

# Pay

# Webhook

Types:

- <code><a href="./src/resources/webhook.ts">Webhook</a></code>
- <code><a href="./src/resources/webhook.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /webhook">client.webhook.<a href="./src/resources/webhook.ts">create</a>({ ...params }) -> Webhook</code>
- <code title="patch /webhook/{webhookId}">client.webhook.<a href="./src/resources/webhook.ts">update</a>(webhookID, { ...params }) -> Webhook</code>
- <code title="get /webhook">client.webhook.<a href="./src/resources/webhook.ts">list</a>({ ...params }) -> WebhookListResponse</code>

# Merchant

Types:

- <code><a href="./src/resources/merchant.ts">Merchant</a></code>
- <code><a href="./src/resources/merchant.ts">MerchantListResponse</a></code>

Methods:

- <code title="get /merchant/{merchantId}">client.merchant.<a href="./src/resources/merchant.ts">retrieve</a>(merchantID) -> Merchant</code>
- <code title="get /merchant">client.merchant.<a href="./src/resources/merchant.ts">list</a>({ ...params }) -> MerchantListResponse</code>

# MerchantCategory

Types:

- <code><a href="./src/resources/merchant-category.ts">MerchantCategoryListResponse</a></code>

Methods:

- <code title="get /merchant-category">client.merchantCategory.<a href="./src/resources/merchant-category.ts">list</a>({ ...params }) -> MerchantCategoryListResponse</code>

# DeveloperAccount

Types:

- <code><a href="./src/resources/developer-account.ts">DeveloperApplicationData</a></code>
- <code><a href="./src/resources/developer-account.ts">DeveloperApplicationModel</a></code>
- <code><a href="./src/resources/developer-account.ts">DeveloperApplicationType</a></code>

Methods:

- <code title="post /developer-account/{developerAccountId}/application">client.developerAccount.<a href="./src/resources/developer-account.ts">createApplication</a>(developerAccountID, { ...params }) -> DeveloperApplicationModel</code>

# DeveloperApplication

Methods:

- <code title="get /developer-application/{developerApplicationId}">client.developerApplication.<a href="./src/resources/developer-application.ts">retrieve</a>(developerApplicationID) -> DeveloperApplicationModel</code>
- <code title="patch /developer-application/{developerApplicationId}">client.developerApplication.<a href="./src/resources/developer-application.ts">update</a>(developerApplicationID, { ...params }) -> DeveloperApplicationModel</code>
- <code title="post /developer-application/{developerApplicationId}/secret">client.developerApplication.<a href="./src/resources/developer-application.ts">createOrRegenerateSecret</a>(developerApplicationID) -> DeveloperApplicationModel</code>

# WellKnown

Types:

- <code><a href="./src/resources/well-known.ts">WellKnownRetrieveOpenidConfigurationResponse</a></code>

Methods:

- <code title="get /.well-known/openid-configuration">client.wellKnown.<a href="./src/resources/well-known.ts">retrieveOpenidConfiguration</a>() -> WellKnownRetrieveOpenidConfigurationResponse</code>

# Oauth2

Types:

- <code><a href="./src/resources/oauth2/oauth2.ts">Oauth2GetTokenResponse</a></code>

Methods:

- <code title="post /oauth2/token">client.oauth2.<a href="./src/resources/oauth2/oauth2.ts">getToken</a>({ ...params }) -> Oauth2GetTokenResponse</code>

## Userinfo

Types:

- <code><a href="./src/resources/oauth2/userinfo.ts">UserInfo</a></code>

Methods:

- <code title="get /oauth2/userinfo">client.oauth2.userinfo.<a href="./src/resources/oauth2/userinfo.ts">retrieve</a>() -> UserInfo</code>
- <code title="post /oauth2/userinfo">client.oauth2.userinfo.<a href="./src/resources/oauth2/userinfo.ts">submit</a>() -> UserInfo</code>

# Fdx

## Customers

Types:

- <code><a href="./src/resources/fdx/customers.ts">CustomerRetrieveCurrentResponse</a></code>

Methods:

- <code title="get /fdx/customers/current">client.fdx.customers.<a href="./src/resources/fdx/customers.ts">retrieveCurrent</a>() -> CustomerRetrieveCurrentResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/fdx/accounts/accounts.ts">DepositAccount</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">InvestmentAccount</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">LineOfCreditAccount</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">LoanAccount</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">AccountListTransactionsResponse</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">AccountRetrieveContactResponse</a></code>
- <code><a href="./src/resources/fdx/accounts/accounts.ts">AccountRetrievePaymentNetworksResponse</a></code>

Methods:

- <code title="get /fdx/accounts/{accountId}">client.fdx.accounts.<a href="./src/resources/fdx/accounts/accounts.ts">retrieve</a>(accountID) -> AccountRetrieveResponse</code>
- <code title="get /fdx/accounts">client.fdx.accounts.<a href="./src/resources/fdx/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /fdx/accounts/{accountId}/transactions">client.fdx.accounts.<a href="./src/resources/fdx/accounts/accounts.ts">listTransactions</a>(accountID, { ...params }) -> AccountListTransactionsResponse</code>
- <code title="get /fdx/accounts/{accountId}/contact">client.fdx.accounts.<a href="./src/resources/fdx/accounts/accounts.ts">retrieveContact</a>(accountID) -> AccountRetrieveContactResponse</code>
- <code title="get /fdx/accounts/{accountId}/payment-networks">client.fdx.accounts.<a href="./src/resources/fdx/accounts/accounts.ts">retrievePaymentNetworks</a>(accountID, { ...params }) -> AccountRetrievePaymentNetworksResponse</code>

### Statements

Types:

- <code><a href="./src/resources/fdx/accounts/statements.ts">StatementListResponse</a></code>

Methods:

- <code title="get /fdx/accounts/{accountId}/statements">client.fdx.accounts.statements.<a href="./src/resources/fdx/accounts/statements.ts">list</a>(accountID, { ...params }) -> StatementListResponse</code>
- <code title="get /fdx/accounts/{accountId}/statements/{statementId}">client.fdx.accounts.statements.<a href="./src/resources/fdx/accounts/statements.ts">retrievePdf</a>(statementID, { ...params }) -> Response</code>

# Crypto

Types:

- <code><a href="./src/resources/crypto.ts">CryptoCreateOfframpResponse</a></code>

Methods:

- <code title="post /crypto/offramp">client.crypto.<a href="./src/resources/crypto.ts">createOfframp</a>({ ...params }) -> CryptoCreateOfframpResponse</code>
