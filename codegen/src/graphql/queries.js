/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageUploadUrl = /* GraphQL */ `
  query GetImageUploadUrl($extension: String, $contentType: String) {
    getImageUploadUrl(extension: $extension, contentType: $contentType)
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($where: ContractWhereInput!) {
    getContract(where: $where) {
      contractId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      contractDate
      projectName
      priceLevel
      status
      convertedDate
      totalJobCost
      totalHours
      totalContractCosts
      totalContractProfit
      totalContingency
      totalContractPrice
      source
      finalized
      finalizedDate
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts($where: ContractWhereInput, $skip: Int, $take: Int) {
    listContracts(where: $where, skip: $skip, take: $take) {
      contractId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      contractDate
      projectName
      priceLevel
      status
      convertedDate
      totalJobCost
      totalHours
      totalContractCosts
      totalContractProfit
      totalContingency
      totalContractPrice
      source
      finalized
      finalizedDate
    }
  }
`;
export const countContracts = /* GraphQL */ `
  query CountContracts($where: ContractWhereInput, $skip: Int, $take: Int) {
    countContracts(where: $where, skip: $skip, take: $take)
  }
`;
export const getContractItem = /* GraphQL */ `
  query GetContractItem($where: ContractItemWhereInput!) {
    getContractItem(where: $where) {
      contractId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const listContractItems = /* GraphQL */ `
  query ListContractItems(
    $where: ContractItemWhereInput
    $skip: Int
    $take: Int
  ) {
    listContractItems(where: $where, skip: $skip, take: $take) {
      contractId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const countContractItems = /* GraphQL */ `
  query CountContractItems(
    $where: ContractItemWhereInput
    $skip: Int
    $take: Int
  ) {
    countContractItems(where: $where, skip: $skip, take: $take)
  }
`;
export const getContractJobcost = /* GraphQL */ `
  query GetContractJobcost($where: ContractJobcostWhereInput!) {
    getContractJobcost(where: $where) {
      costId
      contractId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const listContractJobcosts = /* GraphQL */ `
  query ListContractJobcosts(
    $where: ContractJobcostWhereInput
    $skip: Int
    $take: Int
  ) {
    listContractJobcosts(where: $where, skip: $skip, take: $take) {
      costId
      contractId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const countContractJobcosts = /* GraphQL */ `
  query CountContractJobcosts(
    $where: ContractJobcostWhereInput
    $skip: Int
    $take: Int
  ) {
    countContractJobcosts(where: $where, skip: $skip, take: $take)
  }
`;
export const getContractTerm = /* GraphQL */ `
  query GetContractTerm($where: ContractTermWhereInput!) {
    getContractTerm(where: $where) {
      termId
      contractId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const listContractTerms = /* GraphQL */ `
  query ListContractTerms(
    $where: ContractTermWhereInput!
    $skip: Int
    $take: Int
  ) {
    listContractTerms(where: $where, skip: $skip, take: $take) {
      termId
      contractId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const countContractTerms = /* GraphQL */ `
  query CountContractTerms(
    $where: ContractTermWhereInput
    $skip: Int
    $take: Int
  ) {
    countContractTerms(where: $where, skip: $skip, take: $take)
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($where: CustomerWhereInput!) {
    getCustomer(where: $where) {
      customerId
      name
      type
      address
      city
      state
      zipcode
      contactName
      contactEmail
      website
      source
      dateCreated
      dateUpdated
      phone
      priceLevel
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers($where: CustomerWhereInput, $skip: Int, $take: Int) {
    listCustomers(where: $where, skip: $skip, take: $take) {
      customerId
      name
      type
      address
      city
      state
      zipcode
      contactName
      contactEmail
      website
      source
      dateCreated
      dateUpdated
      phone
      priceLevel
    }
  }
`;
export const countCustomers = /* GraphQL */ `
  query CountCustomers($where: CustomerWhereInput, $skip: Int, $take: Int) {
    countCustomers(where: $where, skip: $skip, take: $take)
  }
`;
export const getEstimate = /* GraphQL */ `
  query GetEstimate($where: EstimateWhereInput!) {
    getEstimate(where: $where) {
      estimateId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      convertedDate
      projectName
      priceLevel
      status
      totalJobCost
      totalHours
      totalEstimateCost
      totalEstimateProfit
      totalContingency
      totalEstimatePrice
      source
    }
  }
`;
export const listEstimates = /* GraphQL */ `
  query ListEstimates($where: EstimateWhereInput, $skip: Int, $take: Int) {
    listEstimates(where: $where, skip: $skip, take: $take) {
      estimateId
      customerId
      userId
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      convertedDate
      projectName
      priceLevel
      status
      totalJobCost
      totalHours
      totalEstimateCost
      totalEstimateProfit
      totalContingency
      totalEstimatePrice
      source
    }
  }
`;
export const countEstimates = /* GraphQL */ `
  query CountEstimates($where: EstimateWhereInput, $skip: Int, $take: Int) {
    countEstimates(where: $where, skip: $skip, take: $take)
  }
`;
export const getEstimateItem = /* GraphQL */ `
  query GetEstimateItem($where: EstimateItemWhereInput!) {
    getEstimateItem(where: $where) {
      estimateId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const listEstimateItems = /* GraphQL */ `
  query ListEstimateItems(
    $where: EstimateItemWhereInput
    $skip: Int
    $take: Int
  ) {
    listEstimateItems(where: $where, skip: $skip, take: $take) {
      estimateId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const countEstimateItems = /* GraphQL */ `
  query CountEstimateItems(
    $where: EstimateItemWhereInput
    $skip: Int
    $take: Int
  ) {
    countEstimateItems(where: $where, skip: $skip, take: $take)
  }
`;
export const getEstimateJobcost = /* GraphQL */ `
  query GetEstimateJobcost($where: EstimateJobCostWhereInput!) {
    getEstimateJobcost(where: $where) {
      estimateId
      costId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const listEstimateJobcosts = /* GraphQL */ `
  query ListEstimateJobcosts(
    $where: EstimateJobCostWhereInput
    $skip: Int
    $take: Int
  ) {
    listEstimateJobcosts(where: $where, skip: $skip, take: $take) {
      estimateId
      costId
      name
      crewQty
      jobNote
      hours
      rate
      total
      dateCreated
      dateUpdated
      equipQty
      otherQty
    }
  }
`;
export const countEstimateJobcosts = /* GraphQL */ `
  query CountEstimateJobcosts(
    $where: EstimateJobCostWhereInput
    $skip: Int
    $take: Int
  ) {
    countEstimateJobcosts(where: $where, skip: $skip, take: $take)
  }
`;
export const getEstimateTerm = /* GraphQL */ `
  query GetEstimateTerm($where: EstimateTermWhereInput!) {
    getEstimateTerm(where: $where) {
      termId
      estimateId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const listEstimateTerms = /* GraphQL */ `
  query ListEstimateTerms(
    $where: EstimateTermWhereInput
    $skip: Int
    $take: Int
  ) {
    listEstimateTerms(where: $where, skip: $skip, take: $take) {
      termId
      estimateId
      description
      type
      dateCreated
      dateUpdated
    }
  }
`;
export const countEstimateTerms = /* GraphQL */ `
  query CountEstimateTerms(
    $where: EstimateTermWhereInput
    $skip: Int
    $take: Int
  ) {
    countEstimateTerms(where: $where, skip: $skip, take: $take)
  }
`;
export const getInstallationTerm = /* GraphQL */ `
  query GetInstallationTerm($where: InstallationTermWhereInput!) {
    getInstallationTerm(where: $where) {
      termId
      type
      jobType
      class
      description
      dateCreated
      dateUpdated
    }
  }
`;
export const listInstallationTerms = /* GraphQL */ `
  query ListInstallationTerms(
    $where: InstallationTermWhereInput
    $skip: Int
    $take: Int
  ) {
    listInstallationTerms(where: $where, skip: $skip, take: $take) {
      termId
      type
      jobType
      class
      description
      dateCreated
      dateUpdated
    }
  }
`;
export const countInstallationTerms = /* GraphQL */ `
  query CountInstallationTerms(
    $where: InstallationTermWhereInput
    $skip: Int
    $take: Int
  ) {
    countInstallationTerms(where: $where, skip: $skip, take: $take)
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($where: ProductWhereInput!) {
    getProduct(where: $where) {
      productId
      category
      name
      color
      diameter
      gauge
      height
      width
      upright
      type
      uom
      length
      roundup
      accountingId
      vendorId
      preferredVendor
      rail
      model
      frame
      mesh
      selvage
      stock
      location
      weight
      cost
      classType
      dateCreated
      dateUpdated
      gateType
      hardwareFunction
      func
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts($where: ProductWhereInput, $skip: Int, $take: Int) {
    listProducts(where: $where, skip: $skip, take: $take) {
      productId
      category
      name
      color
      diameter
      gauge
      height
      width
      upright
      type
      uom
      length
      roundup
      accountingId
      vendorId
      preferredVendor
      rail
      model
      frame
      mesh
      selvage
      stock
      location
      weight
      cost
      classType
      dateCreated
      dateUpdated
      gateType
      hardwareFunction
      func
    }
  }
`;
export const countProducts = /* GraphQL */ `
  query CountProducts($where: ProductWhereInput, $skip: Int, $take: Int) {
    countProducts(where: $where, skip: $skip, take: $take)
  }
`;
export const getJobCost = /* GraphQL */ `
  query GetJobCost($where: JobCostWhereInput!) {
    getJobCost(where: $where) {
      costId
      name
      type
      rate
      rateType
      jobType
      dateCreated
      dateUpdated
    }
  }
`;
export const listJobCosts = /* GraphQL */ `
  query ListJobCosts($where: JobCostWhereInput, $skip: Int, $take: Int) {
    listJobCosts(where: $where, skip: $skip, take: $take) {
      costId
      name
      type
      rate
      rateType
      jobType
      dateCreated
      dateUpdated
    }
  }
`;
export const countJobCosts = /* GraphQL */ `
  query CountJobCosts($where: JobCostWhereInput, $skip: Int, $take: Int) {
    countJobCosts(where: $where, skip: $skip, take: $take)
  }
`;
export const getEstimatorLayout = /* GraphQL */ `
  query GetEstimatorLayout($where: EstimatorLayoutWhereInput!) {
    getEstimatorLayout(where: $where) {
      estimatorId
      transactionId
      totalFootage
      totalLines
      totalEnds
      totalCorners
      totalHookups
      totalTieIns
      runsArray
      dateCreated
      dateUpdated
    }
  }
`;
export const listEstimatorLayouts = /* GraphQL */ `
  query ListEstimatorLayouts(
    $where: EstimatorLayoutWhereInput
    $skip: Int
    $take: Int
  ) {
    listEstimatorLayouts(where: $where, skip: $skip, take: $take) {
      estimatorId
      transactionId
      totalFootage
      totalLines
      totalEnds
      totalCorners
      totalHookups
      totalTieIns
      runsArray
      dateCreated
      dateUpdated
    }
  }
`;
export const countEstimatorLayouts = /* GraphQL */ `
  query CountEstimatorLayouts(
    $where: EstimatorLayoutWhereInput
    $skip: Int
    $take: Int
  ) {
    countEstimatorLayouts(where: $where, skip: $skip, take: $take)
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($where: OrderWhereInput!) {
    getOrder(where: $where) {
      orderId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
      finalized
      finalizedDate
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders($where: OrderWhereInput, $skip: Int, $take: Int) {
    listOrders(where: $where, skip: $skip, take: $take) {
      orderId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
      finalized
      finalizedDate
    }
  }
`;
export const countOrders = /* GraphQL */ `
  query CountOrders($where: OrderWhereInput, $skip: Int, $take: Int) {
    countOrders(where: $where, skip: $skip, take: $take)
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($where: OrderItemWhereInput!) {
    getOrderItem(where: $where) {
      orderId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems($where: OrderItemWhereInput, $skip: Int, $take: Int) {
    listOrderItems(where: $where, skip: $skip, take: $take) {
      orderId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
      received
      receivedDate
    }
  }
`;
export const countOrderItems = /* GraphQL */ `
  query CountOrderItems($where: OrderItemWhereInput, $skip: Int, $take: Int) {
    countOrderItems(where: $where, skip: $skip, take: $take)
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($where: QuoteWhereInput!) {
    getQuote(where: $where) {
      quoteId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
    }
  }
`;
export const listQuotes = /* GraphQL */ `
  query ListQuotes($where: QuoteWhereInput, $skip: Int, $take: Int) {
    listQuotes(where: $where, skip: $skip, take: $take) {
      quoteId
      customerId
      userId
      projectName
      priceLevel
      totalCost
      totalTax
      totalPrice
      totalProfit
      dateCreated
      dateUpdated
      status
      convertedDate
      source
    }
  }
`;
export const countQuotes = /* GraphQL */ `
  query CountQuotes($where: QuoteWhereInput, $skip: Int, $take: Int) {
    countQuotes(where: $where, skip: $skip, take: $take)
  }
`;
export const getQuoteItem = /* GraphQL */ `
  query GetQuoteItem($where: QuoteItemWhereInput!) {
    getQuoteItem(where: $where) {
      quoteId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const listQuoteItems = /* GraphQL */ `
  query ListQuoteItems($where: QuoteItemWhereInput, $skip: Int, $take: Int) {
    listQuoteItems(where: $where, skip: $skip, take: $take) {
      quoteId
      productId
      quantity
      cost
      markup
      price
      total
      dateCreated
      dateUpdated
      source
      color
      name
      rowId
      category
    }
  }
`;
export const countQuoteItems = /* GraphQL */ `
  query CountQuoteItems($where: QuoteItemWhereInput, $skip: Int, $take: Int) {
    countQuoteItems(where: $where, skip: $skip, take: $take)
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($where: UserWhereInput!) {
    getUser(where: $where) {
      userId
      lastName
      firstName
      middleInitial
      phone
      email
      hireDate
      isActive
      imageUrl
      backgroundImageUrl
      birthdate
      dateCreated
      dateUpdated
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers($where: UserWhereInput, $skip: Int, $take: Int) {
    listUsers(where: $where, skip: $skip, take: $take) {
      userId
      lastName
      firstName
      middleInitial
      phone
      email
      hireDate
      isActive
      imageUrl
      backgroundImageUrl
      birthdate
      dateCreated
      dateUpdated
    }
  }
`;
export const countUsers = /* GraphQL */ `
  query CountUsers($where: UserWhereInput, $skip: Int, $take: Int) {
    countUsers(where: $where, skip: $skip, take: $take)
  }
`;
